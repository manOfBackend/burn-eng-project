"use client"
import { cn } from "@sayvoca/lib/utils"
import { Icons } from "@sayvoca/ui/Icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MENU = [
  {
    name: "홈",
    icon: <Icons.home />,
    href: "/dashboard",
  },
  {
    name: "문제",
    icon: <Icons.pencil />,
    href: "/writing",
    strictHref: true,
  },
  {
    name: "학습이력",
    icon: <Icons.history />,
    href: "/writing/history",
  },
  {
    name: "설정",
    icon: <Icons.settings />,
    href: "/settings",
  },
]
export default function BottomNavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="btm-nav z-50 h-[50px] w-full max-w-3xl mx-auto bg-white">
      {MENU.map((item, index) => {
        const isActive = item.strictHref
          ? pathname === item.href
          : pathname.startsWith(item.href)

        return (
          <Link
            key={`${index}_${isActive}`}
            type="button"
            href={item.href}
            className={cn("btm-nav__item", {
              "active text-purple-700": isActive,
            })}
          >
            {item.icon}
          </Link>
        )
      })}
    </nav>
  )
}
