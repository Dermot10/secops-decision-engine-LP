import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obsidianblue.io"),
  title: "Obsidian Blue — Security your engineers actually own",
  description:
    "Detection-as-code, AI-assisted triage, and threat intelligence for developer-led teams who can't justify a security hire. Private beta Q3 2026.",
  keywords: [
    "security operations",
    "detection as code",
    "AI triage",
    "developer security",
    "SIEM alternative",
    "threat detection",
    "SaaS security",
  ],
  openGraph: {
    title: "Obsidian Blue — Security your engineers actually own",
    description:
      "Detection-as-code, AI-assisted triage, and threat intelligence for developer-led teams. No security hire required.",
    url: "https://obsidianblue.io",
    siteName: "Obsidian Blue",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Obsidian Blue — Security operations for developer-led teams",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obsidian Blue — Security your engineers actually own",
    description:
      "Detection-as-code, AI-assisted triage, and threat intelligence for developer-led teams. No security hire required.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}