import { useScrollReveal } from './useScrollReveal'
import './Certifications.css'

interface Cert {
  title: string
  issuer: string
  date: string
  desc: string
  color: string
}

const certs: Cert[] = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2024',
    desc: 'Placeholder — update with your actual certification description once earned. Covers foundational web technologies and best practices.',
    color: '#f39c12',
  },
  {
    title: 'IoT & Embedded Systems',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2024',
    desc: 'Placeholder — update with your actual certification description. Covers microcontroller programming, sensors, and wireless communication.',
    color: '#27ae60',
  },
  {
    title: 'Database Management',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2024',
    desc: 'Placeholder — update with your actual certification description. Covers relational database design, SQL, and optimization techniques.',
    color: '#2980b9',
  },
  {
    title: 'JavaScript Advanced',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers ES6+, async programming, design patterns, and modern tooling.',
    color: '#e67e22',
  },
  {
    title: 'React & TypeScript',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers component architecture, hooks, state management, and type safety.',
    color: '#8e44ad',
  },
  {
    title: 'Cloud & Firebase',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers Firebase services, cloud functions, authentication, and real-time databases.',
    color: '#c0392b',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <main className="section certs-page" ref={ref}>
      <h2 className="section-title fade-in">Navigator's Scrolls</h2>
      <p className="section-subtitle fade-in">Charters earned on the Grand Line</p>
      <div className="section-divider fade-in" />

      <div className="certs-notice fade-in">
        <span>⚓</span>
        <span>These scrolls are sealed — replace image placeholders and descriptions as certificates are earned.</span>
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <div key={i} className="cert-card fade-in" style={{ '--cert-color': c.color } as React.CSSProperties}>
            {/* Wax seal */}
            <div className="wax-seal">
              <div className="seal-inner">☠</div>
            </div>

            {/* Image placeholder */}
            <div className="cert-image-placeholder">
              <div className="cert-image-inner">
                <span className="cert-img-icon">📜</span>
                <span className="cert-img-label">Certificate Image</span>
                <span className="cert-img-hint">Replace with your actual certificate photo</span>
              </div>
            </div>

            {/* Info */}
            <div className="cert-info">
              <h3 className="cert-title">{c.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">🏛 {c.issuer}</span>
                <span className="cert-date">📅 {c.date}</span>
              </div>
              <p className="cert-desc">{c.desc}</p>
            </div>

            {/* Corner rope ornaments */}
            <div className="cert-corner cert-corner-tl">⚓</div>
            <div className="cert-corner cert-corner-br">⚓</div>
          </div>
        ))}
      </div>
    </main>
  )
}
