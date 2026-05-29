import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { insights } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Editorial thinking from SM Stratagem on AI, software delivery, and strategic execution."
};

export default function InsightsPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container">
          <span className="eyebrow">Insights</span>
          <h1>Editorial thinking, presented cleanly.</h1>
          <p>
            A space for considered writing on AI, software delivery, and the
            decisions behind them.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Editorial"
            title="Thoughtful writing that supports trust instead of chasing clicks."
            description="This space should help visitors understand how SM Stratagem thinks, what it values, and how it approaches delivery."
          />
          <div className="grid grid-2">
            <article className="card insight-feature">
              <p className="kicker">Featured article</p>
              <h3>{insights[0].title}</h3>
              <p>{insights[0].summary}</p>
              <Link href={`/insights/${insights[0].slug}`} className="feature-link">
                Read article
              </Link>
            </article>
            <div className="grid">
              {insights.slice(1).map((item) => (
                <article className="card" key={item.slug}>
                  <p className="kicker">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <Link href={`/insights/${item.slug}`} className="feature-link">
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <div className="card">
            <h3>AI strategy</h3>
            <p>How teams decide where AI is useful and where it is not.</p>
          </div>
          <div className="card">
            <h3>Software delivery</h3>
            <p>Practical lessons on keeping projects moving with less friction.</p>
          </div>
          <div className="card">
            <h3>Brand and trust</h3>
            <p>How presentation affects credibility before a sales call begins.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel panel-soft">
          <div>
            <span className="eyebrow">More to come</span>
            <h2>Thoughtful content that supports trust, not traffic bait.</h2>
          </div>
          <Link href="/contact" className="btn btn-secondary">
            Ask about a project
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
