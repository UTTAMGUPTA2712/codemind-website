import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, Linkedin, User } from "lucide-react"

export default function ChangelogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto py-12 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Changelog</h1>
                        <p className="text-muted-foreground">Latest updates and improvements to CodeMind.</p>
                    </div>

                    <div className="relative border-l pl-8 pb-8 space-y-8">
                        {/* Release v0.1.0 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                                <div className="h-2 w-2 rounded-full bg-background" />
                            </span>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-bold">v0.1.0</h2>
                                    <Badge variant="secondary">Initial Release</Badge>
                                    <span className="text-sm text-muted-foreground">February 13, 2026</span>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <p>
                                        We are excited to announce the first public release of CodeMind! This version brings
                                        offline semantic search and chat capabilities to your local codebases.
                                    </p>

                                    <h3 className="text-lg font-semibold mt-4 mb-2">🚀 New Features</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>
                                            <strong>100% Offline Chat</strong>: Analyze your repositories without data leaving your machine.
                                        </li>
                                        <li>
                                            <strong>Semantic Search</strong>: Find code logic and concepts using natural language.
                                        </li>
                                        <li>
                                            <strong>Local LLM Support</strong>: Integrated with Ollama for privacy-focused AI.
                                        </li>
                                        <li>
                                            <strong>Multi-Platform</strong>: Support for Linux (Debian/AppImage), Windows, and macOS.
                                        </li>
                                    </ul>

                                    <h3 className="text-lg font-semibold mt-4 mb-2">🛠 Improvements</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Initial UI/UX design with dark mode support.</li>
                                        <li>Fast vector indexing for large repositories.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <footer className="py-6 md:px-8 md:py-0 border-t mt-auto">
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
