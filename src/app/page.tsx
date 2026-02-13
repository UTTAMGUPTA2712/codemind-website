
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Github, Zap, Shield, Database, Lock, Cpu, Download, FolderOpen, FileCode, MessageSquare, Linkedin, User } from "lucide-react"
import Link from "next/link"
import { DownloadSection } from "@/components/download-section"
import { fetchLatestRelease } from "@/lib/github"
import { AuthButtons } from "@/components/auth-buttons"

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const latestRelease = await fetchLatestRelease()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your Private, Local AI <br className="hidden md:inline" />
              Second Brain for Codebases
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              CodeMind runs 100% offline. Semantic search, chat, and analyze your repositories without your code ever leaving your machine.
            </p>
            <div className="space-x-4">
              <AuthButtons />
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">How it Works</Link>
              </Button>
            </div>
            <div className="pt-8">
              <DownloadSection initialRelease={latestRelease} />
            </div>
          </div>
        </section>


        <section id="how-it-works" className="container mx-auto space-y-6 bg-slate-50 py-16 dark:bg-slate-900/50 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
              How it Works
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              From download to insight in minutes.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border-slate-200 p-4 rounded-lg bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. Download</h3>
              <p className="text-sm text-gray-500 text-center">Get the app for your OS (Mac, Windows, Linux).</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-slate-200 p-4 rounded-lg bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <FolderOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">2. Add Repos</h3>
              <p className="text-sm text-gray-500 text-center">Point CodeMind to your local project folders.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-slate-200 p-4 rounded-lg bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. Index</h3>
              <p className="text-sm text-gray-500 text-center">The vector engine digests your code structure locally.</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-slate-200 p-4 rounded-lg bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">4. Chat</h3>
              <p className="text-sm text-gray-500 text-center">Ask questions and get context-aware answers.</p>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto space-y-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Built for developers who care about privacy and speed.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>100% Offline</CardTitle>
                <CardDescription>
                  Your code never leaves your device. No cloud uploads, no data leaks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Powered by local LLMs and vector stores for instant answers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Database className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Semantic Search</CardTitle>
                <CardDescription>
                  Find code by meaning, not just keyword matching.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  We don't train on your code. You own your data completely.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Cpu className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Model Choice</CardTitle>
                <CardDescription>
                  Bring your own model. Supports Ollama, Llama 3.2, Qwen 2.5, and more.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <Link href="/about" className="font-medium underline underline-offset-4">Codemind Team</Link>.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/UTTAMGUPTA2712" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/uttam-gupta-a185a8239/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://uttamgupta2712.github.io/profile/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
