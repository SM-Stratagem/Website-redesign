import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

export const metadata: Metadata = {
  title: "Services · Custom Websites & Custom Software Development in Dubai",
  description:
    "Beyond VoxxHire, SM Stratagem designs custom websites and builds bespoke software for enterprises, SMEs, and universities in the UAE. Strategy-led, sprint-delivered, with a 60-day post-launch window.",
  keywords: [
    "custom website development Dubai",
    "custom software development Dubai",
    "Next.js development Dubai",
    "bespoke software UAE",
    "internal tools development",
    "corporate website Dubai",
    "marketing website Dubai",
    "web app development UAE",
    "API integration Dubai",
    "ATS CRM integration",
    "AI feature development",
    "Dubai digital agency",
    "in5 Tech studio",
    "strategy-led software"
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Custom Websites & Software",
    description:
      "Custom websites and bespoke software, delivered in sprints. Project, partnership, and advisory engagements.",
    url: "/services",
    type: "website"
  }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Custom Website Development",
      provider: {
        "@type": "Organization",
        name: "SM Stratagem",
        url: "https://sm-stratagem.com"
      },
      areaServed: "AE",
      description:
        "Marketing sites, corporate sites, and conversion-aware launches engineered for credibility. Includes discovery, design system, build & launch, and a 60-day post-launch window."
    },
    {
      "@type": "Service",
      position: 2,
      name: "Custom Software Development",
      provider: {
        "@type": "Organization",
        name: "SM Stratagem",
        url: "https://sm-stratagem.com"
      },
      areaServed: "AE",
      description:
        "Internal tools, client-facing applications, integrations, and AI features. Sprint-based delivery with weekly demos."
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sm-stratagem.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sm-stratagem.com/services" }
  ]
};

const stages = [
  { n: "i", phase: "Phase 01", t: "Discover", p: "Stakeholder interviews, current-state audit, and a written brief everyone can sign off on before a line of code is written." },
  { n: "ii", phase: "Phase 02", t: "Map", p: "Translate the brief into architecture: information, data, identity. We design the spine before any interface or query." },
  { n: "iii", phase: "Phase 03", t: "Build", p: "Sprint cycles with shippable increments. Weekly demos. You feel progress instead of waiting for a reveal at the end." },
  { n: "iv", phase: "Phase 04", t: "Scale", p: "Hand-off with documentation, telemetry, and a 60-day stabilization window. The work keeps working after we step away." }
];

const engagements = [
  {
    badge: "E.01 — Project",
    title: <>Fixed <span className="it">scope.</span></>,
    p: "A defined deliverable — a website, an internal tool, a hiring portal — scoped, priced, and shipped in a written window. The simplest way to start.",
    items: ["4 – 12 week engagements", "Fixed price, fixed scope", "60-day post-launch window"]
  },
  {
    badge: "E.02 — Partnership",
    title: <>Ongoing <span className="it">retainer.</span></>,
    p: "Embedded with your team across multiple workstreams. We act as your product, design, and engineering arm — a quiet, senior bench you can rely on month over month.",
    items: ["Monthly retainers", "Multi-stream delivery", "Dedicated senior team"]
  },
  {
    badge: "E.03 — Advisory",
    title: <>Strategy <span className="it">first.</span></>,
    p: "When you're not yet sure what you're building. A short engagement — interviews, audit, written direction — to bring shape and decision-readiness to an unformed brief.",
    items: ["2 – 4 week sprints", "Written direction & briefs", "No commitment to build with us"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteHeader />

      {/* ====== HERO ====== */}
      <section className="page-hero video-hero">
        <VideoHeroBackground
          uid="svc"
          src="https://videos.pexels.com/video-files/4763824/4763824-hd_1920_1080_24fps.mp4"
          poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=40&auto=format&fit=crop&blur=20"
        />
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> <span>/</span> Services</div>
          <h1 className="reveal in">
            Custom <span className="it">websites,</span><br />
            and software <span className="it">built to brief.</span>
          </h1>
          <p className="lede reveal d1 in">
            Beyond VoxxHire, we partner with selected organisations to design custom websites and engineer bespoke software. Two service lines, one delivery model — strategy-led, sprint-based, and built to keep working long after we step away.
          </p>
          <div className="hero-divider-row reveal d2 in">
            <div className="left"><span>● Open to briefs</span><span>2 active engagements</span></div>
            <div className="center">Two service lines</div>
            <div className="right"><span>4–12 week projects</span><span>Retainer or fixed-scope</span></div>
          </div>
        </div>
      </section>

      {/* ====== SERVICE 01: Custom Websites ====== */}
      <section className="section" id="websites">
        <div className="wrap">
          <div className="svc-row">
            <div className="svc-text reveal">
              <span className="kicker">Service 01 · Custom Websites</span>
              <h3>Websites that <span className="it">earn the click.</span></h3>
              <p>From positioning through to launch, we design and build sites that take a brand seriously the moment a stakeholder lands on the page. Marketing sites, corporate sites, and conversion-aware launches.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>Discovery &amp; positioning</b> — interviews, audit, written brief everyone can sign off.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>Design system</b> — type, color, components — reusable for the long-term life of the brand.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>Build &amp; launch</b> — modern stack (Next, Astro, headless CMS) with editor experience your team will actually use.</span></div>
                <div className="item"><span className="n">04</span><span className="t"><b>Telemetry &amp; ongoing</b> — analytics, performance, and 60-day support window after go-live.</span></div>
              </div>
              <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>
                Discuss your site <span className="arrow">→</span>
              </Link>
            </div>
            <div className="svc-visual reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=85&auto=format&fit=crop"
                alt="Modern website design workspace"
                loading="eager"
              />
              <span className="ov">SERVICE_01 / WEBSITES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICE 02: Custom Software ====== */}
      <section className="section" id="software">
        <div className="wrap">
          <div className="svc-row flip">
            <div className="svc-text reveal">
              <span className="kicker">Service 02 · Custom Software</span>
              <h3>Software <span className="it">built to fit</span> your team.</h3>
              <p>Internal tools, client-facing applications, and integrations engineered for the way your team actually operates. Strategy-led, shipped in two-week increments, handed off with documentation that someone other than us can actually maintain.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>Internal tools</b> — dashboards, admin panels, reporting engines for operations and leadership.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>Client-facing apps</b> — web applications your customers will use every day, designed to feel quiet and useful.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>Integrations &amp; data</b> — ATS, CRM, billing, ERP — connect the systems that should already be talking.</span></div>
                <div className="item"><span className="n">04</span><span className="t"><b>AI features</b> — assistants, document workflows, and automation embedded into existing software.</span></div>
              </div>
              <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>
                Discuss your build <span className="arrow">→</span>
              </Link>
            </div>
            <div className="svc-visual reveal d1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=85&auto=format&fit=crop"
                alt="Software development collaboration"
                loading="lazy"
              />
              <span className="ov">SERVICE_02 / SOFTWARE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="process">
        <div className="wrap">
          <div className="section-head">
            <span className="section-meta">Method</span>
            <h2 className="reveal">How an engagement<br /><span className="it">actually runs.</span></h2>
          </div>
          <div className="process-stages">
            {stages.map((s, i) => (
              <div className={`stage reveal d${i + 1}`} key={s.t}>
                <div className="stage-node">{s.n}</div>
                <span className="stage-label">{s.phase}</span>
                <h4>{s.t}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ENGAGEMENT MODELS ====== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-meta">Engagement</span>
            <h2 className="reveal">Three ways<br />to <span className="it">work with us.</span></h2>
          </div>
          <div className="lanes">
            {engagements.map((e, i) => (
              <div className={`lane reveal d${i + 1}`} key={e.badge}>
                <div className="lane-num"><span>{e.badge}</span><span className="arrow">↗</span></div>
                <h3>{e.title}</h3>
                <p>{e.p}</p>
                <div className="lane-viz">
                  <div className="lane-list">
                    {e.items.map((item) => (
                      <div key={item}><span>—</span>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <span className="kicker" style={{ color: "var(--accent-2)" }}>Tell us about the brief.</span>
            <h2 className="reveal">Start with a <span className="it">conversation.</span></h2>
            <p className="reveal d2">Thirty minutes. We&rsquo;ll listen first, ask the practical questions, and tell you honestly whether we&rsquo;re the right studio for the work. No pitch deck.</p>
            <div className="cta-buttons reveal d3">
              <Link href="/contact" className="cta-btn">Book a consultation <span className="arrow">→</span></Link>
              <Link href="/voxxhire" className="cta-ghost">Explore VoxxHire</Link>
            </div>
          </div>
        </div>
        <div className="big-name" aria-hidden="true">Services</div>
      </section>

      <SiteFooter />
    </>
  );
}
