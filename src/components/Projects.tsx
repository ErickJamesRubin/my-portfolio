import { useState } from 'react'
import { useScrollReveal } from './useScrollReveal'
import './Projects.css'

type Category = 'All' | 'Web' | 'IoT' | 'Java'

interface Project {
  title: string
  desc: string
  tags: string[]
  category: Category[]
  icon: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Traffic Light Dashboard',
    desc: 'Web-based dashboard to simulate and control traffic light sequences in real time using ESP32 and Firebase Realtime Database. Features live state syncing and responsive controls.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    category: ['IoT', 'Web'],
    icon: '🚦',
  },
  {
    title: 'NBSC Anonymous Feedback System',
    desc: 'A multi-role PHP web application for students, staff, and admins. Features AES-256-CBC encryption, anonymous reactions, role-based workflows, review gating, and secure access rules.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'AES-256'],
    category: ['Web'],
    icon: '📋',
    featured: true,
  },
  {
    title: 'Weather Station Dashboard',
    desc: 'Real-time temperature and humidity monitoring dashboard powered by a DHT11 sensor on ESP32 and Firebase. Includes live charts, historical data, and export capabilities.',
    tags: ['ESP32', 'Firebase', 'Chart.js', 'JavaScript', 'DHT11'],
    category: ['IoT', 'Web'],
    icon: '🌡️',
  },
  {
    title: 'Line-Following Robotic Car',
    desc: 'Autonomous Arduino Uno robot that follows a line track and avoids obstacles using IR sensors, an HC-SR04 ultrasonic sensor, and motor control logic.',
    tags: ['Arduino', 'C++', 'HC-SR04', 'L298N', 'IR Sensors'],
    category: ['IoT'],
    icon: '🤖',
  },
  {
    title: 'Multiple LED Control Dashboard',
    desc: 'Firebase-powered UI that allows remote real-time control of multiple LEDs through an ESP32 hardware setup and live dashboard status feedback.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    category: ['IoT', 'Web'],
    icon: '💡',
  },
  {
    title: 'Orbital Sentinel',
    desc: 'A crisis-monitoring web dashboard using Leaflet.js to display world events such as conflict zones, typhoon data, earthquake reports, and operational alerts.',
    tags: ['Leaflet.js', 'JavaScript', 'HTML/CSS', 'Geolocation'],
    category: ['Web'],
    icon: '🛰️',
    featured: true,
  },
  {
    title: 'Pineapple Heritage Hotel Booking',
    desc: 'A Java booking and reservation platform with database-backed room management, customer records, booking workflows, and administrative controls.',
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
    category: ['Java'],
    icon: '🍍',
  },
]

const filters: Category[] = ['All', 'Web', 'IoT', 'Java']

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const ref = useScrollReveal()

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category.includes(active))

  return (
    <main className="section projects-page" ref={ref}>
      <h2 className="section-title fade-in">Featured Projects</h2>
      <p className="section-subtitle fade-in">Selected work across software, web, and connected systems</p>
      <div className="section-divider fade-in" />

      <div className="filter-row fade-in">
        {filters.map((f) => (
          <button key={f} className={`filter-btn ${active === f ? 'active' : ''}`} onClick={() => setActive(f)}>
            {f === 'All' ? 'All' : f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <article key={p.title} className={`project-card ${p.featured ? 'featured' : ''}`}>
            {p.featured && <div className="featured-badge">Featured</div>}
            <div className="project-header">
              <span className="project-icon">{p.icon}</span>
              <h3 className="project-title">{p.title}</h3>
            </div>

            <p className="project-desc">{p.desc}</p>

            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="project-footer">
              <a href="https://github.com/ErickJamesRubin" target="_blank" rel="noreferrer" className="btn-secondary project-btn">
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
