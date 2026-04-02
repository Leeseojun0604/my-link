import { Github, Mail, Globe, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid-pattern p-6 md:p-12 lg:p-24 selection:bg-black selection:text-white">
      <main className="mx-auto max-w-6xl">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <div className="inline-block border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black">
              Lee Seojun
            </h1>
          </div>
          <div className="mt-8">
            <div className="inline-flex max-w-fit items-center gap-3 border-4 border-black bg-[#FFDE59] px-6 py-3 text-lg md:text-xl font-bold uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <BookOpen className="h-6 w-6" />
              <span>Hanyang University</span>
            </div>
          </div>
        </header>

        {/* Grid Layout for Contents */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Main Bio Card (Spans 8 columns on large screens) */}
          <div className="group relative border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] lg:col-span-8">
            <div className="absolute -top-6 -right-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-black bg-pink-400 text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              !
            </div>
            <h2 className="mb-8 text-4xl font-extrabold uppercase tracking-tight">About Me</h2>
            <p className="text-2xl font-bold leading-relaxed text-zinc-900">
              안녕하세요! 새로운 기술을 배우고 문제를 해결하는 과정을 즐깁니다.
              심플하고 효율적인 설계를 지향하며, 사용자에게 가치 있는 경험을 제공하기 위해 끊임없이 노력하고 있습니다.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4 border-t-4 border-black pt-8">
              <span className="border-4 border-black bg-[#FF8E8B] px-4 py-2 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Frontend</span>
              <span className="border-4 border-black bg-[#6CD9A6] px-4 py-2 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Problem Solving</span>
              <span className="border-4 border-black bg-[#8BC5FF] px-4 py-2 text-lg font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Design</span>
            </div>
          </div>

          {/* Links Column (Spans 4 columns on large screens) */}
          <div className="flex flex-col gap-8 lg:col-span-4">
            <a
              href="#"
              className="flex items-center justify-between border-4 border-black bg-[#A388EE] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Github className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">GitHub</span>
              </div>
              <ArrowRight className="h-8 w-8" />
            </a>

            <a
              href="mailto:example@hanyang.ac.kr"
              className="flex items-center justify-between border-4 border-black bg-[#FF8E8B] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Mail className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">Email</span>
              </div>
              <ArrowRight className="h-8 w-8" />
            </a>

            <a
              href="#"
              className="flex items-center justify-between border-4 border-black bg-[#6CD9A6] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tight">Portfolio</span>
              </div>
              <ArrowRight className="h-8 w-8" />
            </a>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 border-4 border-black bg-[#FFDE59] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center justify-between gap-6 uppercase md:flex-row lg:px-4">
            <p className="text-2xl font-black tracking-widest">
              © 2024 Lee Seojun
            </p>
            <p className="text-lg font-extrabold bg-black text-[#FFDE59] px-4 py-2 border-2 border-black -rotate-1">
              STAY BRUTAL
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
