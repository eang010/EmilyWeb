import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PillNav from "@/components/PillNav";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emily Ang — Digital Business Analyst",
  description:
    "Digital business analyst — case studies, services, and how to get in touch.",
};

const themeInitScript = `
try {
  var stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    document.documentElement.setAttribute('data-theme', stored);
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <main className="min-h-screen pb-28">{children}</main>
        <ThemeToggle />
        <PillNav />
      </body>
    </html>
  );
}
