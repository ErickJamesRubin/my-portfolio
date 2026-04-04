import { useScrollReveal } from './useScrollReveal'
import './About.css'

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
              <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" className="pirate-silhouette">
                {/* Hat brim */}
                <ellipse cx="100" cy="55" rx="65" ry="14" fill="var(--accent-tan)" opacity="0.9"/>
                {/* Hat top */}
                <path d="M52 55 Q58 20 100 14 Q142 20 148 55" fill="var(--accent-tan)" opacity="0.9"/>
                {/* Hat band */}
                <path d="M52 55 Q100 67 148 55" fill="none" stroke="var(--accent-red)" strokeWidth="6"/>
                {/* Head */}
                <ellipse cx="100" cy="100" rx="38" ry="42" fill="var(--text-secondary)" opacity="0.4"/>
                {/* Eyes */}
                <ellipse cx="88" cy="96" rx="5" ry="6" fill="var(--accent-gold)" opacity="0.9"/>
                <ellipse cx="112" cy="96" rx="5" ry="6" fill="var(--accent-gold)" opacity="0.9"/>
                {/* Smile */}
                <path d="M88 112 Q100 122 112 112" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Body */}
                <path d="M68 140 Q60 170 55 210 L145 210 Q140 170 132 140 Q116 130 100 130 Q84 130 68 140Z" fill="var(--text-secondary)" opacity="0.3"/>
                {/* Coat collar */}
                <path d="M80 140 L100 160 L120 140" fill="none" stroke="var(--accent-red)" strokeWidth="3"/>
                {/* Sash */}
                <path d="M60 175 Q100 185 140 175" fill="none" stroke="var(--accent-red)" strokeWidth="5" opacity="0.7"/>
                {/* Anchor tattoo */}
                <text x="92" y="190" fontSize="16" fill="var(--accent-gold)" opacity="0.6" fontFamily="serif">⚓</text>
              </svg>
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
