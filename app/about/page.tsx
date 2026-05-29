import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why SM Stratagem was founded and how the company approaches strategy, software, and delivery."
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>We build with discipline, not decoration.</h1>
          <p>
            SM Stratagem exists to help teams make clearer decisions and ship
            better systems with less noise in the process.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <p className="kicker">Why we started</p>
            <h3>A stronger standard for how strategic work gets delivered.</h3>
            <p>
              Too much digital work looks polished on the surface but collapses
              under real-world execution. We wanted to create a partner that
              could hold both strategy and delivery at a higher standard.
            </p>
            <p>
              The business was founded to reduce ambiguity and help leaders make
              stronger decisions before the build begins.
            </p>
          </div>
          <div className="card">
            <p className="kicker">Principles</p>
            <h3>Clarity, accountability, and calm execution.</h3>
            <p>
              Those three principles shape the experience across the website
              and the way the business is presented.
            </p>
            <ul className="list-clean">
              <li>Say the important thing plainly.</li>
              <li>Keep decisions visible.</li>
              <li>Make the work feel easier to trust.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Operating standards"
            title="The bar is defined by how the work feels and what it delivers."
            description="We want the client experience to feel clear, structured, and calm from the first touchpoint through delivery."
          />
          <div className="grid grid-3">
            <div className="card">
              <h3>Strategic</h3>
              <p>
                We frame the problem before we rush into solutions, so the
                project starts with a clear destination.
              </p>
            </div>
            <div className="card">
              <h3>Practical</h3>
              <p>
                Recommendations stay grounded in real delivery constraints,
                budgets, and team capacity.
              </p>
            </div>
            <div className="card">
              <h3>Reliable</h3>
              <p>
                The process is designed to be dependable, transparent, and easy
                to follow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta panel">
          <div>
            <span className="eyebrow">Work with us</span>
            <h2>Talk to us about the next decision, not just the next build.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
