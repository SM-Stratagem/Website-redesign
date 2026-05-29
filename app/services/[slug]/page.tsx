import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getService, services } from "@/lib/site-content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container detail-hero">
          <div>
            <span className="eyebrow">Service</span>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
          <div className="card detail-aside">
            <p className="kicker">Who it is for</p>
            <p>{service.audience}</p>
            <Link href="/contact" className="btn btn-primary">
              Discuss this service
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p className="kicker">What we do</p>
            <h3>Practical support, scoped around the outcome.</h3>
            <ul className="list-clean">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="kicker">Expected outcomes</p>
            <h3>Built to reduce uncertainty and improve execution.</h3>
            <ul className="list-clean">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel panel-soft">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Talk through the scope and decide whether this fits.</h2>
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
