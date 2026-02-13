"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <Image src="/logo.png" alt="CodeMind Logo" width={32} height={32} className="rounded-md" />
                        <span>CodeMind</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/changelog" className="text-sm font-medium hover:text-primary transition-colors">
                        Changelog
                    </Link>
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
