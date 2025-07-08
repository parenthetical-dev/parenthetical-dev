"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "AI-Powered Platforms",
    href: "/work/ai-platforms",
    description: "Scalable and intelligent platforms built for the future.",
  },
  {
    title: "Interactive Experiences",
    href: "/work/interactive-experiences",
    description: "Engaging digital spaces that captivate and inspire users.",
  },
  {
    title: "Brand Identity Systems",
    href: "/work/branding",
    description: "Crafting unique and memorable brand identities from the ground up.",
  },
  {
    title: "Web & Mobile Applications",
    href: "/work/apps",
    description: "User-centric applications designed for performance and usability.",
  },
]

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
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-chartreuse hover:bg-transparent focus:bg-transparent focus:text-chartreuse data-[state=open]:bg-transparent data-[state=open]:text-chartreuse">
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg">
                      <ul className="flex flex-col w-[400px] gap-1 p-4">
                        {components.map((component) => (
                          <ListItem key={component.title} title={component.title} href={component.href}>
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
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
            <Button
              asChild
              className="h-9 bg-white text-black hover:bg-chartreuse hover:text-black rounded-full font-bold px-5 transition-colors"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
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
