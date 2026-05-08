"use client";

import { useAuth } from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { LogOut, LogIn } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { user, loading } = useAuth();

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight">MyLink</span>
        </Link>
        <div className="flex items-center justify-end space-x-4">
          {!loading && (
            user ? (
              <Button variant="ghost" onClick={handleLogout} className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">로그아웃</span>
              </Button>
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
