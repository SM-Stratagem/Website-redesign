import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies, getCaseStudy } from "@/lib/site-content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container detail-hero">
          <div>
            <span className="eyebrow">Case Study</span>
            <h1>{study.title}</h1>
            <p>{study.summary}</p>
          </div>
          <div className="card detail-aside">
            <p className="kicker">Client</p>
            <h3>{study.client}</h3>
            <div className="case-metric">{study.metric}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p className="kicker">Challenge</p>
            <p>{study.challenge}</p>
          </div>
          <div className="card">
            <p className="kicker">Approach</p>
            <p>{study.approach}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container panel panel-soft">
          <div className="card" style={{ margin: 28 }}>
            <p className="kicker">Result</p>
            <h3>{study.result}</h3>
            <p>
              The goal was not to create more noise, but to make the work
              easier to understand and execute.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel panel-soft">
          <div>
            <span className="eyebrow">Need a similar outcome?</span>
            <h2>We can shape the work around a clearer result.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Discuss a project
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
