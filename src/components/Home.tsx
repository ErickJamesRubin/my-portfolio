import { useEffect, useRef, useState } from 'react'
import IdBadge from './IdBadge'
import './Home.css'

const roles = ['Web Developer', 'IoT Engineer', 'Full-Stack Developer']

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Typing animation
  useEffect(() => {
    const current = roles[roleIdx]
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [displayed, deleting, roleIdx])

  return (
    <div className="home-wrap section-wrap section-pad">
      {/* Left copy */}
      <div className="home-copy">
        <p className="home-welcome">Welcome to</p>
        <h1 className="home-title">My Portfolio</h1>

        <div className="home-typing-row">
          <span className="home-typing">{displayed}</span>
          <span className="home-cursor">|</span>
        </div>

        <p className="home-desc">
          I build responsive web experiences and connected systems that turn ideas into practical products.
          I'm a BSIT student from Bukidnon, Philippines, focused on learning modern development workflows
          and shipping useful, testable solutions.
        </p>

        <div className="home-cta">
          <a href="#portfolio" className="btn-blue" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects →
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Contact Me ✦
          </a>
        </div>

        <div className="home-findme">
          <span className="home-findme-label">FIND ME</span>
          <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="home-social-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right: hero visual */}
      <IdBadge />
    </div>
  )
}
