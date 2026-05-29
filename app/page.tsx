import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { services, caseStudies } from "@/lib/site-content";

const proof = [
  {
    title: "Sharper product decisions",
    text: "We help teams focus on the right work and define a clearer build path."
  },
  {
    title: "Lower delivery friction",
    text: "Structure, process, and technical judgment reduce rework and churn."
  },
  {
    title: "Clearer client trust",
    text: "The site reads like a serious firm, not a template assembled overnight."
  }
];

const steps = [
  {
    number: "01",
    title: "Clarify",
    text: "We define the problem, the outcome, and the constraints before anything is built."
  },
  {
    number: "02",
    title: "Design",
    text: "The engagement, architecture, and user experience are shaped around the intended result."
  },
  {
    number: "03",
    title: "Deliver",
    text: "Execution stays visible, decisive, and structured from kickoff to handoff."
  }
];

const outcomes = [
  {
    title: "Decision framework",
    value: "Clearer",
    text: "Useful for leadership teams deciding where to invest."
  },
  {
    title: "Delivery process",
    value: "Calmer",
    text: "A better rhythm for teams that need accountability."
  },
  {
    title: "Brand experience",
    value: "Stronger",
    text: "The company presents like a premium, trustworthy partner."
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI · Consulting · Software</span>
            <h1>Building intelligent systems with strategic discipline.</h1>
            <p>
              SM Stratagem helps founders, CTOs, and enterprise leaders plan,
              build, and maintain AI systems and custom software from roadmap to
              launch.
            </p>
            <div className="hero-note panel">
              <strong>Built for teams that want clarity before scale.</strong>
              <span>
                The experience is intentionally calm, structured, and credible.
              </span>
            </div>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore services
              </Link>
            </div>
          </div>

          <aside className="hero-panel panel">
            <div className="hero-panel-top">
              <span className="eyebrow">Approach</span>
              <p>
                Strategic clarity first, then careful execution. The result is
                work that feels calm, credible, and durable.
              </p>
            </div>
            <div className="hero-metrics">
              <div className="stat">
                <strong>4</strong>
                <span>Clear narrative</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>Core workstreams</span>
              </div>
              <div className="stat">
                <strong>0</strong>
                <span>Gimmicks or noise</span>
              </div>
            </div>
            <div className="hero-shape" aria-hidden="true">
              <svg viewBox="0 0 480 360" role="presentation">
                <rect x="24" y="24" width="432" height="312" rx="28" />
                <path d="M94 180h292" />
                <path d="M240 78v204" />
                <circle cx="240" cy="180" r="24" />
                <circle cx="240" cy="180" r="58" />
              </svg>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Clear offer structure, built for serious buyers."
            description="The site is organized around high-value decisions: what the company does, why it exists, how it works, and why it is worth trusting."
          />
          <div className="grid grid-2 feature-grid">
            {services.map((item) => (
              <article className="card feature-card" key={item.title}>
                <p className="kicker">Service</p>
                <h3>{item.title}</h3>
                <p>{item.intro}</p>
                <Link href={`/services/${item.slug}`} className="feature-link">
                  Explore how it works
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split panel panel-soft">
          <div className="split-copy">
            <span className="eyebrow">Why we started</span>
            <h2>Built to bring more clarity, discipline, and accountability to delivery.</h2>
            <p>
              The company exists because too many teams are forced to choose
              between strategic thinking and reliable execution. SM Stratagem
              was created to close that gap.
            </p>
            <p>
              The goal from day one has been simple: help clients make better
              decisions, then turn those decisions into systems that work in
              the real world.
            </p>
            <div className="quote">
              <p>
                “The company should feel like a steady partner, not another
                layer of noise.”
              </p>
            </div>
          </div>
          <div className="split-aside card stack">
            <p className="kicker">Founding principle</p>
            <h3>Calm work is stronger work.</h3>
            <p>
              Good work should feel transparent, deliberate, and easy to trust.
              Every part of the experience should reinforce that standard.
            </p>
            <ul className="list-clean">
              <li>Make the next decision obvious.</li>
              <li>Keep the process visible.</li>
              <li>Protect quality at every step.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose SM Stratagem"
            title="A clean interface for a more capable business."
            description="The site presents the business as a thoughtful partner rather than a noisy agency. That makes the experience feel premium without becoming overdesigned."
          />
          <div className="grid grid-3">
            {proof.map((item) => (
              <article className="card proof-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="How we work"
            title="A structured process that keeps teams aligned."
            description="The workflow is intentionally simple: clarify, design, deliver. That makes it easier to maintain momentum without losing quality."
          />
          <div className="grid grid-3">
            {steps.map((step) => (
              <article className="card step-card" key={step.number}>
                <p className="step-number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Case study preview"
            title="Selected proof, presented in a way that is easy to trust."
            description="A few concise examples give visitors a better sense of the kind of decisions and delivery support SM Stratagem provides."
          />
          <div className="grid grid-3">
            {caseStudies.map((item) => (
              <article className="card case-card" key={item.slug}>
                <p className="kicker">{item.client}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link href={`/case-studies/${item.slug}`} className="feature-link">
                  Read case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container panel panel-soft outcomes-panel">
          <div className="section-heading">
            <span className="eyebrow">Selected outcomes</span>
            <h2>Better decisions, calmer delivery, and a stronger presentation.</h2>
            <p>
              The work should leave teams with more confidence than they had
              before. That is the standard the site is built to convey.
            </p>
          </div>
          <div className="grid grid-3">
            {outcomes.map((item) => (
              <article className="card outcome-card" key={item.title}>
                <div className="stat">
                  <strong>{item.value}</strong>
                  <span>{item.title}</span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta panel panel-soft">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Start with a direct, well-scoped conversation.</h2>
            <p>
              If the brief is serious, the process should be clear from the
              start. This site is designed to make that first step straightforward.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact SM Stratagem
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
