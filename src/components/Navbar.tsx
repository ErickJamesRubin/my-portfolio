import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../App'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certs' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo + Name */}
        <NavLink to="/" className="nav-brand">
          <svg className="nav-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
          <div className="nav-brand-text">
            <span className="nav-name">Erick James Rubin</span>
            <span className="nav-tagline">Full-Stack & IoT Developer</span>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
