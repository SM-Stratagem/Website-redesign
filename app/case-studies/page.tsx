import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how SM Stratagem presents outcome-led work with restraint and clarity."
};

export default function CaseStudiesPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container">
          <span className="eyebrow">Case Studies</span>
          <h1>Outcome-led work presented with restraint.</h1>
          <p>
            Proof should read clearly. Each case study is framed around the
            problem, the approach, and the result.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Proof"
            title="A compact set of case studies, presented with more signal than decoration."
            description="The format centers on the reason the work mattered, how it was approached, and what changed as a result."
          />
          <div className="grid grid-3">
            {caseStudies.map((item) => (
              <article className="card case-card" key={item.slug}>
                <p className="kicker">{item.client}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="case-metric">{item.metric}</div>
                <Link href={`/case-studies/${item.slug}`} className="feature-link">
                  Read case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p className="kicker">Case study structure</p>
            <h3>Problem, approach, result.</h3>
            <p>
              Each project story should show how the team thought, what changed,
              and why the result mattered.
            </p>
          </div>
          <div className="card">
            <p className="kicker">Evidence to include</p>
            <ul className="list-clean">
              <li>Decision points</li>
              <li>Delivery milestones</li>
              <li>Outcome metrics</li>
              <li>Client quotes</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel">
          <div>
            <span className="eyebrow">Want a similar result?</span>
            <h2>We can shape the scope around the outcome you need.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Start the conversation
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
