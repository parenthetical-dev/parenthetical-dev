"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export function OurWork() {
  return (
    <section className="w-full py-20 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInAnimation} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h2>
            <p className="text-lg text-chartreuse font-semibold">Innovation powered by AI. Impact driven by empathy.</p>
            <div className="space-y-4 text-gray-300">
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
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/placeholder.svg?width=500&height=500"
              alt="Abstract visual representing AI and humanity"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
