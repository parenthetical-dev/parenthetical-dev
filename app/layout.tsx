import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Parenthetical | An Agency Building Digital Spaces Where Humanity Thrives",
  description: "We harness AI to create platforms that center marginalized voices and transform personal narratives into collective power.",
  keywords: ["AI", "artificial intelligence", "digital spaces", "community", "marginalized voices", "technology", "humanity", "social impact"],
  authors: [{ name: "Parenthetical" }],
  creator: "Parenthetical",
  publisher: "Parenthetical",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parenthetical.dev",
    siteName: "Parenthetical",
    title: "Parenthetical | An Agency Building Digital Spaces Where Humanity Thrives",
    description: "We harness AI to create platforms that center marginalized voices and transform personal narratives into collective power.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parenthetical - Building Digital Spaces Where Humanity Thrives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parenthetical | An Agency Building Digital Spaces Where Humanity Thrives",
    description: "We harness AI to create platforms that center marginalized voices and transform personal narratives into collective power.",
    creator: "@parenthetical",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  )
}
