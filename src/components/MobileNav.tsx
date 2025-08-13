'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, MessageCircle, Images, ShoppingBag, User } from "lucide-react"

const tabs = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/chat", label: "Chat", Icon: MessageCircle },
  { href: "/images", label: "Images", Icon: Images },
  { href: "/shop", label: "Shop", Icon: ShoppingBag },
  { href: "/profile", label: "Profile", Icon: User },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-violet/15 bg-white/90 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {tabs.map(({ href, label, Icon }) => {
          const active = pathname === href
          return (
            <li key={href} className="flex">
              <Link
                href={href}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs",
                  "text-gray-600 hover:text-brand-violet",
                  active && "text-brand-violet bg-brand-aqua/10"
                )}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only md:not-sr-only">{label}</span>
                <span className="md:hidden">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
