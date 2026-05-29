import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a focused conversation with SM Stratagem about AI strategy, software, or delivery support."
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-hero section">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Start with a focused enquiry.</h1>
          <p>
            If you need AI strategy, custom software, or delivery support, use
            this page to begin the conversation.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <form className="card contact-form">
            <div className="field-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@company.com" />
              </label>
            </div>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Company or project name" />
            </label>
            <label>
              <span>Project type</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>
                  Select a focus area
                </option>
                <option>AI strategy</option>
                <option>Custom software</option>
                <option>Delivery support</option>
                <option>Technical advisory</option>
              </select>
            </label>
            <div className="field-grid">
              <label>
                <span>Timeline</span>
                <input type="text" name="timeline" placeholder="e.g. 4-6 weeks" />
              </label>
              <label>
                <span>Budget range</span>
                <input type="text" name="budget" placeholder="Optional" />
              </label>
            </div>
            <label>
              <span>What do you need?</span>
              <textarea
                name="message"
                rows={6}
                placeholder="A short summary of the project, timeline, and goal"
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send enquiry
            </button>
          </form>
          <div className="card contact-aside">
            <p className="kicker">Direct contact</p>
            <h3>Prefer email?</h3>
            <p>
              <a href="mailto:hello@sm-stratagem.com">
                hello@sm-stratagem.com
              </a>
            </p>
            <p className="muted">
              This layout is intentionally clean so the first step feels simple
              and credible.
            </p>
            <div className="contact-promise">
              <strong>Response expectation</strong>
              <p>We typically reply within one business day.</p>
            </div>
            <ul className="list-clean">
              <li>Clear brief review</li>
              <li>Scope discussion</li>
              <li>Recommended next step</li>
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
