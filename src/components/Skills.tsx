import { useEffect, useRef } from 'react'
import { useScrollReveal } from './useScrollReveal'
import './Skills.css'

const webSkills = [
  { name: 'HTML & CSS', pct: 90, icon: 'HTML' },
  { name: 'JavaScript', pct: 80, icon: 'JS' },
  { name: 'TypeScript', pct: 65, icon: 'TS' },
  { name: 'React', pct: 75, icon: 'RE' },
  { name: 'PHP', pct: 70, icon: 'PHP' },
  { name: 'MySQL', pct: 72, icon: 'SQL' },
]

const hardwareSkills = [
  { name: 'Arduino / C++', pct: 78, icon: 'CPP' },
  { name: 'ESP32 / IoT', pct: 75, icon: 'IoT' },
  { name: 'Firebase', pct: 68, icon: 'FBA' },
  { name: 'Java', pct: 60, icon: 'JAVA' },
  { name: 'Node.js', pct: 55, icon: 'NODE' },
  { name: 'Python', pct: 50, icon: 'PY' },
]

const tools = ['VS Code', 'Git & GitHub', 'Arduino IDE', 'Firebase Console', 'MySQL Workbench', 'Postman', 'Vite', 'Figma', 'Linux Terminal', 'Wokwi Simulator', 'phpMyAdmin', 'Canva']

function SkillBar({ name, pct, icon, delay }: { name: string; pct: number; icon: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    const fill = fillRef.current
    if (!bar || !fill) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              fill.style.width = `${pct}%`
              bar.classList.add('animated')
            }, delay)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(bar)
    return () => observer.disconnect()
  }, [pct, delay])

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-header">
        <span className="skill-icon">{icon}</span>
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" ref={fillRef} style={{ width: 0 }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <main className="section skills-page" ref={ref}>
      <h2 className="section-title fade-in">Skills & Stack</h2>
      <p className="section-subtitle fade-in">Current engineering focus and learning profile</p>
      <div className="section-divider fade-in" />

      <div className="skills-grid">
        <section className="skills-column fade-in">
          <div className="column-header">
            <span className="column-icon">Web</span>
            <h3>Web Technologies</h3>
          </div>
          <div className="skills-list">
            {webSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 120} />
            ))}
          </div>
        </section>

        <section className="skills-column fade-in">
          <div className="column-header">
            <span className="column-icon">IoT</span>
            <h3>Hardware & Backend</h3>
          </div>
          <div className="skills-list">
            {hardwareSkills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 120} />
            ))}
          </div>
        </section>
      </div>

      <section className="tools-section fade-in">
        <h3 className="tools-title">Tools & Technologies</h3>
        <div className="tools-grid">
          {tools.map((t) => (
            <span key={t} className="tool-badge">{t}</span>
          ))}
        </div>
      </section>
    </main>
  )
}
