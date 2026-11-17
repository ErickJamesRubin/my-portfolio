import { useState } from 'react'
import './Projects.css'

type Tab = 'Projects' | 'Certificates' | 'Achievements' | 'Tech Stack'
const TABS: Tab[] = ['Projects', 'Certificates', 'Achievements', 'Tech Stack']

interface Project {
  title: string; desc: string; tags: string[]; icon: string; featured?: boolean
}

const projects: Project[] = [
  {
    title: 'H₂KNOW: IoT River Catchment Water Monitoring & Analytics System',
    desc: 'Capstone project monitoring river water quality using IoT wireless sensors with an analytics dashboard.',
    tags: ['IoT', 'Wireless Sensor Network', 'Water Monitoring', 'Analytics'],
    icon: '💧', featured: true,
  },
  {
    title: 'Traffic Light Dashboard',
    desc: 'Web-based dashboard to simulate and control traffic light sequences in real time using ESP32 and Firebase.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    icon: '🚦',
  },
  {
    title: 'NBSC Anonymous Feedback System',
    desc: 'Multi-role PHP web app with AES-256-CBC encryption, anonymous reactions, and role-based workflows.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'AES-256'],
    icon: '📋', featured: true,
  },
  {
    title: 'Weather Station Dashboard',
    desc: 'Real-time temperature and humidity monitoring powered by DHT11 on ESP32 and Firebase, with live charts.',
    tags: ['ESP32', 'Firebase', 'Chart.js', 'DHT11'],
    icon: '🌡️',
  },
  {
    title: 'Line-Following Robotic Car',
    desc: 'Autonomous Arduino Uno robot that follows a line and avoids obstacles using IR and HC-SR04 sensors.',
    tags: ['Arduino', 'C++', 'HC-SR04', 'L298N'],
    icon: '🤖',
  },
  {
    title: 'Multiple LED Control Dashboard',
    desc: 'Firebase-powered UI for remote real-time control of multiple LEDs via an ESP32 hardware setup.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    icon: '💡',
  },
  {
    title: 'Orbital Sentinel',
    desc: 'Crisis-monitoring web dashboard using Leaflet.js to display conflict zones, typhoon data, and earthquake alerts.',
    tags: ['Leaflet.js', 'JavaScript', 'Geolocation'],
    icon: '🛰️', featured: true,
  },
  {
    title: 'Pineapple Heritage Hotel Booking',
    desc: 'Java booking platform with database-backed room management, customer records, and admin controls.',
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
    icon: '🍍',
  },
]

const certs = [
  { title: 'Web Development Fundamentals', issuer: 'Sample Platform', date: '2024', icon: '🌐', color: '#2f6bff' },
  { title: 'IoT & Embedded Systems',        issuer: 'Sample Platform', date: '2024', icon: '🔌', color: '#22c55e' },
  { title: 'Database Management',            issuer: 'Sample Platform', date: '2024', icon: '🗄️', color: '#0ea5e9' },
  { title: 'JavaScript Advanced',            issuer: 'Sample Platform', date: '2025', icon: '⚡', color: '#f59e0b' },
  { title: 'React & TypeScript',             issuer: 'Sample Platform', date: '2025', icon: '⚛️', color: '#8b5cf6' },
  { title: 'Cloud & Firebase',               issuer: 'Sample Platform', date: '2025', icon: '☁️', color: '#10b981' },
]

const techStack = [
  { name: 'React',       icon: '⚛️' },
  { name: 'TypeScript',  icon: '🔷' },
  { name: 'JavaScript',  icon: '⚡' },
  { name: 'HTML5',       icon: '🏗️' },
  { name: 'CSS3',        icon: '🎨' },
  { name: 'PHP',         icon: '🐘' },
  { name: 'MySQL',       icon: '🗄️' },
  { name: 'Firebase',    icon: '🔥' },
  { name: 'Arduino',     icon: '🔌' },
  { name: 'ESP32',       icon: '📡' },
  { name: 'Git',         icon: '🌿' },
  { name: 'GitHub',      icon: '🐙' },
  { name: 'Vite',        icon: '⚡' },
]

export default function Projects() {
  const [tab, setTab] = useState<Tab>('Projects')

  return (
    <div className="portfolio-wrap section-wrap section-pad">
      <p className="sec-label reveal">My Work</p>
      <h2 className="sec-title reveal">Portfolio</h2>
      <div className="sec-rule reveal" />

      {/* Tab switcher */}
      <div className="port-tabs reveal">
        {TABS.map((t) => (
          <button
            key={t}
            className={`port-tab ${tab === t ? 'active' : ''}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects */}
      {tab === 'Projects' && (
        <div className="port-grid">
          {projects.map((p) => (
            <article key={p.title} className={`glass port-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <div className="port-badge">Featured</div>}
              <div className="port-card-header">
                <span className="port-icon">{p.icon}</span>
                <h3 className="port-title">{p.title}</h3>
              </div>
              <p className="port-desc">{p.desc}</p>
              <div className="port-tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="port-card-footer">
                <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="btn-outline port-btn">
                  Details
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Certificates */}
      {tab === 'Certificates' && (
        <div className="port-grid">
          {certs.map((c, i) => (
            <article key={i} className="glass port-card cert-card" style={{ '--cc': c.color } as React.CSSProperties}>
              <div className="cert-top-bar" />
              <div className="cert-img-block">
                <span className="cert-big-icon">{c.icon}</span>
                <span className="cert-img-title">{c.title}</span>
                <span className="cert-img-sub">{c.issuer} · {c.date}</span>
              </div>
              <div className="cert-body">
                <h3 className="port-title">{c.title}</h3>
                <p className="port-desc" style={{ marginTop: '0.4rem' }}>{c.issuer} · {c.date}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Achievements — hidden if empty */}
      {tab === 'Achievements' && (
        <div className="port-empty glass">
          <span className="port-empty-icon">🏆</span>
          <p>Achievements will appear here once added.</p>
        </div>
      )}

      {/* Tech Stack */}
      {tab === 'Tech Stack' && (
        <div className="tech-grid">
          {techStack.map((t) => (
            <div key={t.name} className="glass tech-tile">
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
