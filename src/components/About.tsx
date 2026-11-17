import profileImg from '../assets/profile-new.jpg'
import './About.css'

export default function About() {
  return (
    <div className="about-wrap section-wrap section-pad">
      {/* Header */}
      <p className="sec-label reveal">About Me</p>
      <h2 className="sec-title reveal">Know Who I Am</h2>
      <div className="sec-rule reveal" />

      {/* Two-column hero */}
      <div className="about-hero reveal">
        {/* Left: greeting + name + bio */}
        <div className="about-left">
          <p className="about-hi">Hi, I'm</p>
          <h3 className="about-name">Erick James <span className="about-name-blue">Rubin</span></h3>
          <p className="about-role-line">Full-Stack Developer &amp; IoT Engineer</p>
          <p className="about-bio">
            I'm a BSIT student at <strong>Northern Bukidnon State College</strong> focused on building
            practical software and connected system experiences.
          </p>
          <p className="about-bio">
            My work spans <strong>React &amp; TypeScript interfaces</strong>, <strong>PHP &amp; MySQL solutions</strong>,
            and <strong>ESP32 / Arduino IoT projects</strong>. I approach development with a product mindset:
            clarify the problem, design the flow, implement the interface, and keep the system maintainable.
          </p>
          <p className="about-bio">
            Outside coursework, I build projects that combine real-time data, dashboards, hardware integration,
            and user-centered design.
          </p>
          <a href="#contact" className="btn-blue about-cta" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Contact Me
          </a>
        </div>

        {/* Center: photo */}
        <div className="about-photo-col">
          <div className="about-photo-glow" />
          <div className="about-photo-ring">
            <img src={profileImg} alt="Erick James Rubin" className="about-photo" />
          </div>
        </div>

        {/* Right: details + view projects */}
        <div className="about-right">
          <div className="about-detail-quote glass">
            "I turn technical requirements into polished interfaces and reliable solutions."
          </div>
          <div className="about-detail-list">
            {[
              { icon: '🎓', label: 'Education', value: 'BSIT — NBSC, Bukidnon' },
              { icon: '📍', label: 'Location', value: 'Manolo Fortich, Philippines' },
              { icon: '🎯', label: 'Focus', value: 'Full-Stack & IoT Systems' },
              { icon: '🐙', label: 'GitHub', value: 'ErickJamesRubin' },
            ].map((d) => (
              <div key={d.label} className="about-detail-row">
                <span className="about-detail-icon">{d.icon}</span>
                <div>
                  <div className="about-detail-label">{d.label}</div>
                  <div className="about-detail-val">{d.value}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="#portfolio" className="btn-outline about-cta" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
        </div>
      </div>

      {/* Education + Experience cards */}
      <div className="about-cards-row">
        <div className="glass about-glass-card reveal">
          <div className="about-card-icon">🎓</div>
          <h4 className="about-card-heading">Education</h4>
          <div className="about-card-rule" />
          <div className="about-card-item">
            <div className="about-card-label">Bachelor of Science in Information Technology</div>
            <div className="about-card-sub">Northern Bukidnon State College · Manolo Fortich</div>
            <div className="about-card-meta">2022 – Present · BSIT</div>
          </div>
          <div className="about-card-item">
            <div className="about-card-label">Senior High School — ICT Strand</div>
            <div className="about-card-sub">Northern Bukidnon State College</div>
            <div className="about-card-meta">Completed</div>
          </div>
        </div>

        <div className="glass about-glass-card reveal">
          <div className="about-card-icon">💼</div>
          <h4 className="about-card-heading">Experience</h4>
          <div className="about-card-rule" />
          <div className="about-card-item">
            <div className="about-card-label">Capstone Researcher &amp; Developer</div>
            <div className="about-card-sub">H₂KNOW IoT Water Monitoring System</div>
            <div className="about-card-meta">2024 – Present · Full-Stack + Hardware</div>
          </div>
          <div className="about-card-item">
            <div className="about-card-label">Freelance / Personal Projects</div>
            <div className="about-card-sub">Web Apps, IoT Dashboards, Robotics</div>
            <div className="about-card-meta">2022 – Present · Self-Directed</div>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="about-stats-row">
        {[
          { icon: '🗂️', value: '8+', label: 'Projects' },
          { icon: '🏅', value: '6+', label: 'Certificates' },
          { icon: '🏆', value: '1+',  label: 'Awards' },
        ].map((s) => (
          <div key={s.label} className="glass about-stat reveal">
            <span className="about-stat-icon">{s.icon}</span>
            <span className="about-stat-val">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
