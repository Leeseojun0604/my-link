import { Geist, Geist_Mono, JetBrains_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

import { AuthProvider } from "@/hooks/useAuth";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, "font-sans", jetbrainsMono.variable)}
    >
      <body>
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1">{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
