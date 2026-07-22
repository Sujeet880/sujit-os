import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/common/theme-provider";

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
  metadataBase: new URL("https://sujitkumar.design"),
  title: "Sujit Kumar | Senior Product Designer",
  description: "Product Designer specializing in Enterprise SaaS, UX Strategy, Systems Thinking, Design Systems, IoT, and Embedded Interfaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sujit Kumar | Senior Product Designer",
    description: "Product Designer specializing in Enterprise SaaS, UX Strategy, Systems Thinking, Design Systems, IoT, and Embedded Interfaces.",
    url: "https://sujitkumar.design",
    siteName: "Sujit Kumar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sujitkumar.design/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sujit Kumar - Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujit Kumar | Senior Product Designer",
    description: "Product Designer specializing in Enterprise SaaS, UX Strategy, Systems Thinking, Design Systems, IoT, and Embedded Interfaces.",
    images: ["https://sujitkumar.design/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <Navbar />

          <main>{children}</main>
        </ThemeProvider>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />
      </body>
    </html>
  );
}