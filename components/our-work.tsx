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
    <>
    <section id="our-work" className="w-full pt-20 pb-12 md:pt-32 md:pb-16 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          {...fadeInAnimation}
          className="max-w-3xl mx-auto text-center space-y-6 mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Work</h2>
          <p className="text-xl md:text-2xl text-gray-400 font-semibold">Innovation powered by AI. Impact driven by empathy.</p>
        </motion.div>

        <motion.div 
          {...fadeInAnimation}
          className="max-w-4xl mx-auto space-y-4 text-gray-300 mb-16"
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

        {/* Divider */}
        <div className="w-full mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Survival Pending Section */}
        <div className="max-w-6xl mx-auto py-10">
          <div className="text-center mb-16">
            <SPLogo className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">An anonymous archive for LGBTQ+ resilience</p>
          </div>

          {/* Video */}
          <div className="relative w-full aspect-video mb-10 bg-black rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(console.error);
                  }}
                >
                  <source src="/survivalpending.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            {...fadeInAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
                <a 
                  href="https://survivalpending.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-chartreuse/20 backdrop-blur-md border border-chartreuse/50 text-chartreuse font-semibold rounded-xl hover:bg-chartreuse/30 hover:border-chartreuse/70 transition-all duration-300 hover:scale-105 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/10 via-transparent to-chartreuse/5 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                  <span className="relative z-10 flex items-center">
                    Visit Live Site
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/survival-pending" 
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600 text-gray-300 font-semibold rounded-xl hover:from-gray-600/50 hover:to-gray-700/50 hover:text-gray-100 transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                  <span className="relative z-10 flex items-center">
                    View Case Study
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
          </motion.div>
          
          <div className="relative mb-8">
            {/* Brief - Large featured block */}
            <motion.div
              {...fadeInAnimation}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-3xl p-10 mb-8 mt-4 hover:border-purple-400/40 transition-all duration-500"
              whileHover={{ scale: 1.01, y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700 ease-in-out" />
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">The Brief</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Create a digital sanctuary where LGBTQ+ individuals could safely document their experiences during an unprecedented moment of social and political pressure. The platform needed to be anonymous, permanent, and powerful.
                </p>
              </div>
            </motion.div>
            
            {/* Insight and Experience - Side by side, different heights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
              <motion.div
                {...fadeInAnimation}
                transition={{ delay: 0.3 }}
                className="group relative bg-gradient-to-tl from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-500 md:translate-y-4"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">The Insight</h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    In times of erasure, documentation becomes resistance. We realized that small moments—the ordinary Tuesday breakdown, the unexpected kindness, the quiet victory—these stories matter as much as the dramatic ones.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                {...fadeInAnimation}
                transition={{ delay: 0.4 }}
                className="group relative bg-gradient-to-tr from-pink-900/20 to-gray-900 border border-pink-500/20 rounded-2xl p-8 hover:border-pink-400/40 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4 text-pink-300 group-hover:text-pink-200 transition-colors duration-300">The Experience</h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Every story shared strengthens the collective voice—from teenagers finding hope to elders sharing decades of wisdom. The interface balances emotional safety with ease of use.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Solution and Tech Stack - Two column layout */}
            <motion.div
              {...fadeInAnimation}
              transition={{ delay: 0.5 }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
            >
              {/* Left column - The Solution */}
              <div className="relative bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6 text-green-300 group-hover:text-green-200 transition-colors duration-300">The Solution</h4>
                  <p className="text-gray-300 mb-6">
                    A radically private platform where stories become historical record:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-200 mb-1">Zero-knowledge architecture</h5>
                        <p className="text-gray-400 text-sm">No emails, no names, no account recovery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-200 mb-1">Instant safety features</h5>
                        <p className="text-gray-400 text-sm">Triple-tap ESC for immediate exit</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-200 mb-1">Voice synthesis technology</h5>
                        <p className="text-gray-400 text-sm">Written stories transform into audio testimonies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-200 mb-1">Permanent archive</h5>
                        <p className="text-gray-400 text-sm">Not dependent on social platforms or policy changes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-200 mb-1">Anonymous demographics</h5>
                        <p className="text-gray-400 text-sm">Track trends without tracking people</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Tech Stack */}
              <div className="relative bg-gradient-to-bl from-orange-900/20 via-amber-900/20 to-gray-900 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6 text-orange-300 group-hover:text-orange-200 transition-colors duration-300">Tech Stack</h4>
                  <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                    {/* Next.js */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/nextjs_logo.svg" alt="Next.js" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Next.js</span>
                    </div>
                
                    
                    {/* Vercel */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/vercel_logo.svg" alt="Vercel" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Vercel</span>
                    </div>
                
                    
                    {/* Neon (PostgreSQL) */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/neon_logo.png" alt="Neon" className="w-14 h-14 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Neon</span>
                    </div>
                
                    
                    {/* Anthropic */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/anthropic_logo.png" alt="Anthropic" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Anthropic</span>
                    </div>
                
                    
                    {/* Groq */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/groq_logo.png" alt="Groq" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Groq</span>
                    </div>
                
                    
                    {/* ElevenLabs */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/elevenlabs_logo.png" alt="ElevenLabs" className="w-12 h-12 object-contain filter grayscale brightness-150" />
                      <span className="text-xs">ElevenLabs</span>
                    </div>
                
                    
                    {/* React */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/react_logo.png" alt="React" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">React</span>
                    </div>
                
                    
                    {/* TypeScript */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/typescript_logo.png" alt="TypeScript" className="w-12 h-12 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">TypeScript</span>
                    </div>
                
                    
                    {/* Sanity */}
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <img src="/sanity_logo.png" alt="Sanity" className="w-20 h-16 object-contain filter grayscale brightness-0 invert" />
                      <span className="text-xs">Sanity</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* Calling Developers Section */}
    <section id="calling-developers" className="w-full py-20 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-3xl mx-auto text-center space-y-6 mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Calling Developers</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-semibold">Your code in the margins can rewrite the main story.</p>
          </motion.div>

          <motion.div
            {...fadeInAnimation}
            className="max-w-4xl mx-auto space-y-6 text-gray-300 mb-16"
          >
            <p className="leading-relaxed">
              The tech industry loves to talk about "changing the world," but rarely asks who gets to participate in that change. At Parenthetical, we're not looking for developers who want to disrupt—we're seeking those who want to repair, to build, to add the essential context that's been missing from technology's narrative.
            </p>
          </motion.div>

          {/* Core Values for Developers */}
          <motion.div
            {...fadeInAnimation}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">We need developers who understand that:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The most important bugs to fix are societal, not just technical",
                "Open source isn't just about free code—it's about collective liberation",
                "Accessibility isn't an edge case; it's the main case",
                "Documentation is an act of care, not a chore",
                "Code reviews should consider impact, not just implementation",
                "Data privacy isn't just compliance—it's protecting someone's right to exist safely"
              ].map((value, index) => (
                <motion.div
                  key={index}
                  {...fadeInAnimation}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mt-1 group-hover:bg-gray-500 transition-colors" />
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We're Building */}
          <motion.div
            {...fadeInAnimation}
            transition={{ delay: 0.4 }}
            className="max-w-5xl mx-auto space-y-12 mb-20"
          >
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-white">What We're Building Together</h3>
              <p className="text-gray-300 leading-relaxed">
                Right now, we're expanding Survival Pending and laying groundwork for new platforms that center marginalized voices. We need full-stack developers who can work with modern frameworks, but more importantly, we need humans who understand why a trans teenager might need anonymity, why a Black activist might need encryption, why an immigrant might need their story preserved but their identity protected.
              </p>
            </div>

            {/* Technical Needs */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Needs, Human Priorities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-3 text-blue-300">Frontend</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    React/Next.js developers who obsess over accessibility and understand that beautiful design means nothing if it doesn't work on a five-year-old phone
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-3 text-green-300">Backend</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Node.js/Python developers who can build secure, scalable systems that protect vulnerable users by default
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-3 text-purple-300">AI/ML</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Engineers who can harness AI's power while questioning its biases and ensuring it amplifies rather than replaces human voice
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-orange-900/20 to-gray-900 border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold mb-3 text-orange-300">DevOps</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Infrastructure builders who see uptime as a social justice issue—because when platforms go down, communities lose their lifelines
                  </p>
                </motion.div>
              </div>
            </div>

            {/* How to Contribute */}
            <h3 className="text-2xl font-bold mb-6 text-white text-center">How to Contribute</h3>
            <div className="space-y-4 text-gray-300 mb-12">
              <p className="leading-relaxed">
                Start where you are. Fix a bug. Improve documentation. Suggest a feature that serves someone you care about. Challenge us when our code doesn't match our conscience. Our GitHub isn't just a repository—it's a space for reimagining what technology can be when it's built with intention. Every pull request is a chance to add your parenthetical—your essential truth—to this larger story we're writing together. We don't need more rockstar developers. We need ensemble players who understand that the best code is written in community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary GitHub Button */}
              <a
                href="https://github.com/parenthetical-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-chartreuse/20 backdrop-blur-md border border-chartreuse/50 text-chartreuse font-semibold rounded-xl hover:bg-chartreuse/30 hover:border-chartreuse/70 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/10 via-transparent to-chartreuse/5 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Explore Our Repos
                </span>
              </a>

              {/* Slack Button */}
              <a
                href="#"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                  Join Us on Slack
                </span>
              </a>
            </div>
          </motion.div>
        </div>
    </section>
    </>
  )
}