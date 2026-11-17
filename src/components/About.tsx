import { useScrollReveal } from './useScrollReveal'
import './About.css'
import profileImg from '../assets/profile-new.jpg'

const facts = [
  { icon: '🎓', label: 'Education', value: 'BSIT — NBSC, Bukidnon' },
  { icon: '📍', label: 'Location', value: 'Manolo Fortich, Philippines' },
  { icon: '🎯', label: 'Focus', value: 'Full-Stack & IoT Systems' },
  { icon: '☰', label: 'GitHub', value: 'ErickJamesRubin' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <main className="section about-page" ref={ref}>
      <h2 className="section-title fade-in">About Me</h2>
      <p className="section-subtitle fade-in">Building systems, learning continuously, shipping ideas</p>
      <div className="section-divider fade-in" />

      <div className="about-grid">
        <div className="about-portrait fade-in">
          <div className="portrait-frame">
            <div className="portrait-inner">
              <img src={profileImg} alt="Erick James Rubin" className="about-profile-photo" />
            </div>
            <div className="portrait-label">Erick James Rubin</div>
          </div>

          <div className="facts-grid">
            {facts.map((f) => (
              <div key={f.label} className="fact-item">
                <span className="fact-icon">{f.icon}</span>
                <div>
                  <div className="fact-label">{f.label}</div>
                  <div className="fact-value">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-bio fade-in">
          <article className="bio-card">
            <h3 className="bio-heading">Developer Snapshot</h3>
            <div className="section-rule" />
            <p>
              I’m <strong>Erick James Rubin</strong>, a BSIT student at <strong>Northern Bukidnon State College</strong>
              focused on building practical software and connected system experiences.
            </p>
            <p>
              My work spans <strong>React and TypeScript interfaces</strong>, <strong>PHP and MySQL solutions</strong>,
              and <strong>ESP32 / Arduino based IoT projects</strong>. I approach development with a product mindset:
              clarify the problem, design the flow, implement the interface, and keep the system maintainable.
            </p>
            <p>
              Outside coursework, I work on projects that combine real-time data, dashboards, hardware integration,
              and user-centered design. I’m especially interested in learning the systems that sit between users,
              APIs, data, and connected devices.
            </p>

            <div className="bio-highlight">
              <span className="highlight-quote">
                “I turn technical requirements into polished interfaces and reliable solutions.”
              </span>
            </div>

            <div className="bio-links">
              <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub Profile
              </a>
            </div>
          </article>

          <div className="interest-cloud fade-in">
            {[
              'Full-Stack Development',
              'IoT Systems',
              'Arduino & ESP32',
              'Firebase',
              'React',
              'PHP & MySQL',
              'Robotics',
              'GitHub',
              'Embedded Systems',
              'UI/UX Design',
            ].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
