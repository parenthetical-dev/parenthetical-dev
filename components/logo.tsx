import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "lg" | "sm"
}

export function Logo({ className, size = "lg" }: LogoProps) {
  return (
    <h1
      className={cn(
        "font-bold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
        size === "lg" && "text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
        size === "sm" && "text-xl",
        className,
      )}
    >
      Parenthetical
    </h1>
  )
}
