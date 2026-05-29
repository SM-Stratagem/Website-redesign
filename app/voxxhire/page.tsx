import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

export const metadata: Metadata = {
  title:
    "VoxxHire · B2B, B2C, B2B2C Interview Assessment Platform from SM Stratagem",
  description:
    "VoxxHire is SM Stratagem's flagship interview assessment platform. Three deployment modes — B2B for hiring teams, B2C for individual job-seekers, and B2B2C for universities. Trusted by TWE+ and IIT Abu Dhabi.",
  keywords: [
    "VoxxHire",
    "interview assessment platform",
    "structured interview software",
    "candidate scoring platform",
    "B2B interview platform",
    "B2C interview practice",
    "B2B2C university assessment",
    "hiring software Dubai",
    "hiring platform UAE",
    "interview practice software",
    "panel calibration software",
    "candidate rubric software",
    "white-label interview platform",
    "IIT Abu Dhabi",
    "TWE+",
    "SM Stratagem flagship"
  ],
  alternates: { canonical: "/voxxhire" },
  openGraph: {
    title: "VoxxHire · Interview Assessment Platform",
    description:
      "Structured assessment, decision-ready reporting, and embeddable workflows. B2B · B2C · B2B2C.",
    url: "/voxxhire",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxxHire · Interview Assessment Platform",
    description:
      "Structured assessment, decision-ready reporting, and embeddable workflows."
  }
};

const voxxhireSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "VoxxHire",
  alternateName: "VoxxHire by SM Stratagem",
  description:
    "Interview assessment platform with three deployment modes (B2B, B2C, B2B2C). Built for hiring teams, individual job-seekers, universities, and ed-tech platforms.",
  url: "https://www.voxxhire.com/",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Human Resources Management Software",
  operatingSystem: "Web",
  brand: { "@type": "Brand", name: "SM Stratagem" },
  publisher: {
    "@type": "Organization",
    name: "SM Stratagem",
    url: "https://sm-stratagem.com"
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
    availability: "https://schema.org/InStock"
  },
  featureList: [
    "Configurable assessment rubrics",
    "Panel calibration and drift detection",
    "Decision-ready candidate reports",
    "ATS, CRM, SSO integrations",
    "White-label deployment",
    "Cohort management at scale"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sm-stratagem.com/" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://sm-stratagem.com/products" },
    { "@type": "ListItem", position: 3, name: "VoxxHire", item: "https://sm-stratagem.com/voxxhire" }
  ]
};

type MockRow = { name: string; w: number; s: string };

function MockTopBar({ left, right }: { left: string; right: ReactNode }) {
  return (
    <div className="mock-top">
      <div className="mock-dots"><i></i><i></i><i></i></div>
      <div className="l">{left}</div>
      <div className="r">{right}</div>
    </div>
  );
}

function MockRow({ row }: { row: MockRow }) {
  return (
    <div className="mock-row">
      <span className="n">{row.name}</span>
      <span className="b" style={{ ["--w" as string]: `${row.w}%` } as CSSProperties}></span>
      <span className="s">{row.s}</span>
    </div>
  );
}

function SubRow({ label, w, num }: { label: string; w: number; num: string }) {
  return (
    <div className="mock-sub-row">
      <span className="lbl">{label}</span>
      <span className="bar" style={{ ["--w" as string]: `${w}%` } as CSSProperties}></span>
      <span className="num">{num}</span>
    </div>
  );
}

const modes = [
  {
    badge: "M.01 — B2B",
    title: <>For the <span className="it">hiring team.</span></>,
    p: "Deployed directly into your organisation. Structured assessments, calibrated panels, and reporting your leadership can act on without a translation layer.",
    who: <>For <span>enterprise &amp; SME teams</span></>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
      </svg>
    )
  },
  {
    badge: "M.02 — B2C",
    title: <>For the <span className="it">individual.</span></>,
    p: "Where the candidate is the customer. Practice interviews, get assessed against real rubrics, and learn how to communicate the thing you can already do — before the room you can't afford to lose.",
    who: <>For <span>job-seekers &amp; career builders</span></>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    )
  },
  {
    badge: "M.03 — B2B2C",
    title: <>For the <span className="it">applicant journey.</span></>,
    p: "Where the candidate is also the customer. Universities, learn-to-earn programs, and platforms that score, certify, or place individuals at scale.",
    who: <>For <span>universities &amp; ed-tech</span></>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" />
      </svg>
    )
  }
];

const heroRows: MockRow[] = [
  { name: "Aaliyah Hassan", w: 91, s: "9.1" },
  { name: "Sofía Reyes", w: 88, s: "8.8" },
  { name: "Mohammed Ibrahim", w: 84, s: "8.4" },
  { name: "Kwame Owusu", w: 79, s: "7.9" }
];

const rubricRows = [
  { label: "Technical depth", w: 84, num: "8.4" },
  { label: "System design", w: 79, num: "7.9" },
  { label: "Code quality", w: 86, num: "8.6" },
  { label: "Communication", w: 82, num: "8.2" },
  { label: "Ownership", w: 75, num: "7.5" }
];

const reportRows = [
  { label: "Technical", w: 92, num: "9.2" },
  { label: "Systems", w: 86, num: "8.6" },
  { label: "Communication", w: 88, num: "8.8" },
  { label: "Ownership", w: 94, num: "9.4" }
];

const cohortRows: MockRow[] = [
  { name: "Sprint 24 · Sr. Engineer", w: 84, s: "142" },
  { name: "Sprint 23 · Designer", w: 67, s: "68" },
  { name: "Sprint 22 · Data", w: 92, s: "220" },
  { name: "Sprint 21 · Product", w: 52, s: "44" }
];

const sparkHeights = [30, 45, 60, 80, 68, 52, 74, 88, 96, 78, 62, 84, 92, 100];

export default function VoxxHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(voxxhireSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteHeader />

      {/* ====== HERO ====== */}
      <section className="voxx-hero video-hero">
        <VideoHeroBackground
          uid="voxx"
          src="https://videos.pexels.com/video-files/3196211/3196211-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=40&auto=format&fit=crop&blur=20"
        />

        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link> <span>/</span> Products <span>/</span> VoxxHire
          </div>

          <div className="voxx-hero-grid">
            <div>
              <h1 className="reveal in">
                Hiring with<br />
                <span className="it">structure.</span><br />
                At scale.
              </h1>
              <p className="lede reveal d1 in">
                VoxxHire is our flagship assessment platform — built for hiring teams, individual job-seekers, and the universities and platforms that score people in between. Three modes (B2B, B2C, B2B2C), one calm interface, and reporting that&rsquo;s written by the time you walk into the meeting.
              </p>
              <div className="meta reveal d2 in">
                <span className="tag acc">Flagship · SM Stratagem</span>
                <span className="tag">B2B</span>
                <span className="tag">B2C</span>
                <span className="tag">B2B2C</span>
              </div>
              <div className="hero-ctas reveal d3 in">
                <a href="https://www.voxxhire.com/" target="_blank" rel="noopener noreferrer" className="cta-btn">
                  Visit voxxhire.com <span className="arrow">↗</span>
                </a>
                <Link href="/contact" className="cta-ghost">Request a demo</Link>
              </div>
            </div>

            {/* Hero mockup: cohort dashboard */}
            <div className="mock reveal d2 in">
              <MockTopBar left="voxxhire / sprint-24" right="● live" />
              <div className="mock-h"><span className="it">Sprint 24</span> · Senior Engineer</div>
              <div className="mock-sub">Q2 hiring cohort · 142 candidates · panel of 6</div>
              <div className="mock-kpis">
                <div className="mock-kpi"><div className="v">142</div><div className="l">Candidates</div></div>
                <div className="mock-kpi"><div className="v">94<span className="acc">%</span></div><div className="l">Calibration</div></div>
              </div>
              <div className="mock-rows" style={{ flex: 1 }}>
                {heroRows.map((r) => <MockRow key={r.name} row={r} />)}
              </div>
              <div className="mock-meter">
                <div className="l">
                  <span className="a">Panel calibration · cross-interviewer agreement</span>
                  <span className="b">94%</span>
                </div>
                <div className="track"><i></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== DEPLOYMENT MODES ====== */}
      <section className="modes" id="modes">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="section-meta">01 / Deployment</span>
            <h2 className="reveal">Three modes.<br /><span className="it">One platform.</span></h2>
          </div>
          <div className="modes-grid">
            {modes.map((m, i) => (
              <div className={`mode reveal d${i + 1}`} key={m.badge}>
                <div className="mode-icon">{m.icon}</div>
                <span className="badge">{m.badge}</span>
                <h3>{m.title}</h3>
                <p>{m.p}</p>
                <div className="who">{m.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FEATURE 01 ====== */}
      <section className="section">
        <div className="wrap">
          <div className="svc-row">
            <div className="svc-text reveal">
              <span className="kicker">Feature 01 · What&rsquo;s inside</span>
              <h3>Structured <span className="it">assessment</span></h3>
              <p>Configurable rubrics built per role and level, with calibrated scoring across panels. Replace gut-feel interviewing with consistent, comparable evaluations — and a paper trail that holds up under scrutiny.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>Custom rubrics</b> — tuned to your roles, levels, and competencies.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>Panel calibration</b> — measure agreement between interviewers, surface drift.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>Audit trail</b> — every score traceable to its rubric, every decision defensible.</span></div>
              </div>
            </div>

            <div className="mock reveal d1">
              <MockTopBar left="rubric · senior engineer" right="v 2.1" />
              <div className="mock-h">Rubric · <span className="it">Senior Engineer</span></div>
              <div className="mock-sub">5 competencies · weighted · panel of 6</div>
              <div className="mock-subs" style={{ flex: 1 }}>
                {rubricRows.map((r) => <SubRow key={r.label} {...r} />)}
              </div>
              <div className="mock-meter">
                <div className="l"><span className="a">Panel calibration agreement</span><span className="b">94%</span></div>
                <div className="track"><i></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURE 02 ====== */}
      <section className="section">
        <div className="wrap">
          <div className="svc-row flip">
            <div className="svc-text reveal">
              <span className="kicker">Feature 02</span>
              <h3>Decision-ready <span className="it">reporting</span></h3>
              <p>Shareable candidate reports designed to be read in a leadership meeting — not skimmed across a deck. Clean visuals, the right amount of context, no noise.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>Executive summary</b> — one page, one decision.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>Comparative views</b> — across candidates, cohorts, and time.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>Export anywhere</b> — PDF, your ATS, your inbox.</span></div>
              </div>
            </div>

            <div className="mock reveal d1">
              <MockTopBar left="report · candidate #418" right="14 May 2026" />
              <div className="mock-h">Aaliyah <span className="it">Hassan</span></div>
              <div className="mock-sub">Senior Engineer · Sprint 24 · Panel 03</div>
              <div className="mock-score">
                <div className="v">9.1<span className="small">/10</span></div>
                <div className="meta">
                  <span className="mock-pill">Strong hire</span>
                  <span className="mock-pill alt">+1.4 vs cohort avg</span>
                </div>
              </div>
              <div className="mock-subs" style={{ flex: 1 }}>
                {reportRows.map((r) => <SubRow key={r.label} {...r} />)}
              </div>
              <div className="mock-meter" style={{ paddingTop: 10 }}>
                <div className="l"><span className="a">Decision · panel consensus</span><span className="b">6 / 6</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURE 03 ====== */}
      <section className="section">
        <div className="wrap">
          <div className="svc-row">
            <div className="svc-text reveal">
              <span className="kicker">Feature 03</span>
              <h3>Workflow <span className="it">embeds</span></h3>
              <p>VoxxHire fits inside whatever you already run — ATS, CRM, partner portal, university admission flow. White-label where you need it, API-first where you don&rsquo;t.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>White-label deployments</b> — your brand, our engine.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>API &amp; webhooks</b> — connect to ATS, CRM, anything with an endpoint.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>SSO &amp; roles</b> — enterprise auth, granular permissions, audit logs.</span></div>
              </div>
            </div>

            <div className="mock reveal d1">
              <MockTopBar left="integrations · live network" right="7 active" />
              <div className="mock-h">Connected <span className="it">systems</span></div>
              <div className="mock-sub">VoxxHire syncs with your existing stack</div>
              <div className="mock-net">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <defs>
                    <radialGradient id="centerGlow">
                      <stop offset="0%" stopColor="#92a988" stopOpacity=".5" />
                      <stop offset="100%" stopColor="#516b58" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="lineG" x1="0" x2="1">
                      <stop offset="0%" stopColor="#516b58" stopOpacity=".7" />
                      <stop offset="100%" stopColor="#92a988" stopOpacity=".2" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#lineG)" strokeWidth="1" fill="none">
                    <line x1="200" y1="140" x2="80" y2="60" />
                    <line x1="200" y1="140" x2="200" y2="40" />
                    <line x1="200" y1="140" x2="320" y2="60" />
                    <line x1="200" y1="140" x2="50" y2="140" />
                    <line x1="200" y1="140" x2="350" y2="140" />
                    <line x1="200" y1="140" x2="80" y2="220" />
                    <line x1="200" y1="140" x2="320" y2="220" />
                  </g>
                  <circle cx="200" cy="140" r="60" fill="url(#centerGlow)" />
                  <circle cx="200" cy="140" r="34" fill="#1c1612" stroke="#92a988" strokeWidth="1.5" />
                  <text x="200" y="138" textAnchor="middle" fontFamily="Fraunces" fontSize="14" fontWeight="340" fontStyle="italic" fill="#f3ecdd">Voxx</text>
                  <text x="200" y="152" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="0.2em" fill="#92a988">CORE</text>
                  {[
                    { cx: 80, cy: 60, label: "ATS", sub: "workday" },
                    { cx: 200, cy: 40, label: "SSO", sub: "okta" },
                    { cx: 320, cy: 60, label: "CRM", sub: "hubspot" },
                    { cx: 50, cy: 140, label: "SLACK", sub: "notif" },
                    { cx: 350, cy: 140, label: "API", sub: "webhooks" },
                    { cx: 80, cy: 220, label: "MAIL", sub: "SMTP" },
                    { cx: 320, cy: 220, label: "CAL", sub: "google" }
                  ].map((n) => (
                    <g key={n.label}>
                      <circle cx={n.cx} cy={n.cy} r="20" fill="#1c1612" stroke="rgba(250,245,233,.3)" strokeWidth="1" />
                      <text x={n.cx} y={n.cy - 2} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="7.5" fontWeight="500" fill="#f3ecdd" letterSpacing="0.05em">{n.label}</text>
                      <text x={n.cx} y={n.cy + 8} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(250,245,233,.5)">{n.sub}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mock-net-legend">
                <span>API</span><span>SSO</span><span>White-label</span><span>Webhooks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURE 04 ====== */}
      <section className="section">
        <div className="wrap">
          <div className="svc-row flip">
            <div className="svc-text reveal">
              <span className="kicker">Feature 04</span>
              <h3>Cohorts <span className="it">at scale</span></h3>
              <p>Hiring sprints, partner placements, university admissions — VoxxHire handles thousands of candidates without losing the texture you&rsquo;d get with a hundred.</p>
              <div className="svc-list">
                <div className="item"><span className="n">01</span><span className="t"><b>Cohort management</b> — batch invites, batch reviews, batch decisions.</span></div>
                <div className="item"><span className="n">02</span><span className="t"><b>Roll-ups</b> — performance trends by role, region, season, partner.</span></div>
                <div className="item"><span className="n">03</span><span className="t"><b>Drift alerts</b> — know when panels disagree before it becomes a problem.</span></div>
              </div>
            </div>

            <div className="mock reveal d1">
              <MockTopBar left="cohorts · sprint 24" right="142 candidates" />
              <div className="mock-h">All <span className="it">cohorts</span> · live</div>
              <div className="mock-sub">Across regions · across roles · since 2024</div>
              <div className="mock-chips">
                <span className="mock-chip active">All cohorts</span>
                <span className="mock-chip">Top 20%</span>
                <span className="mock-chip">Pending</span>
                <span className="mock-chip">Region · UAE</span>
              </div>
              <div className="mock-rows" style={{ flex: 1 }}>
                {cohortRows.map((r) => <MockRow key={r.name} row={r} />)}
              </div>
              <div className="mock-spark">
                <div className="l">Activity · last 14 days</div>
                <div className="bars">
                  {sparkHeights.map((h, i) => (
                    <span key={i} style={{ height: `${h}%`, animationDelay: `${0.05 + i * 0.05}s` }}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NUMBERS ====== */}
      <section className="numbers">
        <div className="wrap">
          <div className="head reveal">
            <h2>The platform<br /><span className="it">in numbers.</span></h2>
            <span className="meta">Selected metrics · 2025–2026</span>
          </div>
          <div className="numbers-grid">
            <div className="num reveal d1"><span className="v">94<span className="acc">%</span></span><span className="l">Panel calibration agreement</span></div>
            <div className="num reveal d2"><span className="v">12<span className="acc">m</span></span><span className="l">Median candidate review</span></div>
            <div className="num reveal d3"><span className="v">3<span className="acc">×</span></span><span className="l">Faster hiring decisions</span></div>
            <div className="num reveal d4"><span className="v">8.4k<span className="acc">+</span></span><span className="l">Assessments processed</span></div>
          </div>
        </div>
      </section>

      {/* ====== PARTNERS ====== */}
      <section className="partners">
        <div className="wrap">
          <div className="partners-head">
            <div>
              <span className="section-meta">04 / Collaborations</span>
              <h2 className="reveal" style={{ marginTop: 14 }}>Recent <span className="it">partners.</span></h2>
            </div>
            <span className="meta">A small list, chosen carefully · 2026</span>
          </div>

          <div className="partner-logos">
            <div className="partner-logo reveal d1">
              <div className="mark">TWE<span className="plus">+</span></div>
              <div className="submark">Innovation Partner</div>
              <div className="role">Strategic Collaboration · 2026</div>
            </div>
            <div className="partner-logo reveal d2">
              <div className="badge-shield">
                <div className="mark" style={{ fontSize: 48, lineHeight: 1 }}>IIT</div>
              </div>
              <div className="submark" style={{ marginTop: 10 }}>Abu Dhabi</div>
              <div className="role">Client · 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <span className="kicker" style={{ color: "var(--accent-2)" }}>Bring VoxxHire to your team</span>
            <h2 className="reveal">See it in <span className="it">motion.</span></h2>
            <p className="reveal d2">
              A short walkthrough tailored to your use-case — B2B (hiring teams), B2C (individuals), or B2B2C (universities). We&rsquo;ll show the platform working against a brief that looks like yours.
            </p>
            <div className="cta-buttons reveal d3">
              <Link href="/contact" className="cta-btn">Request a demo <span className="arrow">→</span></Link>
              <Link href="/services" className="cta-ghost">Our services</Link>
            </div>
          </div>
        </div>
        <div className="big-name" aria-hidden="true">Voxx<span className="it">Hire</span></div>
      </section>

      <SiteFooter />
    </>
  );
}
