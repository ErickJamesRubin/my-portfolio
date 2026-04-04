import { useState, type FormEvent } from 'react'
import { useScrollReveal } from './useScrollReveal'
import './Contact.css'

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Opens default mail client — replace with a backend/EmailJS if desired
    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <main className="section contact-page" ref={ref}>
      {/* Compass background */}
      <div className="compass-bg" aria-hidden="true">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.06"/>
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04"/>
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.03"/>
          {/* Cardinal lines */}
          <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" opacity="0.05"/>
          <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.05"/>
          <line x1="65" y1="65" x2="335" y2="335" stroke="currentColor" strokeWidth="0.3" opacity="0.04"/>
          <line x1="335" y1="65" x2="65" y2="335" stroke="currentColor" strokeWidth="0.3" opacity="0.04"/>
          {/* N S E W */}
          <text x="196" y="30" fill="currentColor" fontSize="18" fontWeight="bold" opacity="0.08" fontFamily="serif">N</text>
          <text x="196" y="385" fill="currentColor" fontSize="18" fontWeight="bold" opacity="0.08" fontFamily="serif">S</text>
          <text x="370" y="205" fill="currentColor" fontSize="18" fontWeight="bold" opacity="0.08" fontFamily="serif">E</text>
          <text x="15" y="205" fill="currentColor" fontSize="18" fontWeight="bold" opacity="0.08" fontFamily="serif">W</text>
        </svg>
      </div>

      <h2 className="section-title fade-in">Send a Message</h2>
      <p className="section-subtitle fade-in">Drop a letter in the bottle — I'll fish it out</p>
      <div className="section-divider fade-in" />

      <div className="contact-grid">
        {/* Form */}
        <div className="contact-form-wrap fade-in">
          <div className="parchment-card contact-form-card">
            <h3 className="contact-card-title">📜 Ship a Message</h3>
            <div className="rope-divider" />

            {sent && (
              <div className="sent-notice">
                ✅ Message dispatched! Your mail client should open.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Captain Anonymous"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="pirate@grandline.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="I want to join your crew!"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here, sailor..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary contact-submit">
                ⚓ Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Info cards */}
        <div className="contact-info fade-in">
          <h3 className="contact-info-title">Find Me At Sea</h3>

          {[
            { icon: '🐙', label: 'GitHub', value: 'ErickJamesRubin', link: 'https://github.com/ErickJamesRubin' },
            { icon: '📍', label: 'Location', value: 'Manolo Fortich, Bukidnon, Philippines', link: null },
            { icon: '📧', label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
            { icon: '🎓', label: 'School', value: 'Northern Bukidnon State College', link: null },
          ].map(c => (
            <div key={c.label} className="contact-info-card parchment-card">
              <span className="info-icon">{c.icon}</span>
              <div className="info-text">
                <div className="info-label">{c.label}</div>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="info-value info-link">
                    {c.value}
                  </a>
                ) : (
                  <div className="info-value">{c.value}</div>
                )}
              </div>
            </div>
          ))}

          <div className="contact-note">
            <span>🗺</span>
            <span>
              Currently open for project collaborations, internship opportunities,
              and interesting tech conversations.
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
