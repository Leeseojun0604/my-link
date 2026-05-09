"use client";

import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { LogOut, LogIn, Link as LinkIcon, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Header() {
  const { user, loading } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleLogin = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
      alert("로그인 중 오류가 발생했습니다: " + (error as Error).message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  const handleCopyLink = () => {
    if (user?.displayName) {
      const url = `${window.location.origin}/${user.displayName}`;
      navigator.clipboard.writeText(url);
      alert("링크가 복사되었습니다!");
    } else {
      alert("로그인이 필요하거나 표시 이름이 없습니다.");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight">MyLink</span>
        </Link>
        <div className="flex items-center justify-end space-x-4">
          {!loading && (
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                    <AvatarFallback>{user.displayName?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.displayName}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleCopyLink} className="cursor-pointer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <span>내 링크 복사</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer">
                    <Moon className="mr-2 h-4 w-4 hidden dark:block" />
                    <Sun className="mr-2 h-4 w-4 block dark:hidden" />
                    <span>테마 변경 ({theme === 'dark' ? '라이트 모드' : '다크 모드'})</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>로그아웃</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button type="button" variant="default" onClick={handleLogin} className="flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">로그인</span>
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
}
