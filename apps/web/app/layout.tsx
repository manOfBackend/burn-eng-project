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
  title: "번잉",
  description: "Burn English",
  keywords: ["english voca learning", "chatGPT"],
  authors: [
    {
      name: "hyunBell",
      url: "https://irondeveloper.tistory.com",
    },
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
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background mx-auto flex h-screen w-full !max-w-[100vw] justify-center font-sans antialiased",
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
