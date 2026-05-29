import Link from "next/link";

const navItems = [
  { href: "/voxxhire", label: "VoxxHire" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="SM Stratagem home">
          <span className="brand-mark" aria-hidden="true"></span>
          <span>SM Stratagem</span>
          <small>EST · DUBAI</small>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="cta-btn">
          Book a call <span className="arrow">→</span>
        </Link>
        <button className="menu-toggle" aria-label="Open menu" type="button">
          <span></span>
        </button>
      </div>
    </nav>
  );
}
