export interface ReleaseAsset {
    name: string
    platform: 'linux' | 'windows' | 'mac'
    arch: 'x64' | 'arm64' | 'universal'
    url: string
    type: string
}

export interface Release {
    version: string
    date: string
    assets: ReleaseAsset[]
}

export const releases: Release[] = [
    {
        version: '0.1.0',
        date: '2026-02-13',
        assets: [
            {
                name: 'Linux (.rpm)',
                platform: 'linux',
                arch: 'x64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind-0.1.0-1.x86_64.rpm',
                type: 'rpm'
            },
            {
                name: 'Linux (.deb)',
                platform: 'linux',
                arch: 'x64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_0.1.0_amd64.deb',
                type: 'deb'
            },
            {
                name: 'Linux (AppImage)',
                platform: 'linux',
                arch: 'x64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_0.1.0_amd64.AppImage',
                type: 'AppImage'
            },
            {
                name: 'macOS (Intel)',
                platform: 'mac',
                arch: 'x64',
                // Note: The screenshot shows a .dmg, assuming it's universal or specific, but usually dmgs are for mac.
                // Screenshot has codemind_0.1.0_aarch64.dmg and codemind_aarch64.app.tar.gz
                // It seems there isn't an intel mac build in the screenshot? 
                // Wait, the screenshot shows `codemind_0.1.0_aarch64.dmg`. That is ARM64 (Apple Silicon).
                // I don't see an intel mac build in the screenshot list explicitly labeled x64 dmg, 
                // but there is `codemind_0.1.0_x64-setup.exe` for windows.
                // Let's stick to what is in the screenshot.
                url: '', // No intel mac build seen in screenshot, leaving empty or omitting.
                type: 'dmg'
            },
            {
                name: 'macOS (Apple Silicon)',
                platform: 'mac',
                arch: 'arm64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_0.1.0_aarch64.dmg',
                type: 'dmg'
            },
            {
                name: 'macOS (Apple Silicon .tar.gz)',
                platform: 'mac',
                arch: 'arm64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_aarch64.app.tar.gz',
                type: 'tar.gz'
            },
            {
                name: 'Windows (Installer .exe)',
                platform: 'windows',
                arch: 'x64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_0.1.0_x64-setup.exe',
                type: 'exe'
            },
            {
                name: 'Windows (Installer .msi)',
                platform: 'windows',
                arch: 'x64',
                url: 'https://github.com/UTTAMGUPTA2712/codemind/releases/download/v0.1.0/codemind_0.1.0_x64_en-US.msi',
                type: 'msi'
            }
        ]
    }
].map(release => ({
    ...release,
    assets: release.assets.filter(a => a.url)
})) as Release[]
