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
  highlight?: boolean
}

const projects: Project[] = [
  {
    title: 'Traffic Light Dashboard',
    desc: 'Web-based dashboard to simulate and control traffic light sequences in real time using ESP32 microcontroller and Firebase Realtime Database. Features live state syncing and mobile-responsive controls.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    category: ['IoT', 'Web'],
    icon: '🚦',
  },
  {
    title: 'NBSC Anonymous Feedback System',
    desc: 'A multi-role PHP web application for students, staff, and admins. Features AES-256-CBC encryption, anonymous emoji reactions, off-hours access enforcement, manager review gating, and a full Git workflow.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'AES-256'],
    category: ['Web'],
    icon: '📋',
    highlight: true,
  },
  {
    title: 'Weather Station Dashboard',
    desc: 'Real-time temperature and humidity monitoring dashboard powered by a DHT11 sensor on ESP32 and Firebase. Includes live Chart.js graphs, historical data, and CSV export functionality.',
    tags: ['ESP32', 'Firebase', 'Chart.js', 'JavaScript', 'DHT11'],
    category: ['IoT', 'Web'],
    icon: '🌡',
  },
  {
    title: 'Line-Following Robotic Car',
    desc: 'Autonomous robot car built on Arduino Uno that follows a line track and avoids obstacles. Uses IR sensors, an HC-SR04 ultrasonic sensor, L298N motor driver, and a servo motor for steering.',
    tags: ['Arduino', 'C++', 'HC-SR04', 'L298N', 'IR Sensors'],
    category: ['IoT'],
    icon: '🤖',
  },
  {
    title: 'Multiple LED Control Dashboard',
    desc: 'Firebase-powered web dashboard to control multiple LEDs remotely via ESP32 in real time. Clean toggle UI with live state feedback and mobile-friendly design.',
    tags: ['ESP32', 'Firebase', 'JavaScript', 'HTML/CSS'],
    category: ['IoT', 'Web'],
    icon: '💡',
  },
  {
    title: 'Orbital Sentinel',
    desc: 'A browser-based global crisis monitoring application simulating real-time surveillance of Earth from low orbit. Features Leaflet.js world map with war zones, typhoon tracking, earthquake events, live notifications, and a secure login system.',
    tags: ['Leaflet.js', 'JavaScript', 'HTML/CSS', 'Geolocation'],
    category: ['Web'],
    icon: '🛰',
    highlight: true,
  },
  {
    title: 'Pineapple Heritage Hotel Booking',
    desc: 'A full hotel reservation platform built in Java with MySQL database integration. Features room management, booking workflows, availability checking, customer records, and a complete admin panel.',
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
    category: ['Java'],
    icon: '🍍',
  },
]

const filters: Category[] = ['All', 'Web', 'IoT', 'Java']

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const ref = useScrollReveal()

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category.includes(active))

  return (
    <main className="section projects-page" ref={ref}>
      <h2 className="section-title fade-in">Treasure Chest</h2>
      <p className="section-subtitle fade-in">Voyages conquered & battles won</p>
      <div className="section-divider fade-in" />

      {/* Filter Tabs */}
      <div className="filter-row fade-in">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f === 'All' ? '🗺 All' : f === 'Web' ? '🌐 Web' : f === 'IoT' ? '⚙️ IoT' : '☕ Java'}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filtered.map((p) => (
          <div key={p.title} className={`project-card parchment-card ${p.highlight ? 'featured' : ''}`}>
            {p.highlight && <div className="featured-badge">⭐ Featured</div>}

            <div className="project-header">
              <span className="project-icon">{p.icon}</span>
              <h3 className="project-title">{p.title}</h3>
            </div>

            <p className="project-desc">{p.desc}</p>

            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <div className="project-footer">
              <a
                href="https://github.com/ErickJamesRubin"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary project-btn"
              >
                ⚓ View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
