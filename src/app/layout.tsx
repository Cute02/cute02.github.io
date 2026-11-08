import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { PageTransition } from "@/components/navigation/PageTransition";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cute02.github.io/"),
  title: {
    default: "Mary Neha — AI Solution Builder & ML Engineer",
    template: "%s | Mary Neha",
  },
  description:
    "Portfolio of Mary Neha, AI Solution Builder & ML Engineer in training. Building autonomous LLM agents, Text-to-SQL systems, BERT NLP applications, and leakage-free ML models.",
  keywords: [
    "Mary Neha",
    "AI Solution Builder",
    "ML Engineer",
    "LLM Agents",
    "Text-to-SQL",
    "BERT",
    "Machine Learning",
    "NLP",
    "IoT",
    "Brototype",
    "Jain University",
  ],
  authors: [{ name: "Mary Neha" }],
  creator: "Mary Neha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cute02.github.io/",
    title: "Mary Neha — AI Solution Builder & ML Engineer",
    description:
      "AI Solution Builder · Building LLM agents, Text-to-SQL systems, and production ML pipelines.",
    siteName: "Mary Neha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mary Neha — AI Solution Builder & ML Engineer",
    description:
      "AI Solution Builder · Building LLM agents, Text-to-SQL systems, and production ML pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mary Neha",
  url: "https://cute02.github.io/",
  jobTitle: "AI Solution Builder · ML Engineer in training",
  description:
    "AI Solution Builder and ML Engineer in training. Specializing in LLM agents, Text-to-SQL pipelines, BERT NLP architectures, and embedded IoT systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  sameAs: [
    "https://github.com/Cute02",
    "https://linkedin.com/in/mary-neha-0036a5264",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "Text-to-SQL",
    "Natural Language Processing",
    "BERT",
    "Python",
    "IoT and Embedded Systems",
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Jain University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Brototype",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050608] text-slate-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-white">
        <SmoothScroll>
          <BackgroundGrid />
          <CursorGlow />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

