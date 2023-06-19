import '@sayvoca/ui/styles/globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@sayvoca/lib/utils"
import { Analytics, ThemeProvider } from '@sayvoca/ui'

interface RootLayoutProps {
  children: React.ReactNode
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: {
    default: '세이보카',
  },
  description: '세이보카 프로젝트',
  keywords: [
    "english voca learning",
    "chatGPT",
  ],
  authors: [
    {
      name: "hyunBell",
      url: "https://irondeveloper.tistory.com",
    },
  ],
  creator: "hyunBell",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],

}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background mx-auto font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className='max-w-3xl'>
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
