
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Genesis Studio | AI-Powered Web Design',
  description: 'Stunning design. Blazing performance. Built by AI, refined by experts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-black selection:bg-white/20">{children}</body>
    </html>
  );
}
