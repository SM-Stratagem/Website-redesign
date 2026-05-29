import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";

const SITE_URL = "https://sm-stratagem.com";
const SITE_NAME = "SM Stratagem";
const DEFAULT_DESCRIPTION =
  "A Dubai-based digital product studio. We build VoxxHire — our B2B, B2C, and B2B2C interview assessment platform — alongside custom websites and bespoke software for enterprises, SMEs, and universities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SM Stratagem · Dubai Digital Product Studio · Maker of VoxxHire",
    template: "%s · SM Stratagem"
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "SM Stratagem",
    "VoxxHire",
    "Dubai digital studio",
    "Dubai product studio",
    "interview assessment platform",
    "structured interview platform",
    "B2B SaaS Dubai",
    "B2C interview practice",
    "B2B2C assessment platform",
    "custom website development Dubai",
    "custom software development Dubai",
    "Next.js development Dubai",
    "AI assessment software UAE",
    "in5 Tech Dubai",
    "Dubai Internet City software studio",
    "Suhayl Dastager",
    "Mariam Mohammed",
    "TWE+ partner",
    "IIT Abu Dhabi"
  ],
  authors: [
    { name: "SM Stratagem", url: SITE_URL },
    { name: "Suhayl Dastager", url: "https://ae.linkedin.com/in/suhayl-dastager" },
    { name: "Mariam Mohammed", url: "https://www.linkedin.com/in/mariammohammed212/" }
  ],
  creator: "SM Stratagem",
  publisher: "SM Stratagem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SM Stratagem · Dubai Digital Product Studio · Maker of VoxxHire",
    description: DEFAULT_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Stratagem · Dubai Digital Product Studio · Maker of VoxxHire",
    description: DEFAULT_DESCRIPTION,
    creator: "@smstratagem"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology"
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1611" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light"
};

// JSON-LD: Organization + WebSite + LocalBusiness
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Stratagem",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.svg`,
    width: 32,
    height: 32
  },
  description: DEFAULT_DESCRIPTION,
  email: "contact@sm-stratagem.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "in5 Tech, Dubai Internet City",
    addressLocality: "Dubai",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.0772,
    longitude: 55.141
  },
  founder: [
    {
      "@type": "Person",
      name: "Suhayl Dastager",
      jobTitle: "Co-founder",
      sameAs: "https://ae.linkedin.com/in/suhayl-dastager"
    },
    {
      "@type": "Person",
      name: "Mariam Mohammed",
      jobTitle: "Co-founder",
      sameAs: "https://www.linkedin.com/in/mariammohammed212/"
    }
  ],
  sameAs: [
    "https://ae.linkedin.com/in/suhayl-dastager",
    "https://www.linkedin.com/in/mariammohammed212/",
    "https://www.voxxhire.com/"
  ],
  knowsAbout: [
    "Interview assessment platforms",
    "Custom software development",
    "Custom website development",
    "B2B SaaS",
    "B2C SaaS",
    "Educational technology",
    "Hiring technology"
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "VoxxHire",
        applicationCategory: "BusinessApplication",
        url: "https://www.voxxhire.com/"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Website Development"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Software Development"
      }
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: `${SITE_URL}/opengraph-image`,
  url: SITE_URL,
  email: "contact@sm-stratagem.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "in5 Tech, Dubai Internet City",
    addressLocality: "Dubai",
    addressCountry: "AE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.0772,
    longitude: 55.141
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Place", name: "GCC" },
    { "@type": "Place", name: "Global" }
  ]
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
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
