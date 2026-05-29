import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

export const metadata: Metadata = {
  title: "Contact · SM Stratagem · Dubai Digital Studio",
  description:
    "Start a conversation with SM Stratagem. Email contact@sm-stratagem.com or visit us at in5 Tech, Dubai Internet City. We reply within one business day.",
  keywords: [
    "contact SM Stratagem",
    "Dubai digital studio contact",
    "in5 Tech Dubai contact",
    "VoxxHire demo request",
    "Dubai software studio email",
    "hire Dubai web developers"
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SM Stratagem",
    description: "Tell us what you're working on. We reply within one business day.",
    url: "/contact",
    type: "website"
  }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://sm-stratagem.com/contact",
  name: "Contact SM Stratagem",
  description: "Get in touch with the SM Stratagem team in Dubai.",
  mainEntity: {
    "@type": "Organization",
    name: "SM Stratagem",
    email: "contact@sm-stratagem.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "in5 Tech, Dubai Internet City",
      addressLocality: "Dubai",
      addressCountry: "AE"
    }
  }
};

const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sm-stratagem.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://sm-stratagem.com/contact" }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbSchema) }}
      />
      <SiteHeader />

      <section className="page-hero video-hero">
        <VideoHeroBackground
          uid="contact"
          src="https://videos.pexels.com/video-files/856005/856005-hd_1920_1080_24fps.mp4"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=40&auto=format&fit=crop&blur=20"
        />

        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> <span>/</span> Contact</div>
          <h1 className="reveal in">Start a <span className="it">conversation.</span></h1>
          <p className="lede reveal d1 in">
            Tell us what you&rsquo;re working on. A few sentences is enough — we&rsquo;ll get back to you within one business day and propose a 30-minute call if it&rsquo;s a fit.
          </p>
          <div className="hero-divider-row reveal d2 in">
            <div className="left"><span>● Accepting briefs</span><span>Q3 · 2026</span></div>
            <div className="center">Talk to us</div>
            <div className="right"><span>Dubai · GST</span><span>~1 business day</span></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="contact-grid">

            <form className="form reveal" action="mailto:contact@sm-stratagem.com" method="POST" encType="text/plain">
              <div className="form-double">
                <div className="form-row">
                  <label htmlFor="name">Your name</label>
                  <input type="text" id="name" name="name" placeholder="Jane Hassan" required />
                </div>
                <div className="form-row">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="form-double">
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="jane@acme.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="interest">Interested in</label>
                  <select id="interest" name="interest" defaultValue="VoxxHire (assessment platform)">
                    <option>VoxxHire (assessment platform)</option>
                    <option>Custom website</option>
                    <option>Custom software / app</option>
                    <option>SM Insights / dashboards</option>
                    <option>SM Websites / productized site</option>
                    <option>VidSights / video analytics</option>
                    <option>Advisory / strategy</option>
                    <option>Something else</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="message">Tell us about the project</label>
                <textarea id="message" name="message" placeholder="A few sentences about what you're working on, your team, and what 'done' looks like." required></textarea>
              </div>
              <div className="form-row">
                <label htmlFor="budget">Indicative budget (optional)</label>
                <select id="budget" name="budget" defaultValue="Not sure yet">
                  <option>Not sure yet</option>
                  <option>Under $25k</option>
                  <option>$25k – $75k</option>
                  <option>$75k – $200k</option>
                  <option>$200k+</option>
                  <option>Ongoing retainer</option>
                </select>
              </div>
              <button type="submit" className="cta-btn">
                Send message <span className="arrow">→</span>
              </button>
              <p style={{ fontSize: 13, color: "var(--ink-3)", margin: 0, lineHeight: 1.55 }}>
                By submitting this form you&rsquo;ll be opening a draft email to{" "}
                <a href="mailto:contact@sm-stratagem.com" style={{ color: "var(--accent)" }}>
                  contact@sm-stratagem.com
                </a>
                . We&rsquo;ll reply within one business day.
              </p>
            </form>

            <div className="contact-info reveal d1">
              <div className="block">
                <h4>Email is best.</h4>
                <a
                  href="mailto:contact@sm-stratagem.com"
                  style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: 14, letterSpacing: ".05em", fontWeight: 500 }}
                >
                  contact@sm-stratagem.com
                </a>
                <p style={{ marginTop: 10 }}>We read every message. We reply to almost all of them within one business day.</p>
              </div>
              <div className="block">
                <h4>Visit the studio.</h4>
                <p>in5 Tech<br />Dubai Internet City<br />Dubai, UAE</p>
                <p style={{ marginTop: 10, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".08em" }}>
                  25.0772° N · 55.1410° E
                </p>
              </div>
              <div className="block">
                <h4>Operating hours.</h4>
                <p>Sunday – Thursday<br />09:00 – 18:00 GST (UAE time)</p>
              </div>
              <div className="block">
                <h4>What happens next.</h4>
                <p style={{ marginTop: 0 }}>
                  <strong style={{ color: "var(--ink)" }}>01.</strong> &nbsp;You send a short note.<br />
                  <strong style={{ color: "var(--ink)" }}>02.</strong> &nbsp;We read it and reply within one business day.<br />
                  <strong style={{ color: "var(--ink)" }}>03.</strong> &nbsp;If it looks like a fit, we schedule a 30-minute intro call.<br />
                  <strong style={{ color: "var(--ink)" }}>04.</strong> &nbsp;After the call, we&rsquo;ll send a written summary and proposed next step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <span className="kicker" style={{ color: "var(--accent-2)" }}>Prefer to read first?</span>
            <h2 className="reveal">Take a <span className="it">look around.</span></h2>
            <div className="cta-buttons reveal d2">
              <Link href="/voxxhire" className="cta-btn">VoxxHire <span className="arrow">→</span></Link>
              <Link href="/services" className="cta-ghost">Services</Link>
              <Link href="/products" className="cta-ghost">Studio products</Link>
            </div>
          </div>
        </div>
        <div className="big-name" aria-hidden="true">Contact</div>
      </section>

      <SiteFooter />
    </>
  );
}
