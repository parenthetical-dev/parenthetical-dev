"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomScroll } from "@/components/custom-scroll"
import { DevContactModal } from "@/components/dev-contact-modal"
import { 
  Heart, 
  Shield, 
  Users, 
  GitBranch, 
  Bug, 
  Lightbulb, 
  FileText, 
  Code, 
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Sparkles
} from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function ContributorGuidelines() {
  return (
    <main className="bg-black">
      <CustomScroll />
      <Header />
      
      {/* Hero Section - Full VH */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-chartreuse/20 via-transparent to-chartreuse/10 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-chartreuse/15 via-transparent to-chartreuse/5 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chartreuse/10 to-transparent animate-[slide_8s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chartreuse/5 to-transparent animate-[slideVertical_10s_ease-in-out_infinite]" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chartreuse/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chartreuse/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_reverse]" style={{ animationDelay: '10s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chartreuse/5 rounded-full blur-3xl animate-pulse" />
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 pt-32 md:pt-40 flex-grow flex flex-col justify-center">
          <motion.div
            {...fadeInAnimation}
            className="max-w-4xl mx-auto text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
              Contributor Guidelines
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              Welcome to the margins—where the most important work happens.
            </p>
          </motion.div>
          
          {/* Our Commitment Section */}
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto w-full pb-16"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-3xl p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Heart className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Commitment to Contributors</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Before we talk about code standards or pull requests, let's be clear about who we are and what we're building together. Parenthetical exists to create technology that amplifies marginalized voices and builds digital spaces where humanity thrives. Every contribution—whether it's fixing a typo or architecting a new feature—is part of this larger mission.
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

      {/* Code of Conduct Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-chartreuse mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Code of Conduct</h2>
              <p className="text-lg text-gray-400 italic">We code with conscience, and we collaborate with care.</p>
            </div>

            {/* Welcome Statement */}
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 mb-6">
                This is a space for everyone, especially those who've been pushed to the margins of tech. We actively welcome contributors who are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Members of marginalized communities",
                  "New to open source",
                  "Self-taught developers",
                  "Career changers",
                  "Anyone who's been told they \"don't look like a developer\""
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Standards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Expected Behavior */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  Expected Behavior
                </h3>
                <ul className="space-y-3">
                  {[
                    "Use welcoming and inclusive language",
                    "Respect differing viewpoints and experiences",
                    "Accept constructive criticism gracefully",
                    "Focus on what's best for our communities",
                    "Show empathy towards other contributors",
                    "Ask for help when you need it",
                    "Offer help when you can",
                    "Celebrate others' contributions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Unacceptable Behavior */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-red-900/20 to-gray-900 border border-red-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  Unacceptable Behavior
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="font-semibold">Harassment of any kind, including:</p>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Offensive comments related to identity markers",
                      "Unwelcome comments about lifestyle choices",
                      "Deliberate misgendering or use of rejected names",
                      "Sexual images or language in any context",
                      "Physical contact without consent",
                      "Threats or incitement of violence",
                      "Deliberate intimidation or stalking",
                      "Sustained disruption of discussion"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold mt-4">Also prohibited:</p>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Publishing others' private information",
                      "Bad faith \"technical purity\" gatekeeping",
                      "Dismissing accessibility as \"edge cases\"",
                      "Pattern of hostile communication"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">×</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Enforcement */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-orange-900/20 to-gray-900 border border-orange-500/20 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-orange-300 mb-3">Our Promise</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Prompt review of all reports</li>
                  <li>• Maintained confidentiality</li>
                  <li>• Appropriate action taken</li>
                  <li>• No retaliation for reports</li>
                </ul>
              </motion.div>

              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-yellow-900/20 to-gray-900 border border-yellow-500/20 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-yellow-300 mb-3">Consequences</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Private written warning</li>
                  <li>• Public warning</li>
                  <li>• Temporary ban</li>
                  <li>• Permanent ban</li>
                </ul>
              </motion.div>

              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-pink-900/20 to-gray-900 border border-pink-500/20 rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-pink-300 mb-3">Reporting</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Email: <span className="text-pink-400">conduct@parenthetical.dev</span>
                </p>
                <p className="text-gray-300 text-sm">
                  Include specific details and documentation. For safety concerns, prioritize your wellbeing first.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* Before You Contribute */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Before You Contribute</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <GitBranch className="w-6 h-6" />,
                  title: "Understand the mission",
                  description: "Read our README and explore existing projects. Every line of code should align with our goal of building tech for social good."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Check existing issues",
                  description: "Someone might already be working on your idea. Collaboration > competition."
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Start small",
                  description: "Your first contribution doesn't need to change the world. Fix a bug, improve docs, or add tests. We celebrate all contributions."
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Ask questions",
                  description: "Stuck? Confused? Wondering if your idea aligns with our mission? Open an issue. We're here to help."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInAnimation}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-chartreuse/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chartreuse/10 rounded-lg flex items-center justify-center text-chartreuse flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* How to Contribute */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">How to Contribute</h2>
            
            <div className="space-y-8">
              {/* Bug Reports */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-red-900/20 to-gray-900 border border-red-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center gap-3">
                  <Bug className="w-6 h-6" />
                  🐛 Reporting Bugs
                </h3>
                <p className="text-gray-300 mb-4">Found something broken? You're helping us build better.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Check if the bug already exists in issues</li>
                  <li>• Create a detailed bug report using our template</li>
                  <li>• Include context about how this bug might impact users</li>
                  <li>• Security issues? Email <span className="text-red-400">security@parenthetical.dev</span></li>
                </ul>
              </motion.div>

              {/* Feature Suggestions */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  💡 Suggesting Features
                </h3>
                <p className="text-gray-300 mb-4">Have an idea that could serve our communities better?</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Open a feature request issue</li>
                  <li>• Explain who this helps and why it matters</li>
                  <li>• Consider: Does this make our platforms more accessible? More secure? More inclusive?</li>
                  <li>• Be ready to discuss implementation and impact</li>
                </ul>
              </motion.div>

              {/* Documentation */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  📝 Improving Documentation
                </h3>
                <p className="text-gray-300 mb-4">Documentation is how we show care for future contributors.</p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Fix typos, clarify confusing sections, add examples</li>
                  <li>• Write guides for specific use cases</li>
                  <li>• Translate documentation to make our projects globally accessible</li>
                  <li>• Add code comments that explain the "why," not just the "what"</li>
                </ul>
              </motion.div>

              {/* Contributing Code */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  💻 Contributing Code
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">Setup:</h4>
                    <ul className="space-y-1 text-gray-400 font-mono text-sm">
                      <li>• Fork the repository</li>
                      <li>• Clone your fork locally</li>
                      <li>• Install dependencies with <code className="bg-gray-800 px-2 py-1 rounded">npm install</code></li>
                      <li>• Create a new branch: <code className="bg-gray-800 px-2 py-1 rounded">git checkout -b feature/your-feature-name</code></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">Development:</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Write clean, readable code that prioritizes clarity over cleverness</li>
                      <li>• Follow existing code style (Prettier and ESLint)</li>
                      <li>• Test accessibility with screen readers and keyboard navigation</li>
                      <li>• Consider performance on older devices and slower connections</li>
                      <li>• Add tests for new features</li>
                      <li>• Update documentation as needed</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">Submission:</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Commit with clear, meaningful messages</li>
                      <li>• Push to your fork</li>
                      <li>• Open a pull request with context and screenshots</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* Technical Guidelines */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Guidelines</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Frontend */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-cyan-900/20 to-gray-900 border border-cyan-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Frontend (React/Next.js)</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Components should be accessible by default</li>
                  <li>• Use semantic HTML</li>
                  <li>• Include ARIA labels where needed</li>
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Test with screen readers</li>
                  <li>• Mobile-first responsive design</li>
                </ul>
              </motion.div>

              {/* Backend */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-orange-900/20 to-gray-900 border border-orange-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-orange-300 mb-4">Backend (Node.js/Python)</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Security first: validate inputs, sanitize outputs</li>
                  <li>• Privacy by design: minimal data, encryption</li>
                  <li>• Clear and consistent API responses</li>
                  <li>• Helpful error messages without exposing details</li>
                  <li>• Consider rate limiting to prevent abuse</li>
                </ul>
              </motion.div>

              {/* AI/ML */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-pink-900/20 to-gray-900 border border-pink-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-pink-300 mb-4">AI/ML Integration</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Document any biases in models or datasets</li>
                  <li>• Ensure AI enhances rather than replaces human agency</li>
                  <li>• Make AI decisions explainable where possible</li>
                  <li>• Always provide non-AI fallbacks</li>
                </ul>
              </motion.div>

              {/* General Standards */}
              <motion.div
                {...fadeInAnimation}
                className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-green-300 mb-4">General Standards</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Accessibility: WCAG 2.1 AA compliance minimum</li>
                  <li>• Performance: Test on 3G and older devices</li>
                  <li>• Security: Follow OWASP guidelines</li>
                  <li>• Privacy: GDPR-compliant by default</li>
                  <li>• Testing: 80% coverage, 100% for critical paths</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* Review Process */}
      <section className="w-full pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Review Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/20 to-gray-900 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-300 mb-4">What we look for:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Mission alignment:</strong> Does this serve our communities?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Code quality:</strong> Is it maintainable and understandable?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Impact:</strong> Does it make our platforms better for users?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Accessibility:</strong> Is it usable by everyone?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Security:</strong> Does it protect vulnerable users?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-gray-900 border border-green-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-300 mb-4">Timeline:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">⏱</span>
                    <span>We aim to respond to all PRs within 72 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💬</span>
                    <span>Reviews might include suggestions, questions, or requests for changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">🎉</span>
                    <span>We celebrate iteration—perfect is the enemy of good enough to help someone</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className="w-full pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900 border border-yellow-500/20 rounded-3xl p-10 text-center">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Recognition</h2>
              <p className="text-gray-300 mb-8">We believe in celebrating our contributors:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="font-semibold text-yellow-300">README Credits</p>
                  <p className="text-sm">All contributors added</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="font-semibold text-yellow-300">Release Notes</p>
                  <p className="text-sm">Significant contributions highlighted</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="font-semibold text-yellow-300">Permissions</p>
                  <p className="text-sm">Regular contributors gain access</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="font-semibold text-yellow-300">Wider Recognition</p>
                  <p className="text-sm">Community nominations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Divider */}
      <div className="w-full">
        <div className="h-px bg-gray-600"></div>
      </div>

      {/* Final Note */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeInAnimation}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">A Final Note</h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Your contribution matters—not because of its size or complexity, but because it's part of building technology that serves rather than exploits. Whether you're fixing a semicolon or reimagining our architecture, you're adding essential context to the future we're building.
              </p>
              <p className="text-lg text-chartreuse font-semibold">
                Every parenthetical counts. Every voice matters. Every contribution moves us closer to technology that truly serves humanity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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
              
              <DevContactModal
                trigger={
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-500/20 backdrop-blur-md border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/5 to-white/0 opacity-50" />
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Apply to Contribute
                    </span>
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