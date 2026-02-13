import { Octokit } from "octokit"
import { Release, ReleaseAsset } from "./release-data"

// Initialize Octokit (no auth needed for public read usually, but good to have structure)
// For public repos, unauthenticated requests have a lower rate limit (60/hr).
// If the user provided a token, we could use it, but for a public website, 
// we should probably use a public access token or rely on public rates if traffic is low.
// The user snippet had 'YOUR-TOKEN', implying they might want to configure it.
// For now, we'll try without auth for public repo, or use process.env.GITHUB_TOKEN.

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function fetchLatestRelease(): Promise<Release | null> {
    try {
        const owner = 'UTTAMGUPTA2712'
        const repo = 'codemind'

        // Fetch releases
        const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
            owner,
            repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        // Get the first release (latest)
        const latest = response.data[0]

        if (!latest) return null

        // Map assets
        const assets: ReleaseAsset[] = latest.assets.map((asset: any) => {
            const name = asset.name.toLowerCase()
            let platform: 'linux' | 'windows' | 'mac' = 'linux' // Default
            let arch: 'x64' | 'arm64' | 'universal' = 'x64' // Default
            let type = 'unknown'

            // Determine platform and type
            if (name.endsWith('.exe')) {
                platform = 'windows'
                type = 'exe'
            } else if (name.endsWith('.msi')) {
                platform = 'windows'
                type = 'msi'
            } else if (name.endsWith('.dmg')) {
                platform = 'mac'
                type = 'dmg'
            } else if (name.endsWith('.pkg')) {
                platform = 'mac'
                type = 'pkg'
            } else if (name.endsWith('.app.tar.gz')) { // Tauri mac updater
                platform = 'mac'
                type = 'tar.gz'
            } else if (name.endsWith('.deb')) {
                platform = 'linux'
                type = 'deb'
            } else if (name.endsWith('.rpm')) {
                platform = 'linux'
                type = 'rpm'
            } else if (name.endsWith('.appimage')) {
                platform = 'linux'
                type = 'AppImage'
            }

            // Determine Arch
            if (name.includes('arm64') || name.includes('aarch64')) {
                arch = 'arm64'
            } else if (name.includes('universal')) {
                arch = 'universal'
            }

            return {
                name: asset.name,
                platform,
                arch,
                url: asset.browser_download_url,
                type
            }
        })

        return {
            version: latest.tag_name,
            date: latest.published_at ? latest.published_at.split('T')[0] : new Date().toISOString().split('T')[0],
            assets
        }

    } catch (error) {
        console.error("Error fetching releases:", error)
        return null
    }
}
