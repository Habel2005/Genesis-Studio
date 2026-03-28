# Genesis Studio | AI-Powered Web Design

Genesis Studio is a high-end, modern web design agency landing page that showcases the power of AI-integrated design and development. Built for speed, aesthetics, and performance, it demonstrates a "dream to ship" workflow.

## Features

- **AI-Powered Workflows**: Integrated Genkit flows for generating project concepts and consultation briefs.
- **Modern Liquid Glass UI**: A bespoke aesthetic using high-end glassmorphism, custom blurs, and sophisticated typography (Instrument Serif & Barlow).
- **Immersive Video Experience**: Support for HLS streaming and high-quality hero video backgrounds.
- **Responsive & Performance Optimized**: Built with Next.js 15 and Tailwind CSS for lightning-fast loads and seamless transitions.
- **Interactive Components**: Animated with Framer Motion and styled with ShadCN UI.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **AI Engine**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Video**: [HLS.js](https://github.com/video-dev/hls.js/)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Firebase project (for full backend integration).

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables in a `.env` file (e.g., `GOOGLE_GENAI_API_KEY`).

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:9002](http://localhost:9002) in your browser.

## AI Flows

Genesis Studio includes built-in AI agents:
- **Project Concept Generator**: Translates a high-level vision into a concrete plan (Name, Tagline, Features, Design Aesthetic).
- **Consultation Brief Generator**: Prepares professional briefs for client meetings based on project requirements.

## Deployment

This project is configured for **Firebase App Hosting**. See `apphosting.yaml` for configuration details.