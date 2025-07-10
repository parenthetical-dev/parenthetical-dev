"use client"
import Waves from "@/components/Waves"
import { Logo } from "@/components/logo"
import { ArrowDown } from "lucide-react"
import { Header } from "@/components/header"
import { CoreValues } from "@/components/core-values"
import { OurWork } from "@/components/our-work"
import { Footer } from "@/components/footer"
import { CustomScroll } from "@/components/custom-scroll"

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
      <CustomScroll />
      <Header />
      <div className="relative w-screen h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
        <Waves {...config} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 sm:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              A Multidisciplinary Agency
            </div>
            <Logo className="mb-4" />
            <p className="text-lg sm:text-2xl md:text-3xl font-light text-gray-200 leading-relaxed px-4 sm:px-0">
              Harnessing the power of artificial intelligence to build digital spaces where humanity thrives.
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
      <Footer />
    </main>
  )
}
