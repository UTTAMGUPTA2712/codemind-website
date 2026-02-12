import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, GitBranch } from "lucide-react"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/")
    }

    // In a real app, we might fetch user repos here using the access token
    // For MVP, we'll show static/mock data
    const mockRepos = [
        { name: "codemind-website", public: true },
        { name: "desktop-app", public: false },
        { name: "legacy-backend", public: true },
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 space-y-8 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">
                            Welcome back, {session.user?.name || "Developer"}!
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                            <CardDescription>
                                Your CodeMind activity and connected repositories.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <div className="space-y-4 p-4">
                                {mockRepos.map((repo) => (
                                    <div key={repo.name} className="flex items-center">
                                        <GitBranch className="mr-2 h-4 w-4 opacity-70" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">{repo.name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {repo.public ? "Public" : "Private"}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Download CodeMind</CardTitle>
                            <CardDescription>
                                Get the latest version of the desktop app.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4 items-center justify-center p-6 border-2 border-dashed rounded-lg">
                                <Download className="h-12 w-12 text-muted-foreground" />
                                <div className="text-center">
                                    <p className="text-sm font-semibold">CodeMind v0.1.0-alpha</p>
                                    <p className="text-xs text-muted-foreground">Mac / Windows / Linux</p>
                                </div>
                                <Button className="w-full" asChild>
                                    {/* Placeholder download link */}
                                    <a href="https://github.com/codemind-app/releases" target="_blank" rel="noopener noreferrer">
                                        Download for Linux
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
