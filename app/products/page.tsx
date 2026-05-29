import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

export const metadata: Metadata = {
  title: "Studio Products — VoxxHire + Insights, Websites, VidSights",
  description:
    "A small portfolio of products built from client work — SM Insights, SM Websites, VidSights — alongside our flagship VoxxHire."
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />

      {/* ====== HERO ====== */}
      <section className="page-hero video-hero">
        <VideoHeroBackground
          uid="prod"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=40&auto=format&fit=crop&blur=20"
        />
        <div className="wrap">
          <div className="crumb"><Link href="/">Home</Link> <span>/</span> Products</div>
          <h1 className="reveal in">
            Our flagship, and a few <span className="it">side products.</span>
          </h1>
          <p className="lede reveal d1 in">
            VoxxHire is our main product — and our most consequential build. Alongside it, we ship a small portfolio of side products born from client work: lightweight, opinionated, and shared with teams that recognize themselves in the problem.
          </p>
          <div className="hero-divider-row reveal d2 in">
            <div className="left"><span>● 1 flagship</span><span>3 side products</span></div>
            <div className="center">Studio portfolio</div>
            <div className="right"><span>v.live · 2026</span><span>Dubai · UAE</span></div>
          </div>
        </div>
      </section>

      {/* ====== FLAGSHIP CALLOUT ====== */}
      <section className="section">
        <div className="wrap">
          <div className="flagship-card reveal">
            <div>
              <div className="tagline">Flagship product</div>
              <h2><span className="it">VoxxHire.</span><br />Built for hiring at scale.</h2>
              <p>
                Our main product — a B2B, B2C, and B2B2C assessment platform serving hiring teams, individual job-seekers, and universities. Structured assessment, decision-ready reporting, and embeddable workflows.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/voxxhire" className="cta-btn">
                  Read the VoxxHire story <span className="arrow">→</span>
                </Link>
                <a href="https://www.voxxhire.com/" target="_blank" rel="noopener noreferrer" className="cta-ghost">
                  voxxhire.com ↗
                </a>
              </div>
            </div>
            <div className="svc-visual" style={{ aspectRatio: "4 / 3", background: "var(--deep)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=85&auto=format&fit=crop"
                alt="VoxxHire platform context"
                loading="lazy"
                style={{ opacity: 0.65 }}
              />
              <span className="ov">FLAGSHIP / VOXXHIRE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT 02: SM Insights ====== */}
      <section className="section" id="insights">
        <div className="wrap">
          <div className="product-row reveal">
            <div>
              <div className="pn">Product <span>02</span> · Leadership dashboards</div>
              <h3>SM <span className="it">Insights</span></h3>
              <p>A leadership dashboard that fits on a phone. We translate the metrics that matter into a single quiet view — fewer charts, more decisions. Built for founders, COOs, and operating leaders who want signal, not noise.</p>
              <div className="feats">
                <div>Single-view leadership scorecards</div>
                <div>Custom KPI builder, no engineering needed</div>
                <div>Mobile-first, glanceable interface</div>
              </div>
              <div className="meta"><span>v 4.1 · live</span><Link href="/contact">Request access →</Link></div>
            </div>
            <div className="visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop"
                alt="Leadership dashboard insights"
                loading="lazy"
              />
              <span className="t">PRODUCT_02 / INSIGHTS</span>
              <span className="l">One screen.<br />One decision.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT 03: SM Websites ====== */}
      <section className="section" id="websites">
        <div className="wrap">
          <div className="product-row flip reveal">
            <div className="visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=85&auto=format&fit=crop"
                alt="SM Websites platform"
                loading="lazy"
              />
              <span className="t">PRODUCT_03 / WEBSITES</span>
              <span className="l">A productized<br />website platform.</span>
            </div>
            <div>
              <div className="pn">Product <span>03</span> · Productized websites</div>
              <h3>SM <span className="it">Websites</span></h3>
              <p>A productized site platform for businesses that need a credible web presence without hiring an agency. Strategy, design, and engineering converted into a clear menu of outcomes — priced, scoped, and shipped in defined windows.</p>
              <div className="feats">
                <div>Fixed scope, fixed price, fixed timeline</div>
                <div>Built on modern stacks (Next, Astro, headless CMS)</div>
                <div>Editor experience your marketing team will use</div>
              </div>
              <div className="meta"><span>v 1.8 · live</span><Link href="/contact">Get a quote →</Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PRODUCT 04: VidSights ====== */}
      <section className="section" id="vidsights">
        <div className="wrap">
          <div className="product-row reveal">
            <div>
              <div className="pn">Product <span>04</span> · Video analytics</div>
              <h3>Vid<span className="it">Sights</span></h3>
              <p>Content performance analytics for teams that ship more video than they can watch back. Drop-off, retention, and message-fit across a library — so creative teams can stop guessing what&rsquo;s working and start iterating.</p>
              <div className="feats">
                <div>Retention curves by video, cohort, campaign</div>
                <div>Drop-off markers timed to content</div>
                <div>Library-wide comparative analysis</div>
              </div>
              <div className="meta"><span>v 1.2 · beta</span><Link href="/contact">Join the beta →</Link></div>
            </div>
            <div className="visual">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?w=1200&q=85&auto=format&fit=crop"
                alt="Video content analytics"
                loading="lazy"
              />
              <span className="t">PRODUCT_04 / VIDSIGHTS</span>
              <span className="l">Know what&rsquo;s<br />actually working.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <span className="kicker" style={{ color: "var(--accent-2)" }}>Curious about a product?</span>
            <h2 className="reveal">Talk to <span className="it">us.</span></h2>
            <p className="reveal d2">All four products are in active use. We&rsquo;ll walk you through whichever fits your problem, and tell you honestly when something else would serve you better.</p>
            <div className="cta-buttons reveal d3">
              <Link href="/contact" className="cta-btn">Book a call <span className="arrow">→</span></Link>
              <Link href="/voxxhire" className="cta-ghost">Explore VoxxHire</Link>
            </div>
          </div>
        </div>
        <div className="big-name" aria-hidden="true">Products</div>
      </section>

      <SiteFooter />
    </>
  );
}
