import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Faleel H — Java Developer & AI Engineer",
  description:
    "Portfolio of Faleel H, a Java developer and AI engineer specializing in Spring Boot, Spring AI, RAG applications, and enterprise backend development. Open to entry-level Java developer roles.",
  keywords: [
    "Faleel H",
    "Java Developer",
    "Spring Boot",
    "Spring AI",
    "RAG",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Faleel H" }],
  creator: "Faleel H",
  openGraph: {
    title: "Faleel H — Java Developer & AI Engineer",
    description:
      "Spring Boot, Spring AI, and RAG portfolio. Building enterprise backend systems and AI-powered knowledge assistants.",
    type: "website",
    locale: "en_IN",
    siteName: "Faleel H",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
