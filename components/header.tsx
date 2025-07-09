"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./logo"
import { ContactModal } from "./contact-modal"
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-full mt-4 px-6 bg-black/30 backdrop-blur-lg border border-white/10">
          <Link href="#" className="flex items-center gap-3" prefetch={false}>
            <Image src="/logo-icon.png" alt="Parenthetical Icon" width={24} height={24} className="filter invert" />
            <Logo size="sm" />
          </Link>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:text-chartreuse hover:bg-transparent focus:bg-transparent focus:text-chartreuse",
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#our-work" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:text-chartreuse hover:bg-transparent focus:bg-transparent focus:text-chartreuse",
                      )}
                    >
                      Our Work
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:text-chartreuse hover:bg-transparent focus:bg-transparent focus:text-chartreuse",
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-4">
              <Link
                href="/#calling-developers"
                className="group relative inline-flex items-center justify-center h-9 px-5 bg-chartreuse/20 backdrop-blur-md border border-chartreuse/50 text-chartreuse font-bold rounded-full hover:bg-chartreuse/30 hover:border-chartreuse/70 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/10 via-transparent to-chartreuse/5 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50 rounded-full" />
                <span className="relative z-10">Contribute</span>
              </Link>
              <ContactModal
                trigger={
                  <button className="group relative inline-flex items-center justify-center h-9 px-5 bg-purple-500/20 backdrop-blur-md border border-purple-500/50 text-purple-300 font-bold rounded-full hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50 rounded-full" />
                    <span className="relative z-10">Get In Touch</span>
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex w-full flex-col space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="break-words text-sm leading-snug text-gray-400">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
