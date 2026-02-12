"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Github, Zap, Shield, Database } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

export default function Home() {
  const { data: session } = useSession()

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
              {session ? (
                <Button size="lg" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <Button size="lg" onClick={() => signIn("github")}>
                  <Github className="mr-2 h-4 w-4" />
                  Sign in with GitHub
                </Button>
              )}
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto space-y-6 bg-slate-50 py-16 dark:bg-transparent md:py-24 lg:py-32">
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
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by CodeMind Team.
          </p>
        </div>
      </footer>
    </div>
  )
}
