import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoHeroBackground } from "@/components/video-hero";

export const metadata: Metadata = {
  title:
    "About · A Dubai Product Studio Founded by Suhayl Dastager & Mariam Mohammed",
  description:
    "The story behind SM Stratagem — a Dubai-based product studio founded by Suhayl Dastager and Mariam Mohammed. Makers of VoxxHire, located at in5 Tech, Dubai Internet City.",
  keywords: [
    "SM Stratagem about",
    "Suhayl Dastager",
    "Mariam Mohammed",
    "Dubai product studio",
    "in5 Tech",
    "Dubai Internet City",
    "VoxxHire founders",
    "UAE software founders",
    "Dubai SaaS founders",
    "digital studio Dubai",
    "Issue No 1"
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SM Stratagem · Issue №1",
    description:
      "Founded by Suhayl Dastager and Mariam Mohammed. Located at in5 Tech, Dubai Internet City.",
    url: "/about",
    type: "profile"
  }
};

const foundersSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sm-stratagem.com/about#suhayl",
    name: "Suhayl Dastager",
    givenName: "Suhayl",
    familyName: "Dastager",
    jobTitle: "Co-founder",
    worksFor: {
      "@type": "Organization",
      name: "SM Stratagem",
      url: "https://sm-stratagem.com"
    },
    sameAs: ["https://ae.linkedin.com/in/suhayl-dastager"],
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sm-stratagem.com/about#mariam",
    name: "Mariam Mohammed",
    givenName: "Mariam",
    familyName: "Mohammed",
    jobTitle: "Co-founder",
    worksFor: {
      "@type": "Organization",
      name: "SM Stratagem",
      url: "https://sm-stratagem.com"
    },
    sameAs: ["https://www.linkedin.com/in/mariammohammed212/"],
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" }
  }
];

const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sm-stratagem.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://sm-stratagem.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      {foundersSchema.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />
      <SiteHeader />

      {/* ====== SECTION 1 · COVER ====== */}
      <section className="cover video-hero">
        <VideoHeroBackground
          uid="ab-front"
          src="https://videos.pexels.com/video-files/5752729/5752729-hd_1920_1080_30fps.mp4"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=40&auto=format&fit=crop&blur=20"
        />

        <div className="cover-meta">
          <span className="acc">Issue №1</span>
          <span>About</span>
          <span>2026</span>
          <span>Dubai · UAE</span>
        </div>

        <h1 className="cover-title reveal in">About<span className="it">.</span></h1>

        <p className="cover-quote reveal d1 in">
          A studio that started because too many <em>talented people</em> lost rooms they should have won.
        </p>

        <div className="cover-byline reveal d2 in">
          <div><span className="lbl">Story</span><span>The founders</span></div>
          <div><span className="lbl">By</span><span>Suhayl Dastager · Mariam Mohammed</span></div>
          <div><span className="lbl">From</span><span>in5 Tech, Dubai</span></div>
        </div>

        <div className="cover-ornament" aria-hidden="true">✦</div>
      </section>

      {/* ====== SECTION 2 · CHAPTER I · ORIGIN ====== */}
      <section className="chapter">
        <span className="chapter-numeral" aria-hidden="true">I</span>
        <span className="side-note" aria-hidden="true">CHAPTER I · ORIGIN</span>

        <div className="wrap chapter-inner">
          <div></div>
          <div className="chapter-content">
            <div className="chapter-label">Chapter One · The reason</div>
            <h2>Why this exists.</h2>

            <p className="dropcap">
              We started this because we kept watching the same thing happen. Talented people — friends, classmates, colleagues — sitting in interviews they should have won, losing them anyway. Not because they couldn&rsquo;t do the work. Because they&rsquo;d never been taught how to talk about it.
            </p>

            <div className="pull-quote">
              The thing they could already do — they just needed to know <em>how to say it.</em>
            </div>

            <p>
              So we built <strong>VoxxHire</strong>. The platform we wished we could have handed them. A place to practice. A way to be assessed against something real. A way to learn the language of an interview before the room you can&rsquo;t afford to lose.
            </p>

            <p>
              SM Stratagem is the studio that grew up around that one idea. The custom websites, the bespoke software, the side products — all of it traces back to the same instinct: build the thing that respects the person on the other side of it.
            </p>
          </div>
        </div>
      </section>

      {/* ====== SECTION 3 · CHAPTER II · SUHAYL ====== */}
      <section className="chapter chapter-founder">
        <span className="chapter-numeral" aria-hidden="true">II</span>
        <span className="side-note" aria-hidden="true">CHAPTER II · CO-FOUNDER</span>

        <div className="wrap">
          <div className="founder-spread">
            <div className="founder-portrait">
              <div className="portrait-frame">
                <div className="portrait-corners"><span className="c tl"></span><span className="c tr"></span><span className="c bl"></span><span className="c br"></span></div>
                <div className="portrait-numeral">№ II</div>
                <div className="portrait-initials">SD</div>
                <div className="portrait-divider"></div>
                <div className="portrait-name">Suhayl<br />Dastager</div>
              </div>
              <div className="portrait-meta">
                <span className="role">Co-founder · Product</span>
                <a href="https://ae.linkedin.com/in/suhayl-dastager" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <div className="founder-text">
              <div className="chapter-label">Chapter Two · Suhayl</div>
              <h2>The <em>builder.</em></h2>

              <p className="big-quote">
                &ldquo;I kept seeing strong people lose interviews they should have won. The gap deserved a <em>tool</em> — not another pep talk.&rdquo;
              </p>

              <p>Builds the product side of VoxxHire. Believes the warmest software is the kind that respects how much your time is worth — and that the best way to help someone communicate their value is to give them somewhere safe to practice it.</p>

              <p>Before SM Stratagem he was the one his friends called the night before an interview. Now he builds the thing they would have asked for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 4 · CHAPTER III · MARIAM ====== */}
      <section className="chapter chapter-founder">
        <span className="chapter-numeral" aria-hidden="true">III</span>
        <span className="side-note" aria-hidden="true">CHAPTER III · CO-FOUNDER</span>

        <div className="wrap">
          <div className="founder-spread mirror">
            <div className="founder-portrait">
              <div className="portrait-frame alt">
                <div className="portrait-corners"><span className="c tl"></span><span className="c tr"></span><span className="c bl"></span><span className="c br"></span></div>
                <div className="portrait-numeral">№ III</div>
                <div className="portrait-initials">MM</div>
                <div className="portrait-divider"></div>
                <div className="portrait-name">Mariam<br />Mohammed</div>
              </div>
              <div className="portrait-meta">
                <span className="role">Co-founder · Design &amp; strategy</span>
                <a href="https://www.linkedin.com/in/mariammohammed212/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <div className="founder-text">
              <div className="chapter-label">Chapter Three · Mariam</div>
              <h2>The <em>translator.</em></h2>

              <p className="big-quote">
                &ldquo;The interface is the part that decides whether someone is heard. We design it like it <em>matters</em> — because it does.&rdquo;
              </p>

              <p>Shapes how VoxxHire — and everything else the studio makes — meets the people who use it. From the candidate hitting &ldquo;Start&rdquo; to the executive opening the report, every screen passes her bar before it ships.</p>

              <p>If Suhayl builds the engine, Mariam decides whether the people on the other side can actually drive it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 5 · CHAPTER IV · THE PRODUCT ====== */}
      <section className="chapter chapter-product">
        <span className="chapter-numeral" aria-hidden="true">IV</span>
        <span className="side-note" aria-hidden="true">CHAPTER IV · THE PRODUCT</span>

        <div className="wrap chapter-inner">
          <div></div>
          <div className="chapter-content">
            <div className="chapter-label">Chapter Four · The product</div>
            <h2>VoxxHire — the <em>reason</em><br />we exist.</h2>

            <p>Today VoxxHire is in active use by hiring teams, by individual job-seekers, and by universities — including <strong>IIT Abu Dhabi</strong>. Recent strategic partners include <strong>TWE+</strong>. But underneath all of it is still the same idea we started with: people with talent deserve to know what good looks like.</p>

            <div className="chapter-stats">
              <div><span className="v"><em>3</em></span><span className="l">Modes · B2B · B2C · B2B2C</span></div>
              <div><span className="v">94<em>%</em></span><span className="l">Panel calibration agreement</span></div>
              <div><span className="v">8.4k<em>+</em></span><span className="l">Assessments processed</span></div>
            </div>

            <div className="product-actions">
              <Link href="/voxxhire" className="cta-btn">Read the VoxxHire story <span className="arrow">→</span></Link>
              <a href="https://www.voxxhire.com/" target="_blank" rel="noopener noreferrer" className="cta-ghost">voxxhire.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 6 · CHAPTER V · THE STUDIO ====== */}
      <section className="chapter chapter-studio">
        <span className="chapter-numeral" aria-hidden="true">V</span>

        <div className="wrap">
          <div className="studio-spread">
            <div>
              <div className="chapter-label">Chapter Five · The studio</div>
              <h2>Built in <em>Dubai.</em></h2>

              <p>You&rsquo;ll find us at <strong>in5 Tech</strong> — Dubai Internet City&rsquo;s centre for software and digital product teams. Close enough to coffee, far enough from the noise. The studio is small on purpose: we&rsquo;d rather take a few clients seriously than a lot of clients lightly.</p>

              <div className="studio-info">
                <div className="row"><span>Address</span><span>in5 Tech · Dubai Internet City · UAE</span></div>
                <div className="row"><span>Coordinates</span><span>25.0772° N · 55.1410° E</span></div>
                <div className="row"><span>Hours</span><span>Sun – Thu · 09:00 – 18:00 GST</span></div>
                <div className="row"><span>Email</span><span><a href="mailto:contact@sm-stratagem.com">contact@sm-stratagem.com</a></span></div>
              </div>
            </div>

            <div className="studio-map">
              <span className="label">DXB · LOCATION</span>
              <svg viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden="true">
                <g stroke="rgba(122,148,133,.12)" strokeWidth="1">
                  <line x1="0" y1="60" x2="400" y2="60" />
                  <line x1="0" y1="120" x2="400" y2="120" />
                  <line x1="0" y1="180" x2="400" y2="180" />
                  <line x1="0" y1="240" x2="400" y2="240" />
                  <line x1="80" y1="0" x2="80" y2="320" />
                  <line x1="160" y1="0" x2="160" y2="320" />
                  <line x1="240" y1="0" x2="240" y2="320" />
                  <line x1="320" y1="0" x2="320" y2="320" />
                </g>
                <g stroke="rgba(122,148,133,.28)" strokeWidth="1.2" fill="none">
                  <path d="M0 220 Q 100 200 200 160 T 400 90" />
                  <path d="M60 0 L 60 180 L 200 180 L 200 320" />
                  <path d="M260 0 L 260 100 L 400 100" />
                  <path d="M0 60 L 140 60 L 140 220 L 280 220 L 280 320" />
                </g>
                <g stroke="rgba(122,148,133,.35)" fill="none" strokeWidth="1">
                  <circle cx="200" cy="160" r="24" />
                  <circle cx="200" cy="160" r="56" />
                  <circle cx="200" cy="160" r="100" />
                </g>
                <g stroke="rgba(122,148,133,.4)" strokeWidth="1" strokeDasharray="3,4">
                  <line x1="200" y1="0" x2="200" y2="320" />
                  <line x1="0" y1="160" x2="400" y2="160" />
                </g>
              </svg>
              <div className="pin"></div>
              <div className="scale">200m</div>
              <div className="coords">25.0772° N<br />55.1410° E</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 7 · CHAPTER VI · PRINCIPLES ====== */}
      <section className="chapter">
        <span className="chapter-numeral" aria-hidden="true">VI</span>
        <span className="side-note" aria-hidden="true">CHAPTER VI · HOW WE WORK</span>

        <div className="wrap chapter-inner">
          <div></div>
          <div className="chapter-content" style={{ maxWidth: "none" }}>
            <div className="chapter-label">Chapter Six · The rules</div>
            <h2>Three things<br />we <em>don&rsquo;t break.</em></h2>

            <div className="principles">
              <div className="principle reveal d1">
                <div className="num">i.</div>
                <h3>Strategy <em>before</em> screens.</h3>
                <p>We don&rsquo;t open Figma on day one. The brief gets written and signed off — so what we build is what was agreed, not what we discovered we wanted halfway through.</p>
              </div>
              <div className="principle reveal d2">
                <div className="num">ii.</div>
                <h3>Delivery <em>over</em> theatre.</h3>
                <p>Weekly demos with shippable increments. You feel progress as it forms — no grand reveal at the end of a long contract, no surprises in either direction.</p>
              </div>
              <div className="principle reveal d3">
                <div className="num">iii.</div>
                <h3>Partnership <em>over</em> projects.</h3>
                <p>Most engagements become something longer. We take a small number of clients seriously rather than a large number lightly — and we hand off work that someone else can actually maintain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 8 · BACK COVER / CLOSING ====== */}
      <section className="cover closing video-hero">
        <VideoHeroBackground
          uid="ab-back"
          variant="back"
          src="https://videos.pexels.com/video-files/1851190/1851190-hd_1920_1080_25fps.mp4"
          poster="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=1920&q=40&auto=format&fit=crop&blur=20"
        />

        <div className="closing-meta">
          <span className="acc">End of Issue №1</span>
          <span>Come say hello</span>
          <span>2026</span>
        </div>

        <p className="closing-quote">
          The kettle&rsquo;s <em>on.</em>
        </p>

        <div className="closing-info">
          <Link href="/contact" className="acc">Book a call ↗</Link>
          <a href="mailto:contact@sm-stratagem.com">contact@sm-stratagem.com</a>
          <a href="https://www.voxxhire.com/" target="_blank" rel="noopener noreferrer">voxxhire.com ↗</a>
          <a href="https://ae.linkedin.com/in/suhayl-dastager" target="_blank" rel="noopener noreferrer">Suhayl ↗</a>
          <a href="https://www.linkedin.com/in/mariammohammed212/" target="_blank" rel="noopener noreferrer">Mariam ↗</a>
        </div>

        <div className="closing-end">— Fin —</div>
      </section>

      <SiteFooter />
    </>
  );
}
