import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/permassist", label: "PermAssist" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          className="brand-lockup"
          href="/"
          aria-label="Anthony Middling Building Surveyors home"
        >
          <span className="brand-mark">AM</span>
          <span className="brand-copy">
            <strong>Anthony Middling</strong>
            <small>Building permits and compliance</small>
          </span>
        </Link>
        <nav className="site-nav site-nav-desktop" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="header-cta" href="/contact#quotation">
            Contact & quotation
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span className="mobile-menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>Menu</span>
            </summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="mobile-menu-cta" href="/contact#quotation">
                Contact & quotation
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}