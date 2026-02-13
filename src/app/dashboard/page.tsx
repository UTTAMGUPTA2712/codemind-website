import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Monitor, Apple, Terminal } from "lucide-react"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/")
    }

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

                <div className="grid gap-4">
                    <Card className="w-full max-w-3xl mx-auto">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">Download CodeMind</CardTitle>
                            <CardDescription>
                                Get the latest version for your operating system.
                                <br />
                                Currently v0.1.0
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-3 p-6">
                                <div className="flex flex-col gap-4 items-center justify-center p-6 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <Monitor className="h-12 w-12 text-blue-600" />
                                    <div className="text-center">
                                        <p className="font-semibold">Windows</p>
                                        <p className="text-xs text-muted-foreground">.msi / .exe</p>
                                    </div>
                                    <Button className="w-full" asChild variant="outline">
                                        <a href="https://github.com/UTTAMGUPTA2712/codemind/releases/latest" target="_blank" rel="noopener noreferrer">
                                            Download
                                        </a>
                                    </Button>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center p-6 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <Apple className="h-12 w-12 text-gray-900 dark:text-gray-100" />
                                    <div className="text-center">
                                        <p className="font-semibold">macOS</p>
                                        <p className="text-xs text-muted-foreground">.dmg / .app</p>
                                    </div>
                                    <Button className="w-full" asChild variant="outline">
                                        <a href="https://github.com/UTTAMGUPTA2712/codemind/releases/latest" target="_blank" rel="noopener noreferrer">
                                            Download
                                        </a>
                                    </Button>
                                </div>

                                <div className="flex flex-col gap-4 items-center justify-center p-6 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                    <Terminal className="h-12 w-12 text-orange-600" />
                                    <div className="text-center">
                                        <p className="font-semibold">Linux</p>
                                        <p className="text-xs text-muted-foreground">.deb / .AppImage</p>
                                    </div>
                                    <Button className="w-full" asChild variant="default">
                                        <a href="https://github.com/UTTAMGUPTA2712/codemind/releases/latest" target="_blank" rel="noopener noreferrer">
                                            Download
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-sm text-muted-foreground">
                                    Looking for previous versions? <a href="https://github.com/UTTAMGUPTA2712/codemind/releases" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">View all releases on GitHub</a>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
