"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <Code2 className="h-6 w-6" />
                        <span>CodeMind</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    {session ? (
                        <>
                            <span className="text-sm text-muted-foreground hidden md:inline-block">
                                Hi, {session.user?.name}
                            </span>
                            <Button variant="ghost" onClick={() => signOut()}>
                                Logout
                            </Button>
                            <Button asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => signIn("github")}>Sign In</Button>
                    )}
                </div>
            </div>
        </nav>
    )
}
