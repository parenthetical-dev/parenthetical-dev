"use client"

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
    <section className="w-full py-20 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">
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
            <SPLogo className="text-5xl md:text-6xl mb-4" />
            <p className="text-2xl md:text-3xl text-gray-300">An anonymous archive for LGBTQ+ resilience</p>
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
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
            
            {/* Solution - Two column layout */}
            <motion.div
              {...fadeInAnimation}
              transition={{ delay: 0.5 }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4"
            >
              {/* Left column - Content */}
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

              {/* Right column - Visual element */}
              <div className="hidden lg:flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
                  <div className="absolute w-48 h-48 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
                  <div className="absolute w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse delay-2000" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold text-green-400/20 mb-4">∞</div>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Infinite Stories</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Tech Stack - With logos */}
          <div className="mt-8 mb-4">
            <motion.div
              {...fadeInAnimation}
              transition={{ delay: 1.1 }}
              className="group relative bg-gradient-to-bl from-orange-900/20 via-amber-900/20 to-gray-900 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-400/40 transition-all duration-500"
              whileHover={{ scale: 1.01, y: -2 }}
            >
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 ease-in-out" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-6 text-orange-300 group-hover:text-orange-200 transition-colors duration-300">Tech Stack</h4>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {/* Next.js */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945C17.7242.5238 16.7267.3448 15.7494.2339c-.2819-.0328-1.8204-.0415-2.1768-.0079zM16.9739 7.2335c.3167.1083.5597.3773.6466.7165.0281.1085.032.9181.032 6.4093l-.0026 6.2905-.9282-1.4166-1.0286-1.5704v-4.6905c0-4.1364.0079-4.729.0447-4.8636a.7917.7917 0 01.239-.439c.1351-.1062.1782-.123.4481-.1371.2053-.0082.3716.0041.485.0389z"/>
                  </svg>
                  <span className="text-sm">Next.js</span>
                </div>
                
                {/* Vercel */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                  </svg>
                  <span className="text-sm">Vercel</span>
                </div>
                
                {/* PostgreSQL */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C20.8206-.4251 16.8795 0 15.503 0c-2.3443 0-3.7316.3347-4.7943 1.1557-1.0626.8209-1.8418 2.1275-2.4943 3.7194-.0859.2104-.1719.4215-.2594.6381-.3222.7995-.689 1.7099-1.1149 2.3736-.2589.4031-.7654.5191-1.0973.6524-.3319.1333-.5678.2651-.6769.4891-.1091.224-.1269.5695.0402.9187.0672.1407.2162.3873.4082.5364 1.2262 1.0311 2.4093 1.1057 3.2787.8506 1.3493-.433 2.1806-1.8548 2.7182-3.0517.2936-.6533 1.0841-1.4637 1.8829-2.1429.3466-.2945.8654-.6995 1.3463-.9337.4809-.2342.9231-.331 1.2741-.3274.5952.0046 1.0194.2061 1.268.6024.156.2665-.0361 1.075-.0976 1.4052-.0234.211.2035.405.4352.4198.305.0195.659-.0122 1.0222-.0588.8267-.1061 2.1115-.3487 3.0375.1336.195.1007.5276.2782.7435.4765.2611-.0074.5251-.0196.7962-.0429.8782-.0749 1.7646-.3165 2.4554-.6732.076-.2383.0036-.5971-.217-.8562zm-4.9904-3.0666c-.8573 1.8884-1.8214 3.3108-2.5431 3.8112-.4563.2762-.8807.4383-1.3246.5002-.3567.0619-.7418.0596-1.0733-.0075-.0043-.4154.0758-1.5925.2811-2.0927.1174-.317.251-.4477.6613-.5263 1.397-.215 2.4854-.7935 3.1563-1.3006.4782-.3556.7407-.8348.8425-1.2824.0018-.383-.0372-.6705-.1098-.8668z"/>
                  </svg>
                  <span className="text-sm">PostgreSQL</span>
                </div>
                
                {/* Anthropic */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 19.5h20L12 2zm0 3.84L18.91 18H5.09L12 5.84z"/>
                  </svg>
                  <span className="text-sm">Anthropic</span>
                </div>
                
                {/* Groq */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <circle cx="12" cy="12" r="5"/>
                  </svg>
                  <span className="text-sm">Groq</span>
                </div>
                
                {/* ElevenLabs */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="8" cy="12" r="2"/>
                    <circle cx="16" cy="12" r="2"/>
                  </svg>
                  <span className="text-sm">ElevenLabs</span>
                </div>
                
                {/* React */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.635-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                  <span className="text-sm">React</span>
                </div>
                
                {/* TypeScript */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                  </svg>
                  <span className="text-sm">TypeScript</span>
                </div>
                
                {/* Sanity */}
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.235 9.658c.963-2.794 3.624-4.667 6.635-4.667 1.655 0 3.179.566 4.388 1.512l1.463-2.536A9.289 9.289 0 0 0 10.87 1.5C6.324 1.5 2.384 4.28.846 8.297l3.389 1.36zm5.705 12.842c-5.246 0-9.5-4.254-9.5-9.5a9.46 9.46 0 0 1 .744-3.689L.065 5.378C-.033 5.966.003 6.646.003 7.344c0 7.177 5.82 13 13 13 3.203 0 6.133-1.16 8.4-3.083l-3.052-3.138a6.461 6.461 0 0 1-4.411 1.737v6.64z"/>
                  </svg>
                  <span className="text-sm">Sanity</span>
                </div>
              </div>
            </div>
                </motion.div>
              </div>
        </div>
      </div>
    </section>

    {/* Calling Developers Section */}
    <section className="w-full py-20 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">
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
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-white">How to Contribute</h3>
              <div className="space-y-4 text-gray-300 mb-12">
                <p className="leading-relaxed">
                  Start where you are. Fix a bug. Improve documentation. Suggest a feature that serves someone you care about. Challenge us when our code doesn't match our conscience. Our GitHub isn't just a repository—it's a space for reimagining what technology can be when it's built with intention.
                </p>
                <p className="text-lg font-semibold text-gray-200">
                  Every pull request is a chance to add your parenthetical—your essential truth—to this larger story we're writing together. We don't need more rockstar developers. We need ensemble players who understand that the best code is written in community.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
                {/* Primary GitHub Button */}
                <a
                  href="https://github.com/parenthetical-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-chartreuse/20 backdrop-blur-md border border-chartreuse/50 text-chartreuse font-semibold rounded-xl hover:bg-chartreuse/30 hover:border-chartreuse/70 transition-all duration-300 hover:scale-105 shadow-xl"
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
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 shadow-xl"
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

                {/* Secondary Button */}
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center w-full px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-700/30 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Read Contributor Guidelines</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
    </>
  )
}