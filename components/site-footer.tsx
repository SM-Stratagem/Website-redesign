import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <span className="brand-mark"></span>
              <span>SM Stratagem</span>
            </div>
            <p>
              A digital product studio in Dubai. Maker of VoxxHire — and the
              websites and software around it for SMEs, enterprises, and
              universities.
            </p>
            <p className="foot-contact">contact@sm-stratagem.com</p>
          </div>
          <div className="foot-col">
            <h6>Studio</h6>
            <ul>
              <li><Link href="/voxxhire">VoxxHire</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/products">Studio products</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h6>Products</h6>
            <ul>
              <li><Link href="/voxxhire">VoxxHire</Link></li>
              <li><Link href="/products#insights">SM Insights</Link></li>
              <li><Link href="/products#websites">SM Websites</Link></li>
              <li><Link href="/products#vidsights">VidSights</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:contact@sm-stratagem.com">contact@sm-stratagem.com</a></li>
              <li><Link href="/about">in5 Tech, Dubai</Link></li>
              <li><a href="https://ae.linkedin.com/in/suhayl-dastager" target="_blank" rel="noopener">Suhayl on LinkedIn</a></li>
              <li><a href="https://www.linkedin.com/in/mariammohammed212/" target="_blank" rel="noopener">Mariam on LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="dubai">Made in Dubai · 25.0772° N, 55.1410° E</span>
          <span>© 2026 SM Stratagem · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
