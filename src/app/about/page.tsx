import { Navbar } from "@/components/navbar"
import { Github, Linkedin, User, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About CodeMind</h1>
                        <p className="text-xl text-muted-foreground">
                            Empowering developers to understand their codebases with privacy-first AI.
                        </p>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <p>
                            CodeMind was built with a single mission: to provide powerful AI-driven insights into codebases without compromising on privacy.
                            In an era where code is intellectual property, sending it to the cloud for analysis is not always an option.
                            CodeMind solves this by running 100% locally, leveraging efficient vector search and local LLMs.
                        </p>
                    </div>

                    <div className="border-t pt-8">
                        <h2 className="text-2xl font-bold mb-6 text-center">Meet the Creator</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-lg">
                            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-background shadow-xl">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Uttam Gupta"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-4 text-center md:text-left">
                                <div>
                                    <h3 className="text-2xl font-bold">Uttam Gupta</h3>
                                    <p className="text-muted-foreground">Full Stack Developer & AI Enthusiast</p>
                                </div>
                                <p className="text-muted-foreground">
                                    Passionate about building tools that enhance developer productivity.
                                    Creator of CodeMind and various other open-source projects.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <Link href="https://github.com/UTTAMGUPTA2712" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                        <Github className="h-5 w-5" />
                                        GitHub
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/uttam-gupta-a185a8239/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                        LinkedIn
                                    </Link>
                                    <Link href="https://uttamgupta2712.github.io/profile/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                        <Globe className="h-5 w-5" />
                                        Portfolio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-6 md:px-8 md:py-0 border-t mt-auto">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-medium">Codemind Team</span>.
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
