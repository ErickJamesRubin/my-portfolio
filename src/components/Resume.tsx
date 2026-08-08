import { useScrollReveal } from './useScrollReveal'
import './Resume.css'

export default function Resume() {
  const ref = useScrollReveal()

  return (
    <main className="section resume-page" ref={ref}>
      <h2 className="section-title fade-in">Resume</h2>
      <p className="section-subtitle fade-in">Developer profile and project experience</p>
      <div className="section-divider fade-in" />

      <div className="resume-download-bar fade-in">
        <span>Download a print-ready version of the current resume.</span>
        <a href="/resume.html" download="Erick_James_Rubin_Resume.html" className="btn-primary">
          Download Resume
        </a>
      </div>

      <div className="resume-doc fade-in">
        <div className="r-header">
          <div className="r-logo-mark">EJR</div>
          <div>
            <h1 className="r-name">Erick James Rubin</h1>
            <p className="r-role">Full-Stack Developer · IoT Engineer · BSIT Student</p>
            <div className="r-contact-row">
              <span>Manolo Fortich, Bukidnon, Philippines</span>
              <span>•</span>
              <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer">
                github.com/ErickJamesRubin
              </a>
            </div>
          </div>
        </div>

        <div className="r-divider" />

        <section className="r-section">
          <h2 className="r-section-title">Education</h2>
          <div className="r-entry">
            <div className="r-entry-header">
              <span className="r-entry-title">Bachelor of Science in Information Technology</span>
              <span className="r-entry-date">2022 – Present</span>
            </div>
            <div className="r-entry-sub">Northern Bukidnon State College (NBSC) · Manolo Fortich, Bukidnon</div>
            <p className="r-entry-desc">
              Specializing in full-stack web development, embedded systems (IoT), and enterprise software.
              Active in academic projects spanning PHP systems, React dashboards, Arduino robotics, and ESP32 IoT solutions.
            </p>
          </div>
        </section>

        <div className="r-divider" />

        <section className="r-section">
          <h2 className="r-section-title">Projects</h2>

          {[
            {
              title: 'Traffic Light Dashboard — ESP32 & Firebase',
              date: '2024',
              desc: 'Real-time web dashboard controlling traffic light simulations via ESP32 and Firebase Realtime Database.',
            },
            {
              title: 'NBSC Anonymous Student Feedback System',
              date: '2024',
              desc: 'Multi-role PHP application with AES-256-CBC encryption, anonymous reactions, manager review gating, and off-hours enforcement.',
            },
            {
              title: 'Weather Station Dashboard — ESP32 & Firebase',
              date: '2024',
              desc: 'Live temperature & humidity monitoring with Chart.js visualization, CSV export, and DHT11 sensor integration.',
            },
            {
              title: 'Line-Following Robotic Car — Arduino Uno',
              date: '2024',
              desc: 'Autonomous robot with IR sensor-based line following, HC-SR04 obstacle avoidance, and L298N motor driver.',
            },
            {
              title: 'Orbital Sentinel — Global Crisis Monitor',
              date: '2024',
              desc: 'Browser-based crisis monitoring dashboard using Leaflet.js, map event overlays, and UI-driven state reporting.',
            },
            {
              title: 'Multiple LED Control Dashboard — ESP32',
              date: '2024',
              desc: 'Firebase-powered dashboard for remote control of multiple LEDs via ESP32 with live state feedback.',
            },
            {
              title: 'Pineapple Heritage Hotel Booking System',
              date: '2023',
              desc: 'Full hotel reservation platform in Java with MySQL, featuring booking workflows, room management, and admin panel.',
            },
          ].map((p) => (
            <div key={p.title} className="r-entry">
              <div className="r-entry-header">
                <span className="r-entry-title">{p.title}</span>
                <span className="r-entry-date">{p.date}</span>
              </div>
              <p className="r-entry-desc">{p.desc}</p>
            </div>
          ))}
        </section>

        <div className="r-divider" />

        <section className="r-section">
          <h2 className="r-section-title">Technical Skills</h2>
          <div className="r-skills-grid">
            <div>
              <div className="r-skill-group-title">Web</div>
              <p className="r-skill-list">HTML/CSS · JavaScript · TypeScript · React · PHP · MySQL</p>
            </div>
            <div>
              <div className="r-skill-group-title">Hardware</div>
              <p className="r-skill-list">Arduino (C++) · ESP32 · Firebase · Java · Node.js · Python</p>
            </div>
            <div>
              <div className="r-skill-group-title">Tools</div>
              <p className="r-skill-list">Git · VS Code · Arduino IDE · MySQL Workbench · Vite · Postman</p>
            </div>
          </div>
        </section>

        <div className="r-divider" />

        <section className="r-section">
          <h2 className="r-section-title">Interests</h2>
          <p className="r-interests">
            Full-Stack Web Development · IoT & Embedded Systems · Robotics & Maker Culture · Open-Source Contribution ·
            GitHub Portfolio Development · Cloud Technologies
          </p>
        </section>
      </div>
    </main>
  )
}
