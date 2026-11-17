import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner section-wrap">
        {/* Top row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">EJR</div>
            <div>
              <div className="footer-name">Erick James Rubin</div>
              <div className="footer-tagline">Full-Stack Developer · IoT Engineer</div>
            </div>
          </div>

          {/* Navigation column */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-head">Navigation</div>
            {[
              { href: '#home',      label: 'Home' },
              { href: '#about',     label: 'About' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#contact',   label: 'Contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="footer-link"
                onClick={(e) => { e.preventDefault(); document.getElementById(l.href.slice(1))?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social row */}
        <div className="footer-socials">
          <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="footer-social">
            🐙 GitHub
          </a>
          <a href="mailto:your.email@example.com" className="footer-social">
            ✉️ Email
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Erick James Rubin · All rights reserved</span>
          <button className="footer-top-btn" onClick={scrollTop}>↑ Back to top</button>
        </div>
      </div>
    </footer>
  )
}
