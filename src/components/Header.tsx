'use client'

import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-violet/15 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-brand-violet">
          Petnovio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/chat", label: "Chat" },
                { href: "/images", label: "Images" },
                { href: "/profile", label: "Profile" },
                { href: "/shop", label: "Shop" },
              ].map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brand-aqua/10 hover:text-brand-violet"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  )
}
