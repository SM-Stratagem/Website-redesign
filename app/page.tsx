import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

const candidates = [
  { i: "AH", name: "Aaliyah Hassan", role: "Senior Engineer", w: 91, s: "9.1" },
  { i: "SR", name: "Sofía Reyes", role: "Product Lead", w: 88, s: "8.8" },
  { i: "MI", name: "Mohammed Ibrahim", role: "Data Analyst", w: 84, s: "8.4" },
  { i: "KO", name: "Kwame Owusu", role: "Designer", w: 79, s: "7.9" },
  { i: "LT", name: "Lina Tanaka", role: "Operations", w: 72, s: "7.2" }
];

const stages = [
  { n: "i", phase: "Phase 01", t: "Discover", p: "A focused intake. Stakeholder interviews, current-state audit, and a written brief everyone can sign off on before a line of code is written." },
  { n: "ii", phase: "Phase 02", t: "Map", p: "Translate the brief into architecture: information, data, identity. We design the spine before any interface or query." },
  { n: "iii", phase: "Phase 03", t: "Build", p: "Sprint cycles with shippable increments. Weekly demos. You feel progress instead of waiting for a reveal at the end of the engagement." },
  { n: "iv", phase: "Phase 04", t: "Scale", p: "Hand-off with documentation, telemetry, and a 60-day stabilization window. The work keeps working after we step away." }
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* ====== HERO ====== */}
      <section className="hero video-hero">
        <VideoHeroBackground
          uid="home"
          src="https://videos.pexels.com/video-files/2034115/2034115-hd_1920_1080_30fps.mp4"
          poster="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=40&auto=format&fit=crop&blur=20"
        />

        <div className="wrap">
          <div className="hero-meta reveal in">
            <span className="eyebrow">
              <span className="status-dot"></span>Accepting new partners · Q3 2026
            </span>
            <span className="eyebrow">Dubai Internet City · in5 Tech</span>
          </div>

          <div className="hero-grid">
            <div>
              <h1 className="reveal in">
                We build <span className="em">VoxxHire</span><br />
                and the software that<br />
                <span className="underline">helps teams hire</span><br />
                and operate better.
              </h1>

              <p className="hero-lede reveal d1 in">
                A digital product studio based in Dubai. Our flagship product,
                VoxxHire, is a B2B, B2C, and B2B2C assessment platform.
                Alongside it we design custom websites and build bespoke
                software for enterprises, SMEs, and universities.
              </p>

              <div className="hero-ctas reveal d2 in">
                <Link href="/voxxhire" className="cta-btn">
                  Explore VoxxHire <span className="arrow">→</span>
                </Link>
                <a
                  href="https://www.voxxhire.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                >
                  voxxhire.com ↗
                </a>
              </div>
            </div>

            <div className="hero-visual reveal d3 in">
              <span className="hv-corner tl"></span>
              <span className="hv-corner tr"></span>
              <span className="hv-corner bl"></span>
              <span className="hv-corner br"></span>
              <span className="hv-label">SM_STRATAGEM / studio</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-img"
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=85&auto=format&fit=crop"
                alt="Dubai skyline at dusk"
                loading="eager"
              />
              <div className="hv-caption">
                <div className="h">Built in Dubai, partnered across the region.</div>
                <div className="s">In5 Tech · Internet City · 25.0772° N</div>
              </div>
            </div>
          </div>

          <div className="hero-stats reveal d3 in">
            <div className="hero-stat"><span className="n">01</span><span className="l">Flagship · VoxxHire</span></div>
            <div className="hero-stat"><span className="n">02</span><span className="l">Service lines</span></div>
            <div className="hero-stat"><span className="n">04<span className="acc">+</span></span><span className="l">Studio products</span></div>
            <div className="hero-stat"><span className="n">DXB</span><span className="l">UAE headquartered</span></div>
          </div>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {["VoxxHire", "Custom Software", "Custom Websites", "Studio Products", "Built in Dubai", "VoxxHire", "Custom Software", "Custom Websites", "Studio Products", "Built in Dubai"].map((s, i) => (
            <span key={i} className="marquee-item">{s}</span>
          ))}
        </div>
      </div>

      {/* ====== FLAGSHIP · VOXXHIRE ====== */}
      <section className="flagship" id="flagship">
        <div className="wrap">
          <div className="flagship-inner">
            <div className="flagship-text reveal">
              <span className="badge">Our flagship product</span>
              <h2>
                <span className="it">VoxxHire.</span><br />
                Hiring decisions,<br />
                with structure.
              </h2>
              <p className="flagship-lede">
                VoxxHire is our B2B, B2C, and B2B2C assessment platform — built
                to help hiring teams replace gut-feel interviews with
                consistent, defensible decisions. Already in use by partners
                across the UAE and the region.
              </p>

              <div className="flagship-features">
                <div className="flag-feat">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/>
                      <path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/>
                    </svg>
                  </span>
                  <div>
                    <h5>Structured assessment</h5>
                    <p>Configurable rubrics, calibration, and scoring tuned to your role and your team.</p>
                  </div>
                </div>
                <div className="flag-feat">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-6"/>
                    </svg>
                  </span>
                  <div>
                    <h5>Decision-ready reporting</h5>
                    <p>Clean, shareable candidate reports your stakeholders can read in a meeting, not a deep-dive.</p>
                  </div>
                </div>
                <div className="flag-feat">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    </svg>
                  </span>
                  <div>
                    <h5>Three-sided platform</h5>
                    <p>Built for B2B (hiring teams), B2C (individuals practicing), and B2B2C (universities, ed-tech).</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/voxxhire" className="cta-btn">
                  Read the VoxxHire story <span className="arrow">→</span>
                </Link>
                <a
                  href="https://www.voxxhire.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                >
                  voxxhire.com ↗
                </a>
              </div>
            </div>

            <div className="flagship-visual reveal d2">
              <div className="flagship-mockup">
                <div className="top">
                  <div className="dots"><i></i><i></i><i></i></div>
                  <div className="url">voxxhire.com / panel</div>
                  <div className="pill">Cohort · Sprint 24</div>
                </div>
                <div className="fm-grid">
                  <div className="fm-panel">
                    <h6>Top candidates · this cohort</h6>
                    {candidates.map((c) => (
                      <div className="fm-cand" key={c.name}>
                        <div className="av">{c.i}</div>
                        <div className="info"><div className="n">{c.name}</div><div className="r">{c.role}</div></div>
                        <div className="bar" style={{ ["--w" as string]: `${c.w}%` } as CSSProperties}></div>
                        <div className="score">{c.s}</div>
                      </div>
                    ))}
                  </div>
                  <div className="fm-panel">
                    <h6>Cohort summary</h6>
                    <div className="fm-summary">
                      <div className="fm-stat"><div className="v">142</div><div className="l">Candidates</div></div>
                      <div className="fm-stat"><div className="v">12<span className="acc">m</span></div><div className="l">Median assess time</div></div>
                      <div className="fm-stat"><div className="v">94<span className="acc">%</span></div><div className="l">Calibration agreement</div></div>
                      <div className="fm-stat"><div className="v">+18<span className="acc">%</span></div><div className="l">Hiring confidence</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="section-meta">01 / Services</span>
            <h2 className="reveal">
              Beyond VoxxHire,<br />we build <span className="it">to brief.</span>
            </h2>
          </div>

          <div className="lanes">
            <Link href="/services" className="lane reveal d1" style={{ textDecoration: "none" }}>
              <div className="lane-num"><span>S.01 — Custom Websites</span><span className="arrow">↗</span></div>
              <h3>Websites that <span className="it">earn the click.</span></h3>
              <p>From positioning through to launch — we design and build credible, conversion-aware sites for businesses that need to be taken seriously the moment a stakeholder lands on the page.</p>
              <div className="lane-viz">
                <div className="viz-bar">
                  {[20, 35, 50, 65, 80, 75, 90, 100].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }}></span>
                  ))}
                </div>
                <div className="lane-list">
                  <div><span>—</span>Brand &amp; narrative systems</div>
                  <div><span>—</span>Marketing &amp; corporate sites</div>
                  <div><span>—</span>Launch &amp; growth-ready builds</div>
                </div>
              </div>
            </Link>

            <Link href="/services" className="lane reveal d2" style={{ textDecoration: "none" }}>
              <div className="lane-num"><span>S.02 — Custom Software</span><span className="arrow">↗</span></div>
              <h3>Software <span className="it">built to fit</span> your team.</h3>
              <p>Internal tools, client-facing applications, and integrations engineered for the way you actually operate. Strategy-led, delivered in sprints with shippable increments every two weeks.</p>
              <div className="lane-viz">
                <svg viewBox="0 0 280 60" style={{ height: 50 }}>
                  <defs>
                    <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#516b58" />
                      <stop offset="100%" stopColor="#7a9485" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 45 L 30 38 L 60 42 L 90 32 L 120 36 L 150 22 L 180 28 L 210 18 L 240 22 L 280 8" stroke="url(#lg2)" strokeWidth="1.5" fill="none" />
                  <g fill="#7a9485">
                    <circle cx="90" cy="32" r="2.5" />
                    <circle cx="180" cy="28" r="2.5" />
                    <circle cx="280" cy="8" r="2.5" />
                  </g>
                  <g stroke="rgba(27,22,17,.08)">
                    <line x1="0" y1="20" x2="280" y2="20" />
                    <line x1="0" y1="40" x2="280" y2="40" />
                  </g>
                </svg>
                <div className="lane-list">
                  <div><span>—</span>Internal tooling &amp; dashboards</div>
                  <div><span>—</span>Client-facing applications</div>
                  <div><span>—</span>Workflow &amp; data integrations</div>
                </div>
              </div>
            </Link>

            <Link href="/products" className="lane reveal d3" style={{ textDecoration: "none" }}>
              <div className="lane-num"><span>S.03 — Studio Products</span><span className="arrow">↗</span></div>
              <h3>Products we ship<br /><span className="it">on the side.</span></h3>
              <p>A small portfolio of products born from client work — Insights, Websites, VidSights — available to teams that recognize themselves in the problem. Lightweight, useful, opinionated.</p>
              <div className="lane-viz">
                <svg viewBox="0 0 280 60" style={{ height: 50 }}>
                  <g fill="none" stroke="rgba(81,107,88,.55)" strokeWidth="1">
                    <circle cx="40" cy="30" r="10" />
                    <circle cx="100" cy="14" r="6" />
                    <circle cx="100" cy="46" r="6" />
                    <circle cx="160" cy="30" r="10" />
                    <circle cx="220" cy="20" r="6" />
                    <circle cx="220" cy="40" r="6" />
                    <line x1="50" y1="30" x2="94" y2="14" />
                    <line x1="50" y1="30" x2="94" y2="46" />
                    <line x1="106" y1="14" x2="150" y2="30" />
                    <line x1="106" y1="46" x2="150" y2="30" />
                    <line x1="170" y1="30" x2="214" y2="20" />
                    <line x1="170" y1="30" x2="214" y2="40" />
                  </g>
                  <g fill="#516b58">
                    <circle cx="40" cy="30" r="2.5" />
                    <circle cx="160" cy="30" r="2.5" />
                  </g>
                </svg>
                <div className="lane-list">
                  <div><span>—</span>SM Insights · dashboards</div>
                  <div><span>—</span>SM Websites · platform</div>
                  <div><span>—</span>VidSights · video analytics</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="section-meta">02 / Method</span>
            <h2 className="reveal">How we work.<br /><span className="it">Four moves.</span></h2>
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

      {/* ====== MANIFESTO ====== */}
      <section className="manifesto" id="about">
        <div className="wrap">
          <div className="section-head">
            <span className="section-meta">03 / Position</span>
            <h2 className="reveal">A short<br /><span className="it">statement.</span></h2>
          </div>
          <div className="manifesto-grid">
            <div></div>
            <div>
              <blockquote className="reveal">
                <span className="quote-mark">&ldquo;</span>We&rsquo;re a product company first. VoxxHire is what we&rsquo;re known for — but underneath it is a studio that builds <span className="it">carefully</span>, ships on time, and treats every engagement like a long-term <span className="it">partnership.</span>
              </blockquote>
              <div className="manifesto-foot">
                <span className="signature">— The Stratagem team</span>
                <span className="eyebrow">Dubai · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta" id="contact">
        <div className="wrap">
          <div className="cta-inner">
            <span className="kicker" style={{ color: "var(--accent-2)" }}>
              Let&rsquo;s talk about what you&rsquo;re building.
            </span>
            <h2 className="reveal">Start a <span className="it">conversation.</span></h2>
            <p className="reveal d2">
              A 30-minute call to understand what you&rsquo;re working on. We&rsquo;ll listen first, ask the practical questions, and tell you honestly whether we&rsquo;re the right studio for the work.
            </p>
            <div className="cta-buttons reveal d3">
              <Link href="/contact" className="cta-btn">
                Book a consultation <span className="arrow">→</span>
              </Link>
              <Link href="/voxxhire" className="cta-ghost">
                Read about VoxxHire
              </Link>
            </div>
          </div>
        </div>
        <div className="big-name" aria-hidden="true">
          Strata<span className="it">gem</span>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
