"use client"

import { motion } from "framer-motion"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function InfiniteStories() {
  return (
    <motion.div
      {...fadeInAnimation}
      transition={{ delay: 0.6 }}
      className="mt-16 flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-48 h-48 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse delay-2000" />
        </div>
        <div className="relative z-10 text-center px-8 py-6">
          <div className="text-6xl font-bold text-green-400/20 mb-2">∞</div>
          <p className="text-gray-600 text-sm uppercase tracking-wider">Infinite Stories</p>
        </div>
      </div>
    </motion.div>
  )
}