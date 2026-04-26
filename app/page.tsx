"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { type LinkItem } from "@/data/links"
import { Loader2 } from "lucide-react"

import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "제목을 입력해주세요." })
    .max(50, { message: "제목은 50자 이내로 입력해주세요." }),
  url: z
    .string()
    .min(1, { message: "URL을 입력해주세요." })
    .regex(/^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/i, {
      message: "올바른 URL 형식이 아닙니다.",
    }),
})

export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchLinks = async () => {
    setIsLoading(true)
    try {
      const q = query(
        collection(db, "users/anonymous/links"),
        orderBy("createdAt", "desc")
      )
      const snapshot = await getDocs(q)
      const fetchedLinks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as LinkItem[]
      setLinks(fetchedLinks)
    } catch (error) {
      console.error("Error fetching links: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      url: "",
    },
  })

  const handleOpenChange = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      form.reset()
    }
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const finalUrl = values.url.startsWith("http") ? values.url : `https://${values.url}`
    setIsSubmitting(true)
    
    try {
      await addDoc(collection(db, "users/anonymous/links"), {
        title: values.title.trim(),
        url: finalUrl,
        createdAt: serverTimestamp(),
      })
      await fetchLinks() // 갱신을 위해 데이터 재호출
      handleOpenChange(false)
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("링크 추가 중 오류가 발생했습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const profile = {
    displayName: "Seojun Lee",
    username: "@seojun.lee",
    bio: "Frontend Engineer & UI/UX Enthusiast. \nBuilding modern web experiences. 🚀",
  }

  // 이니셜 추출 로직
  const getInitials = (name: string) => {
    return name.substring(0, 2).toUpperCase()
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center px-6 py-16 sm:py-24 overflow-hidden selection:bg-primary/30">

      {/* Ambient Animated Background (Glassmorphism + Glow) */}
      <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center">
        {/* 중앙 상단을 밝히는 거대한 원뿔/타원형 빛 */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] sm:w-[50vw] h-[50vh] rounded-full bg-primary/20 blur-[120px] opacity-70 mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vh] rounded-full bg-secondary/10 blur-[100px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-primary/10 blur-[120px] opacity-40 mix-blend-screen" />
      </div>

      <div className="w-full max-w-xl flex flex-col items-center gap-10 z-10">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Avatar className="w-24 h-24 ring-2 ring-primary/20 ring-offset-2 ring-offset-background shadow-xl">
            <AvatarImage src="" alt={profile.displayName} />
            <AvatarFallback className="bg-secondary/20 text-xl font-bold text-primary">
              {getInitials(profile.displayName)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1 items-center mt-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground/90">
              {profile.displayName}
            </h1>
            <p className="text-sm font-medium text-primary/80">
              {profile.username}
            </p>
          </div>

          <p className="max-w-sm text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-wrap mt-2">
            {profile.bio}
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          
          {/* 링크 추가 버튼 및 다이얼로그 */}
          <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger render={<Button className="w-full rounded-2xl h-14 text-base font-semibold shadow-md transition-transform hover:-translate-y-0.5" />}>
              + 링크 추가
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                  <DialogHeader>
                    <DialogTitle>새로운 링크 추가</DialogTitle>
                    <DialogDescription>
                      추가할 링크의 제목과 URL을 입력해주세요.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="py-2 flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>제목</FormLabel>
                          <FormControl>
                            <Input placeholder="예: 내 포트폴리오" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>URL</FormLabel>
                          <FormControl>
                            <Input type="text" inputMode="url" placeholder="https://example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <DialogFooter className="flex-col sm:flex-row gap-2">
                    <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => handleOpenChange(false)} disabled={isSubmitting}>
                      취소
                    </Button>
                    <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          추가 중...
                        </>
                      ) : (
                        "추가하기"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10 opacity-70">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-sm font-medium text-muted-foreground">링크를 불러오는 중입니다...</p>
            </div>
          ) : links.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center opacity-70">
              <p className="text-sm font-medium text-muted-foreground">아직 추가된 링크가 없습니다.</p>
            </div>
          ) : links.map((link) => {
            // Google Favicon URL 생성 (128px 고해상도 요청)
            const iconUrl = `https://www.google.com/s2/favicons?domain=${link.url}&sz=128`

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
              >
                <Card className="relative overflow-hidden border border-white/5 bg-card/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.04] dark:hover:bg-white/[0.04]">
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/5 via-transparent to-transparent transition-opacity duration-300" />

                  <CardContent className="p-4 sm:p-5 flex items-center gap-4">
                    {/* Favicon Container */}
                    <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-background/50 border border-border/50 shadow-inner overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={iconUrl}
                        alt={`${link.title} icon`}
                        className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Link Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-base sm:text-lg font-semibold text-foreground/90 truncate transition-colors duration-300 group-hover:text-primary">
                        {link.title}
                      </p>
                    </div>

                    {/* Placeholder for External Link Arrow (User requested not to install Hugeicons yet, so using simple text/symbol or empty space) */}
                    <div className="shrink-0 pl-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="text-primary/60 text-lg">↗</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
