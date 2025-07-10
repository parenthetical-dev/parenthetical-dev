"use client"

import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"
import Waves from "./Waves"
import { ContactModal } from "./contact-modal"

export function Footer() {
  const waveConfig = {
    lineColor: "rgba(223, 255, 0, 0.2)",
    backgroundColor: "transparent",
    waveSpeedX: 0.01,
    waveSpeedY: 0.004,
    waveAmpX: 24,
    waveAmpY: 12,
    xGap: 10,
    yGap: 20,
    friction: 0.925,
    tension: 0.005,
    maxCursorMove: 80,
  }

  return (
    <footer className="relative w-full min-h-[400px] text-white border-t border-white/10 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Waves {...waveConfig} />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-icon.png" alt="Parenthetical Icon" width={36} height={36} className="filter invert" />
              <Logo size="sm" className="text-2xl" />
            </div>
            <p className="text-gray-400 max-w-sm">
              Building platforms that center marginalized voices and transform personal narratives into collective power.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/parenthetical-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://parentheticaldev.slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Slack
                </a>
              </li>
              <li>
                <ContactModal
                  trigger={
                    <button className="text-gray-400 hover:text-white transition-colors text-left">
                      Get In Touch
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#core-values"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="#our-work"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contributor Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Parenthetical. Building with intention.
            </p>
            <p className="text-gray-400 text-sm italic">
              Code in the margins can rewrite the main story.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}