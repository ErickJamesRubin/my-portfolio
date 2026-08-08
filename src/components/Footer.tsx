import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <section className="footer-cta-row">
          <div>
            <div className="footer-callout">Let’s turn an idea into a useful product.</div>
          </div>
          <Link to="/contact" className="btn-primary footer-button">
            Let’s Connect
          </Link>
        </section>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">EJR</div>
            <div>
              <div className="footer-name">Erick James Rubin</div>
              <div className="footer-tagline">Full-Stack Developer · IoT Engineer</div>
            </div>
          </div>

          <nav className="footer-nav">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/skills', label: 'Skills' },
              { to: '/projects', label: 'Projects' },
              { to: '/certifications', label: 'Certifications' },
              { to: '/resume', label: 'Resume' },
              { to: '/contact', label: 'Contact' },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="footer-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-quote">
          <span className="quote-mark">“</span>
          Build with clarity. Ship with intent.
          <span className="quote-mark">”</span>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Erick James Rubin · All rights reserved</span>
          <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="footer-github">
            github.com/ErickJamesRubin
          </a>
        </div>
      </div>
    </footer>
  )
}
