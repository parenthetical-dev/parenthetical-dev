"use client"

import { useEffect, useState } from "react"

export function CustomScroll() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Custom Scrollbar */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 h-48 w-1 bg-gray-800 rounded-full z-50 hidden md:block">
        <div 
          className="absolute w-full h-12 bg-chartreuse rounded-full transition-all duration-300 ease-out"
          style={{ 
            top: `${scrollProgress * 0.75}%`
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 bg-chartreuse text-black rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}