"use client"

import React from "react"
import { motion } from "framer-motion"
import { Logo as SPLogo } from "./sp-logo"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function OurWork() {
  return (
    <React.Fragment>
      <section id="our-work" className="w-full pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-32 md:pb-16 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-3xl mx-auto text-center space-y-6 mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold">Innovation powered by AI. Impact driven by empathy.</p>
          </motion.div>

          <motion.div 
            {...fadeInAnimation}
            className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg text-gray-300 mb-16"
          >
            <p>
              While we harness the power of AI to innovate, our products remain inherently human and empathetic. We
              build platforms that amplify marginalized voices, create digital sanctuaries for vulnerable communities,
              and transform personal narratives into collective power.
            </p>
            <p>
              From anonymous storytelling platforms to community-driven tools, every project begins with a simple
              question: Who does this serve? AI accelerates our development, but empathy directs our purpose—ensuring
              that every feature, every interface, every interaction honors the humans on the other side of the
              screen.
            </p>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  )
}