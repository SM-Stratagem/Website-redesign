import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer section-tight">
      <div className="container footer-inner panel panel-soft">
        <div>
          <p className="eyebrow">SM Stratagem</p>
          <h2>Intelligent systems, built with clarity.</h2>
          <p>
            A disciplined digital partner for teams that need strong thinking,
            clean execution, and dependable delivery.
          </p>
          <p className="footer-note">
            Focus areas: AI strategy, custom software, delivery support, and
            brand-grade presentation for technical work.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/insights">Insights</Link>
          </div>
          <div>
            <span>Contact</span>
            <Link href="/contact">Get in touch</Link>
            <a href="mailto:hello@sm-stratagem.com">hello@sm-stratagem.com</a>
            <span className="footer-small">Reply window: 1 business day</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
