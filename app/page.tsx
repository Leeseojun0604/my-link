import { dummyLinks } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
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
          {dummyLinks.map((link) => {
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
