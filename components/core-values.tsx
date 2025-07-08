"use client"

import { motion } from "framer-motion"
import { Heart, UsersThree, BookOpenText, GlobeHemisphereWest } from "@phosphor-icons/react"

const values = [
  {
    title: "Purpose over profit",
    description:
      'We measure success not in revenue but in lives touched and voices amplified. Every decision starts with "who does this help?" not "what does this earn?" In a tech landscape obsessed with valuations and exit strategies, we\'re building something different—sustainable technology that prioritizes social impact over shareholder returns.',
    icon: Heart,
  },
  {
    title: "Community over code",
    description:
      "The most elegant algorithm means nothing if it doesn't serve real human needs. We build with communities, not for them, ensuring every feature reflects lived experiences and actual struggles. This means slowing down to listen, stepping back to learn, and sometimes scrapping beautiful code because it doesn't match beautiful intentions.",
    icon: UsersThree,
  },
  {
    title: "Stories over statistics",
    description:
      "Behind every user metric is a person seeking connection, safety, or hope. We design for narratives, not numbers, knowing that one story shared can ripple into collective change. We create space for authentic stories, which creates possibilities for authentic connection and real transformation.",
    icon: BookOpenText,
  },
  {
    title: "Access over exclusivity",
    description:
      "We reject the tech world's obsession with gatekeeping and paywalls. Our platforms are built to be radically inclusive—technically accessible, culturally aware, and free for those who need them most. True innovation isn't about serving the privileged few faster; it's about bringing everyone forward together.",
    icon: GlobeHemisphereWest,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export function CoreValues() {
  return (
    <section id="core-values" className="w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Core Values</h2>
          <p className="text-lg text-gray-400 font-semibold">Adding the essential context to every line of code.</p>
          <p className="text-gray-300">
            Just as parentheses hold the quiet truths that complete a sentence, we believe the most important work
            happens in the spaces between—where technology meets humanity, where innovation meets empathy, where
            progress meets purpose.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants} className="flex flex-col items-start text-left">
              <div className="flex items-center gap-4 mb-3">
                <value.icon
                  size={28}
                  weight="fill"
                  className="text-chartreuse drop-shadow-[0_1px_3px_rgba(223,255,0,0.3)]"
                />
                <h3 className="text-2xl font-bold">{value.title}</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
