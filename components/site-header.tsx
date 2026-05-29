import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="SM Stratagem home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 12h6M15 12h6M12 3v6M12 15v6" />
              <circle cx="12" cy="12" r="2.4" />
              <circle cx="12" cy="12" r="5.5" />
            </svg>
          </span>
          <span>
            <strong>SM</strong>
            <span>Stratagem</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary header-cta">
          Discuss a project
        </Link>
      </div>
    </header>
  );
}
