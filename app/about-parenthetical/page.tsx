"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomScroll } from "@/components/custom-scroll"
import { DevContactModal } from "@/components/dev-contact-modal"
import { 
  Sparkles,
  Code,
  Heart,
  Users,
  Lightbulb,
  Target,
  Rocket,
  ArrowUpRight,
  BookOpen,
  Zap
} from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export default function AboutParenthetical() {
  return (
    <main className="bg-black">
      <CustomScroll />
      <Header />
      
      {/* Hero Section - Full VH */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Animated Gradient Background - Purple/Pink theme */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-transparent to-purple-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-[slide_8s_ease-in-out_infinite]" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_reverse]" style={{ animationDelay: '10s' }} />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-40 flex-grow flex flex-col justify-center">
          <motion.div
            {...fadeInAnimation}
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
              About Parenthetical
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              Every revolution starts in the margins.
            </p>
          </motion.div>
          
          {/* The Story Section */}
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto w-full pb-16"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-3xl p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">The Story Behind the Parentheses</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Parenthetical was born from a simple observation: the most transformative change happens when technology and storytelling converge. We're a multidisciplinary agency that refuses to separate code from culture, platforms from purpose, or innovation from impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* A Different Kind of Agency */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Different Kind of Agency</h2>
              <p className="text-lg text-gray-400 italic">We don't believe in choosing between beautiful storytelling and powerful technology.</p>
            </div>

            <p className="text-gray-300 mb-8 text-center max-w-4xl mx-auto">
              Traditional agencies silo their capabilities—creative in one corner, tech in another, strategy somewhere in between. We've built something different: a truly integrated practice where every project benefits from both marketing intelligence and technical innovation.
            </p>

            {/* What we bring together */}
            <h3 className="text-2xl font-bold text-white mb-6">What we bring together:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "Strategic storytelling that transforms missions into movements",
                "AI-powered development that builds technology with conscience",
                "Cultural intelligence that ensures authentic connection",
                "Technical excellence that scales impact without sacrificing humanity",
                "Data-driven insights that inform both code and content",
                "Community-centered design that starts with lived experience"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInAnimation}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-pink-900/20 to-gray-900 border border-pink-500/20 rounded-xl p-4"
                >
                  <Zap className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* This multidisciplinary approach */}
            <h3 className="text-2xl font-bold text-white mb-6">This multidisciplinary approach means we can:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Build platforms that tell stories as powerfully as they function",
                "Create campaigns backed by custom technology solutions",
                "Develop digital experiences that feel as human as face-to-face connection",
                "Transform organizational missions into scalable digital infrastructure"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInAnimation}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-xl p-4"
                >
                  <Target className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Our Integrated Methodology */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <Code className="w-12 h-12 text-chartreuse mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Integrated Methodology</h2>
              <p className="text-lg text-gray-400 italic">Building technology like we build movements. Creating campaigns like we craft code.</p>
            </div>

            <div className="space-y-8">
              <p className="text-gray-300 text-center mb-8">Our approach blends the best of both disciplines:</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* From Marketing */}
                <motion.div
                  {...fadeInAnimation}
                  className="bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-4">From Marketing:</h3>
                  <p className="text-gray-300">
                    Deep audience research, narrative strategy, cultural competency, and the ability to translate complex missions into compelling human stories.
                  </p>
                </motion.div>

                {/* From Technology */}
                <motion.div
                  {...fadeInAnimation}
                  className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-green-300 mb-4">From Technology:</h3>
                  <p className="text-gray-300">
                    Scalable solutions, data-driven optimization, accessible design, and the power to turn vision into functional reality.
                  </p>
                </motion.div>

                {/* The Synthesis */}
                <motion.div
                  {...fadeInAnimation}
                  className="bg-gradient-to-br from-chartreuse/20 to-gray-900 border border-chartreuse/20 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-chartreuse mb-4">The Synthesis:</h3>
                  <p className="text-gray-300">
                    Digital experiences that don't just work—they move people. Platforms that don't just process data—they honor stories. Campaigns that don't just raise awareness—they build lasting digital infrastructure for change.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Parenthetical's Founder Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-chartreuse/20 to-gray-900 border border-chartreuse/20 rounded-3xl p-10 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Parenthetical's Founder: Josh Weaver</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Josh's journey spans from directing campaigns at VICE Media to revolutionizing nonprofit marketing as VP of Marketing at The Trevor Project. There, they pioneered a radical shift: celebrating LGBTQ+ youth before they need saving, focusing on joy and prevention rather than crisis response.
                </p>
                <p>
                  Through years of building movements and brands, Josh discovered a gap—marketing could shift hearts and minds, while technology could scale impact, yet rarely did anyone bring both disciplines together with equal expertise.
                </p>
                <p>
                  That's why Josh founded Parenthetical: to create a new kind of agency where code and campaigns, platforms and positioning, development and storytelling work in concert.
                </p>
                <a 
                  href="https://joshweaver.com/about-josh-weaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-chartreuse hover:text-chartreuse/80 transition-colors mt-4"
                >
                  Learn more about Josh
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Current Projects */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Current Projects</h2>
            
            <div className="bg-gradient-to-br from-pink-900/20 to-gray-900 border border-pink-500/20 rounded-2xl p-8">
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-pink-300">Survival Pending</span> exemplifies our integrated approach: a platform that combines powerful storytelling with secure, anonymous technology to preserve LGBTQ+ resilience narratives. It's not just a database—it's a digital sanctuary. Not just a website—it's a movement.
              </p>
              <p className="text-gray-300">
                More initiatives launching soon, each blending strategic communication with technical innovation to serve communities that deserve better than one-dimensional solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* The Team We're Building */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Team We're Building</h2>
              <p className="text-lg text-gray-400">Parenthetical is currently founder-led, but our vision is collective.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 mb-6">
                We're actively seeking multidisciplinary contributors who understand that the future demands fluency in both code and culture. Whether you're a:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Developer who understands the power of narrative",
                  "Marketer who sees technology as a creative medium",
                  "Designer who bridges user experience and human experience",
                  "Strategist who thinks in systems and stories",
                  "Writer who can make complex technology feel accessible",
                  "Technologist who believes in the power of authentic messaging"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 mt-6">
                There's space for you here. We're building an agency that operates more like a creative collective—where disciplines blend, perspectives merge, and the best ideas win regardless of which department they come from.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* What We Offer */}
      <section className="w-full pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* For Organizations */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6">For Organizations:</h3>
                <ul className="space-y-3">
                  {[
                    "Integrated campaigns that blend storytelling with custom technology",
                    "Platform development informed by marketing strategy",
                    "Digital transformation that maintains human connection",
                    "Strategic consulting that bridges communication and technical needs",
                    "AI-powered solutions that amplify rather than replace human creativity"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* For Communities */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-green-300 mb-6">For Communities:</h3>
                <ul className="space-y-3">
                  {[
                    "Technology that tells their stories authentically",
                    "Platforms built with cultural competency",
                    "Digital spaces that feel like home",
                    "Tools that scale community power",
                    "Narratives that drive systemic change"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Our Commitment */}
      <section className="w-full pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-chartreuse/20 to-gray-900 border border-chartreuse/20 rounded-3xl p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-chartreuse flex-shrink-0 mt-1" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Commitment</h2>
              </div>
              <p className="text-gray-300 mb-6">We promise to create work that:</p>
              <ul className="space-y-3">
                {[
                  "Honors both the art of storytelling and the science of technology",
                  "Serves communities with the same excellence we'd bring to Fortune 500 clients",
                  "Uses AI to enhance human creativity, not replace it",
                  "Measures success in impact, not just metrics",
                  "Remains accountable to those it claims to serve"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Rocket className="w-5 h-5 text-chartreuse flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-6">
                This isn't about choosing between purpose and profit, beauty and function, story and scale. It's about proving they're stronger together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* Final CTA */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center overflow-hidden">
        {/* Animated Gradient Background - Same as hero */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/15 via-transparent to-purple-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-[slide_8s_ease-in-out_infinite]" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_reverse]" style={{ animationDelay: '10s' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            {...fadeInAnimation}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Join Us in Writing a Different Story</h2>
            <div className="space-y-6 text-gray-300 mb-12">
              <p className="text-lg">
                The future belongs to those who can code with conscience and communicate with courage.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#our-work"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                <span className="relative z-10">Explore Our Work</span>
              </a>
              
              <DevContactModal
                trigger={
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-chartreuse/20 backdrop-blur-md border border-chartreuse/50 text-chartreuse font-semibold rounded-xl hover:bg-chartreuse/30 hover:border-chartreuse/70 transition-all duration-300 hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/10 via-transparent to-chartreuse/5 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                    <span className="relative z-10">Start a Conversation</span>
                  </button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}