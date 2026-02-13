"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Monitor, Apple, Command } from "lucide-react"
import { Release } from "@/lib/release-data"

interface DownloadSectionProps {
    initialRelease: Release | null
}

export function DownloadSection({ initialRelease }: DownloadSectionProps) {
    const latestRelease = initialRelease
    const [selectedPlatform, setSelectedPlatform] = useState<string>("windows")

    // Fallback UI if no release data
    if (!latestRelease) {
        return (
            <section id="download" className="container py-12 md:py-24 lg:py-32">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
                        Download CodeMind
                    </h2>
                    <p className="text-muted-foreground">Unable to fetch latest release information. Please check back later.</p>
                </div>
            </section>
        )
    }

    const getIcon = (platform: string) => {
        switch (platform) {
            case 'windows': return <Monitor className="h-5 w-5" />
            case 'mac': return <Apple className="h-5 w-5" />
            case 'linux': return <Command className="h-5 w-5" /> // Using Command as a Linux placeholder or Terminal icon
            default: return <Download className="h-5 w-5" />
        }
    }

    return (
        <section id="download" className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-10">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
                    Download CodeMind
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Get the latest version {latestRelease.version} for your operating system.
                </p>
            </div>

            <div className="mx-auto max-w-4xl">
                <Tabs defaultValue="windows" className="w-full" onValueChange={setSelectedPlatform}>
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-md grid-cols-3">
                            <TabsTrigger value="windows">Windows</TabsTrigger>
                            <TabsTrigger value="mac">macOS</TabsTrigger>
                            <TabsTrigger value="linux">Linux</TabsTrigger>
                        </TabsList>
                    </div>

                    {['windows', 'mac', 'linux'].map((platform) => (
                        <TabsContent key={platform} value={platform} className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {latestRelease.assets
                                    .filter(asset => asset.platform === platform)
                                    .map((asset) => (
                                        <Card key={asset.name} className="flex flex-col justify-between">
                                            <CardHeader>
                                                <CardTitle className="text-lg flex items-start gap-2">
                                                    <span className="shrink-0 mt-1">{getIcon(platform)}</span>
                                                    <span className="break-all">{asset.name}</span>
                                                </CardTitle>
                                                <CardDescription>
                                                    {asset.arch === 'x64' ? '64-bit (x64)' : asset.arch === 'arm64' ? 'Apple Silicon (M1/M2/M3)' : asset.arch}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button className="w-full" asChild>
                                                    <a href={asset.url} target="_blank" rel="noopener noreferrer">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        Download
                                                    </a>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}

                                {latestRelease.assets.filter(asset => asset.platform === platform).length === 0 && (
                                    <div className="col-span-full text-center py-10 text-muted-foreground">
                                        No downloads available for this platform in this release.
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-10 text-center">
                    <p className="text-sm text-muted-foreground">
                        Looking for release notes? <a href="/changelog" className="underline hover:text-primary">View Changelog</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
