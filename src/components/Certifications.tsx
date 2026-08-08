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
    color: '#58a6ff',
  },
  {
    title: 'IoT & Embedded Systems',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2024',
    desc: 'Placeholder — update with your actual certification description. Covers microcontroller programming, sensors, and wireless communication.',
    color: '#2ea043',
  },
  {
    title: 'Database Management',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2024',
    desc: 'Placeholder — update with your actual certification description. Covers relational database design, SQL, and optimization techniques.',
    color: '#0969da',
  },
  {
    title: 'JavaScript Advanced',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers ES6+, async programming, design patterns, and modern tooling.',
    color: '#f59f00',
  },
  {
    title: 'React & TypeScript',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers component architecture, hooks, state management, and type safety.',
    color: '#8957e5',
  },
  {
    title: 'Cloud & Firebase',
    issuer: 'Sample Platform — Replace with Actual Issuer',
    date: '2025',
    desc: 'Placeholder — update with your actual certification description. Covers Firebase services, cloud functions, authentication, and real-time databases.',
    color: '#1a7f37',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <main className="section certs-page" ref={ref}>
      <h2 className="section-title fade-in">Certifications</h2>
      <p className="section-subtitle fade-in">Learning milestones and continuing education</p>
      <div className="section-divider fade-in" />

      <div className="certs-notice fade-in">
        <span className="notice-icon">▸</span>
        <span>These certificate placeholders are ready to be replaced as new credentials are earned.</span>
      </div>

      <div className="certs-grid">
        {certs.map((c, i) => (
          <article key={i} className="cert-card fade-in" style={{ '--cert-color': c.color } as React.CSSProperties}>
            <div className="cert-color-rule" />

            <div className="cert-image-placeholder">
              <div className="cert-image-inner">
                <span className="cert-img-icon">▣</span>
                <span className="cert-img-label">Certificate Image</span>
                <span className="cert-img-hint">Replace with your actual certificate photo</span>
              </div>
            </div>

            <div className="cert-info">
              <h3 className="cert-title">{c.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">Issuer: {c.issuer}</span>
                <span className="cert-date">Date: {c.date}</span>
              </div>
              <p className="cert-desc">{c.desc}</p>
            </div>

            <div className="cert-corner cert-corner-tl">◆</div>
            <div className="cert-corner cert-corner-br">◆</div>
          </article>
        ))}
      </div>
    </main>
  )
}
