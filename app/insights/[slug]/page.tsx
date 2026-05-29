import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getInsight, insights } from "@/lib/site-content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const insight = getInsight(params.slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.summary
  };
}

export default function InsightDetailPage({ params }: Props) {
  const insight = getInsight(params.slug);
  if (!insight) notFound();

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container detail-hero">
          <div>
            <span className="eyebrow">{insight.category}</span>
            <h1>{insight.title}</h1>
            <p>{insight.summary}</p>
          </div>
          <div className="card detail-aside">
            <p className="kicker">Perspective</p>
            <p>
              A concise essay designed to support the brand voice rather than
              chase traffic.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <article className="card article-card">
            {insight.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <aside className="card article-aside">
            <p className="kicker">Related</p>
            <Link href="/services" className="feature-link">
              Explore services
            </Link>
            <Link href="/contact" className="feature-link">
              Discuss a project
            </Link>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
