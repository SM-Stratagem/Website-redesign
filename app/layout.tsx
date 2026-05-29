import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: {
    default: "SM Stratagem",
    template: "%s · SM Stratagem"
  },
  description:
    "SM Stratagem builds intelligent systems and custom software for founders, CTOs, and enterprise teams.",
  metadataBase: new URL("https://sm-stratagem.com"),
  applicationName: "SM Stratagem",
  authors: [{ name: "SM Stratagem" }],
  openGraph: {
    title: "SM Stratagem",
    description:
      "Strategic AI and software delivery for founders, CTOs, and enterprise teams.",
    url: "https://sm-stratagem.com",
    siteName: "SM Stratagem",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Stratagem",
    description:
      "Strategic AI and software delivery for founders, CTOs, and enterprise teams."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
