import Providers from "@/components/providers"
import { ClerkProvider } from "@clerk/nextjs"
import { cn } from "@sayvoca/lib/utils"
import { Analytics, Toaster } from "@sayvoca/ui"
import { Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import "../styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "AI 영어 공부 서비스,🔥번잉🔥",
  description: "English Writing Study with AI",
  keywords: [
    "영어 작문 연습",
    "english writing",
    "영어공부사이트",
    "영어학습사이트",
    "영어공부",
    "직장인영어공부",
  ],

  creator: "hyunBell",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html data-theme="light" lang="ko" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background mx-auto scrollbar-none flex h-screen w-full !max-w-[100vw] justify-center font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="h-full w-full max-w-3xl">{children}</div>
            <Analytics />
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
