import { useScrollReveal } from './useScrollReveal'
import './About.css'
import profileImg from "../assets/profile.jpg"


const facts = [
  { icon: '🎓', label: 'Education', value: 'BSIT — NBSC, Bukidnon' },
  { icon: '📍', label: 'Location', value: 'Manolo Fortich, Philippines' },
  { icon: '⚓', label: 'Focus', value: 'Full-Stack & IoT Systems' },
  { icon: '🐙', label: 'GitHub', value: 'ErickJamesRubin' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <main className="section about-page" ref={ref}>
      <h2 className="section-title fade-in">About the Pirate</h2>
      <p className="section-subtitle fade-in">The story so far…</p>
      <div className="section-divider fade-in" />

      <div className="about-grid">
        {/* Avatar / Portrait */}
        <div className="about-portrait fade-in">
          <div className="portrait-frame">
            <div className="portrait-inner">
              {/* Pirate silhouette SVG */}
              <img src={profileImg} alt="Erick James Rubin" className="about-profile-photo" />
            </div>
            <div className="portrait-label">Captain Erick</div>
          </div>
          {/* Quick facts below portrait on mobile too */}
          <div className="facts-grid">
            {facts.map(f => (
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

        {/* Bio */}
        <div className="about-bio fade-in">
          <div className="parchment-card bio-card corner-decor">
            <h3 className="bio-heading">The Captain's Log</h3>
            <div className="rope-divider" />
            <p>
              Ahoy! I'm <strong>Erick James Rubin</strong>, a passionate BSIT student at{' '}
              <strong>Northern Bukidnon State College</strong> in the Philippines.
              I navigate the digital seas as both a full-stack web developer and an IoT systems
              builder, crafting adventures that blend hardware and software.
            </p>
            <p>
              My crew and I have sailed through <em>PHP systems, React dashboards, Arduino robots,
              and ESP32 IoT contraptions</em>. Whether it's wiring up sensors or architecting
              encrypted feedback systems, I embrace every challenge as a new island to conquer.
            </p>
            <p>
              When I'm not coding, you'll find me tinkering with microcontrollers, exploring
              maker culture, or polishing my GitHub ship. My dream? To become a world-class
              developer — the Pirate King of the tech ocean.
            </p>

            <div className="bio-highlight">
              <span className="highlight-quote">"The sea is calling, and I must go — to ship this feature before deadline."</span>
            </div>

            <div className="bio-links">
              <a
                href="https://github.com/ErickJamesRubin"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                ⚓ GitHub Profile
              </a>
            </div>
          </div>

          {/* Interest Tags */}
          <div className="interest-cloud fade-in">
            {[
              'Full-Stack Development', 'IoT Systems', 'Arduino & ESP32',
              'Firebase', 'React', 'PHP & MySQL', 'Robotics',
              'GitHub', 'Embedded Systems', 'UI/UX Design'
            ].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
