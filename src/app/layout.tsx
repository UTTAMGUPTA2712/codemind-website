import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeMind - Your Local AI Coding Assistant",
  description: "Semantic search and chat for your codebase, 100% offline. Analyze repositories securely with local LLMs.",
  keywords: ["AI", "Coding Assistant", "Local LLM", "Offline", "Semantic Search", "Code Analysis", "Developer Tools"],
  authors: [{ name: "Uttam Gupta", url: "https://uttamgupta2712.github.io/profile/" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codemind.ai", // Placeholder URL
    title: "CodeMind - Your Local AI Coding Assistant",
    description: "Semantic search and chat for your codebase, 100% offline.",
    siteName: "CodeMind",
    images: [
      {
        url: "/logo.png", // Assuming logo.png is suitable for OG image
        width: 1200,
        height: 630,
        alt: "CodeMind Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMind - Your Local AI Coding Assistant",
    description: "Semantic search and chat for your codebase, 100% offline.",
    images: ["/logo.png"],
    creator: "@uttamgupta", // Placeholder
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
