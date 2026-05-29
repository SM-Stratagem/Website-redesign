import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: {
    default: "SM Stratagem — Building VoxxHire and the software that supports forward-thinking teams.",
    template: "%s · SM Stratagem"
  },
  description:
    "A Dubai-based digital product studio. We build VoxxHire — our B2B, B2C, and B2B2C assessment platform — alongside custom websites and software for enterprises, SMEs, and universities.",
  metadataBase: new URL("https://sm-stratagem.com"),
  applicationName: "SM Stratagem",
  authors: [{ name: "SM Stratagem" }, { name: "Suhayl Dastager" }, { name: "Mariam Mohammed" }],
  openGraph: {
    title: "SM Stratagem",
    description:
      "A Dubai-based digital product studio. Maker of VoxxHire — and the websites and software around it.",
    url: "https://sm-stratagem.com",
    siteName: "SM Stratagem",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Stratagem",
    description: "A Dubai-based digital product studio. Maker of VoxxHire."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Geist:wght@100..900&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
