import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      setTimeout(() => el.classList.add('loaded'), 100)
    }
  }, [])

  return (
    <div className="home-page">
      {/* Floating bubbles */}
      <div className="bubbles" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="bubble" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${4 + Math.random() * 12}px`,
            height: `${4 + Math.random() * 12}px`,
          }} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        {/* Background Jolly Roger watermark */}
        <div className="hero-watermark" aria-hidden="true">
          <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="160" r="90" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.12"/>
            <ellipse cx="120" cy="155" rx="22" ry="28" fill="currentColor" opacity="0.10"/>
            <ellipse cx="180" cy="155" rx="22" ry="28" fill="currentColor" opacity="0.10"/>
            <path d="M134 175 L142 192 L150 175 L158 192 L166 175" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.10"/>
            <rect x="134" y="193" width="16" height="18" rx="3" fill="currentColor" opacity="0.10"/>
            <rect x="154" y="193" width="16" height="18" rx="3" fill="currentColor" opacity="0.10"/>
            {/* Crossbones */}
            <line x1="70" y1="240" x2="230" y2="270" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity="0.08"/>
            <line x1="230" y1="240" x2="70" y2="270" stroke="currentColor" strokeWidth="12" strokeLinecap="round" opacity="0.08"/>
            {/* Straw hat */}
            <ellipse cx="150" cy="75" rx="110" ry="28" fill="currentColor" opacity="0.07"/>
            <path d="M70 75 Q80 30 150 22 Q220 30 230 75" fill="currentColor" opacity="0.07"/>
            <path d="M70 75 Q150 95 230 75" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.10"/>
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">⚓ Welcome to my Grand Line</div>

          <h1 className="hero-title">
            <span className="hero-name">Erick James</span>
            <span className="hero-surname">Rubin</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">Full-Stack Developer</span>
            <span className="role-divider">✦</span>
            <span className="role-text">IoT Engineer</span>
          </div>

          <p className="hero-desc">
            Charting new waters in web development and embedded systems.
            A BSIT student sailing the digital seas from Bukidnon, Philippines.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">
              ⚔ View Projects
            </Link>
            <Link to="/resume" className="btn-secondary">
              📜 My Resume
            </Link>
          </div>

          <div className="hero-scroll-hint">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Ocean Waves */}
      <div className="ocean-wrapper" aria-hidden="true">
        <div className="ocean">
          <div className="wave wave1"/>
          <div className="wave wave2"/>
          <div className="wave wave3"/>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="home-stats">
        <div className="stats-grid">
          {[
            { icon: '⚓', value: '7+', label: 'Projects Completed' },
            { icon: '🗺', value: '10+', label: 'Technologies Used' },
            { icon: '☠', value: '3+', label: 'Years Learning' },
            { icon: '🏴‍☠️', value: '∞', label: 'Adventures Ahead' },
          ].map(s => (
            <div key={s.label} className="stat-card parchment-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
