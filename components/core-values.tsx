"use client"

import { motion } from "framer-motion"
import { UilHeart, UilUsersAlt, UilBookOpen, UilGlobe } from "@iconscout/react-unicons"

const values = [
  {
    title: "Purpose over profit",
    description:
      'We measure success not in revenue but in lives touched and voices amplified. Every decision starts with "who does this help?" not "what does this earn?" In a tech landscape obsessed with valuations and exit strategies, we\'re building something different—sustainable technology that prioritizes social impact over shareholder returns.',
    icon: UilHeart,
  },
  {
    title: "Community over code",
    description:
      "The most elegant algorithm means nothing if it doesn't serve real human needs. We build with communities, not for them, ensuring every feature reflects lived experiences and actual struggles. This means slowing down to listen, stepping back to learn, and sometimes scrapping beautiful code because it doesn't match beautiful intentions.",
    icon: UilUsersAlt,
  },
  {
    title: "Stories over statistics",
    description:
      "Behind every user metric is a person seeking connection, safety, or hope. We design for narratives, not numbers, knowing that one story shared can ripple into collective change. We create space for authentic stories, which creates possibilities for authentic connection and real transformation.",
    icon: UilBookOpen,
  },
  {
    title: "Access over exclusivity",
    description:
      "We reject the tech world's obsession with gatekeeping and paywalls. Our platforms are built to be radically inclusive—technically accessible, culturally aware, and free for those who need them most. True innovation isn't about serving the privileged few faster; it's about bringing everyone forward together.",
    icon: UilGlobe,
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
          className="max-w-3xl mx-auto text-center space-y-6 mb-20"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-chartreuse/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-chartreuse/10 group-hover:bg-chartreuse/20 transition-colors duration-300">
                  <value.icon
                    size={32}
                    className="text-chartreuse"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-chartreuse transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
              
              <motion.div
                className="absolute -inset-px bg-gradient-to-r from-chartreuse/20 to-chartreuse/10 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-lg transition-opacity duration-1000 ease-out"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
