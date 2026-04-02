import Image from "next/image";
import { Github, Mail, Globe, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-24 font-sans text-zinc-900 selection:bg-indigo-100 dark:bg-black dark:text-zinc-100">

      <main className="flex w-full max-w-lg flex-col items-center text-center">

        {/* Profile Avatar */}
        <div className="relative mb-10 h-32 w-32 overflow-hidden rounded-full ring-4 ring-white shadow-xl transition-transform hover:scale-105 dark:ring-zinc-800">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Seojun&backgroundColor=b6e3f4"
            alt="이서준 프로필"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Name & Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            이서준
          </h1>
          <p className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-400">
            Hanyang University Student
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">한양대학교 재학 중</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-14">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! 새로운 기술을 배우고 문제를 해결하는 과정을 즐깁니다.
            심플하고 효율적인 설계를 지향하며, 사용자에게 가치 있는 경험을 제공하기 위해 노력하고 있습니다.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-50"
          >
            <Github className="h-5 w-5" />
            <span className="font-semibold text-sm">GitHub</span>
          </a>
          <a
            href="mailto:example@hanyang.ac.kr"
            className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-50"
          >
            <Mail className="h-5 w-5" />
            <span className="font-semibold text-sm">Email</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-900 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-50 sm:col-span-2"
          >
            <Globe className="h-5 w-5" />
            <span className="font-semibold text-sm">Portfolio Website</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-zinc-400 dark:text-zinc-600">
          <p className="text-xs uppercase tracking-widest font-medium">
            © 2024 Lee Seojun
          </p>
        </footer>
      </main>
    </div>
  );
}
