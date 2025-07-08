"use client"
import Waves from "@/components/Waves"
import { Logo } from "@/components/logo"
import { ArrowDown } from "lucide-react"
import { Header } from "@/components/header"
import { CoreValues } from "@/components/core-values"
import { OurWork } from "@/components/our-work"

export default function HomePage() {
  const config = {
    lineColor: "rgba(223, 255, 0, 0.4)",
    backgroundColor: "#000000",
    waveSpeedX: 0.0125,
    waveSpeedY: 0.005,
    waveAmpX: 32,
    waveAmpY: 16,
    xGap: 8,
    yGap: 16,
    friction: 0.925,
    tension: 0.005,
    maxCursorMove: 100,
  }

  return (
    <main className="bg-black">
      <Header />
      <div className="relative w-screen h-screen overflow-hidden">
        <Waves {...config} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div>
            <Logo className="mb-4" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harnessing AI to build digital spaces where humanity thrives.
            </p>
          </div>
        </div>
        <a
          href="#core-values"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white cursor-pointer animate-bounce-subtle z-10"
        >
          <span className="text-sm font-medium">Explore</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
      <CoreValues />
      <OurWork />
    </main>
  )
}
