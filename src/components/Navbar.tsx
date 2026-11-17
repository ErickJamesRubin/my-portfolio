import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Active section on scroll
  useEffect(() => {
    const ids = ['home', 'about', 'portfolio', 'contact']
    const onScroll = () => {
      const scrollY = window.scrollY + 100
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= scrollY) {
          setActive(`#${ids[i]}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setMenuOpen(false)
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="nav-pill">
        {links.map((l) => (
          <button
            key={l.href}
            className={`nav-btn ${active === l.href ? 'nav-active' : ''}`}
            onClick={() => handleNav(l.href)}
          >
            {l.label}
          </button>
        ))}

        {/* Hamburger for mobile */}
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile">
          {links.map((l) => (
            <button
              key={l.href}
              className={`nav-mobile-btn ${active === l.href ? 'nav-active' : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
