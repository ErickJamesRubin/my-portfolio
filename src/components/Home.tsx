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
      <section className="hero" ref={heroRef}>
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-name">Erick James</span>
            <span className="hero-surname">Rubin</span>
          </h1>

          <div className="hero-role">
            <span className="role-text">Full-Stack Developer</span>
            <span className="role-divider">//</span>
            <span className="role-text">IoT Engineer</span>
          </div>

          <p className="hero-desc">
            I build responsive web experiences and connected systems that turn ideas into practical products.
            I’m a BSIT student from Bukidnon, Philippines, focused on learning modern development workflows
            and shipping useful, testable solutions.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn-secondary">
              Resume
            </Link>
          </div>

          <div className="hero-social-row">
            <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot-separator" />
            <span>Available for freelance & internships</span>
          </div>
        </div>

        <aside className="hero-code-panel">
          <div className="code-header">
            <span className="traffic-lights">
              <span />
              <span />
              <span />
            </span>
            <span className="file-name">developer.ts</span>
          </div>
          <pre className="code-block">
            <code>{`const engineer = {
  name: 'Erick James Rubin',
  focus: ['web', 'iot', 'backend'],
  status: 'open_to_work'
}

const build = async () => {
  return await shipSolutions({
    stack: ['React', 'TypeScript', 'PHP', 'ESP32'],
    quality: 'high'
  })
}`}</code>
          </pre>
        </aside>
      </section>

      <section className="home-stats">
        <div className="stats-grid">
          {[
            { icon: '01', value: '7+', label: 'Projects Completed' },
            { icon: '02', value: '10+', label: 'Core Technologies' },
            { icon: '03', value: '01', label: 'BSIT Focus' },
            { icon: '04', value: '24/7', label: 'Learning Mode' },
          ].map((s) => (
            <article key={s.label} className="stat-card">
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
