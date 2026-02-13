"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

export function AuthButtons() {
    const { data: session } = useSession()

    return (
        <>
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
        </>
    )
}
