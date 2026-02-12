# CodeMind Website MVP

A modern, fast, and secure landing page and dashboard for CodeMind – your private, local AI second brain for codebases. Built with Next.js 14, Tailwind CSS, and NextAuth.js.

## Features

- **Modern Landing Page**: High-conversion hero section and feature highlights.
- **Secure Authentication**: GitHub OAuth integration via NextAuth.js.
- **Protected Dashboard**: Accessible only to logged-in users.
- **Responsive Design**: Mobile-first UI using Tailwind CSS and Radix UI primitives.

## Prerequisites

- Node.js 18+
- A GitHub Account (for OAuth app setup)

## Setup Instructions

### 1. Clone & Install
```bash
git clone <repository-url>
cd codemind-website
npm install
```

### 2. Configure Environment Variables
Copy the template to a new local file:
```bash
cp .env.local.example .env.local
```
Then fill in the values:

**GitHub OAuth Setup:**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers).
2. Click "New OAuth App".
3. Set **Homepage URL** to `http://localhost:3000`.
4. Set **Authorization callback URL** to `http://localhost:3000/api/auth/callback/github`.
5. Copy the **Client ID** and generate a new **Client Secret**.
6. Paste these into `.env.local`.

**NextAuth Secret:**
Generate a random secret for session encryption:
```bash
openssl rand -base64 32
```
Add it to `NEXTAUTH_SECRET` in `.env.local`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # Auth handler
│   ├── dashboard/page.tsx               # Protected dashboard
│   ├── layout.tsx                       # Root layout with Providers
│   ├── page.tsx                         # Landing page
│   └── globals.css                      # Global styles
├── components/
│   ├── ui/                              # Reusable UI components
│   ├── navbar.tsx                       # Main navigation
│   └── providers.tsx                    # Context providers
└── lib/
    ├── auth.ts                          # Auth configuration
    └── utils.ts                         # Utility functions
```

## Next Steps (Post-MVP)

1.  **Real Download Links**: Integrate with GitHub Releases API to dynamically fetch and link the latest desktop app binaries.
2.  **User Statistics**: Fetch real repository data for the user to show valid "indexed" repos in the dashboard.
3.  **Pricing Page**: Add a pricing section for potential "Pro" features (cloud backup, team sync).
