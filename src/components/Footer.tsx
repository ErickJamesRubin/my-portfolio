import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <svg className="footer-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="28" r="14" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <ellipse cx="20" cy="27" rx="3.5" ry="4.5" fill="currentColor" opacity="0.9"/>
            <ellipse cx="28" cy="27" rx="3.5" ry="4.5" fill="currentColor" opacity="0.9"/>
            <path d="M20 33 L22 37 L24 33 L26 37 L28 33" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="19" y="37" width="3" height="4" rx="1" fill="currentColor"/>
            <rect x="26" y="37" width="3" height="4" rx="1" fill="currentColor"/>
            <ellipse cx="24" cy="15" rx="20" ry="5.5" fill="#d4a853" stroke="#8B6914" strokeWidth="1"/>
            <path d="M10 15 Q13 5 24 3 Q35 5 38 15" fill="#d4a853" stroke="#8B6914" strokeWidth="1"/>
            <path d="M10 15 Q24 19 38 15" fill="none" stroke="#c0392b" strokeWidth="2.5"/>
          </svg>
          <div>
            <div className="footer-name">Erick James Rubin</div>
            <div className="footer-tagline">Sailing the Digital Grand Line</div>
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
          ].map(l => (
            <Link key={l.to} to={l.to} className="footer-link">{l.label}</Link>
          ))}
        </nav>

        <div className="footer-quote">
          <span className="quote-mark">"</span>
          People's dreams never end — so neither does the code.
          <span className="quote-mark">"</span>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Erick James Rubin · All rights reserved</span>
          <a
            href="https://github.com/ErickJamesRubin"
            target="_blank"
            rel="noreferrer"
            className="footer-github"
          >
            ⚓ github.com/ErickJamesRubin
          </a>
        </div>
      </div>
    </footer>
  )
}
