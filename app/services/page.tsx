import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SM Stratagem's strategy, software, and delivery support services."
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Focused offers for teams that value precision.</h1>
          <p>
            The service structure is intentionally simple: strategy, software,
            and delivery support.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Offer design"
            title="Each service is framed around a problem worth solving."
            description="The offerings are deliberately narrow so clients can quickly see what is relevant, what is included, and what outcome is expected."
          />
          <div className="grid grid-2">
            {services.map((item) => (
              <div className="card service-card" key={item.slug}>
                <p className="kicker">Service</p>
                <h3>{item.title}</h3>
                <p>{item.intro}</p>
                <ul className="list-clean">
                  <li>Clear scope and boundaries</li>
                  <li>Measured delivery milestones</li>
                  <li>Outcome-oriented support</li>
                </ul>
                <Link href={`/services/${item.slug}`} className="feature-link">
                  View service details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p className="kicker">Engagement model</p>
            <h3>Simple, structured, and low-friction.</h3>
            <div className="table">
              <div className="table-row">
                <strong>1</strong>
                <p>Discovery to align on goals, constraints, and expected outcomes.</p>
              </div>
              <div className="table-row">
                <strong>2</strong>
                <p>Scope and recommendation so the work begins with clarity.</p>
              </div>
              <div className="table-row">
                <strong>3</strong>
                <p>Delivery with visible checkpoints, review, and direct communication.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p className="kicker">Best fit</p>
            <h3>Teams that want strategic quality without unnecessary theatre.</h3>
            <p>
              The work is most useful when a team needs a partner who can shape
              the right path and then help deliver it with restraint.
            </p>
            <ul className="list-clean">
              <li>Founders preparing a serious build</li>
              <li>CTOs aligning product and delivery</li>
              <li>Enterprise teams simplifying complex initiatives</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel panel-soft">
          <div>
            <span className="eyebrow">Need scope?</span>
            <h2>We can shape the right engagement around the problem.</h2>
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
