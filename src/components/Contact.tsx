import { useState, type FormEvent } from 'react'
import { useScrollReveal } from './useScrollReveal'
import './Contact.css'

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`

    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <main className="section contact-page" ref={ref}>
      <h2 className="section-title fade-in">Contact</h2>
      <p className="section-subtitle fade-in">Let’s talk about a project, opportunity, or collaboration</p>
      <div className="section-divider fade-in" />

      <div className="contact-grid">
        <div className="contact-form-wrap fade-in">
          <div className="contact-form-card">
            <h3 className="contact-card-title">Send a Message</h3>
            <div className="section-rule" />

            {sent && <div className="sent-notice">Message prepared. Your mail app should open.</div>}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="name@example.com" value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Project inquiry" value={form.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me about your idea..." value={form.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn-primary contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <aside className="contact-info fade-in">
          <h3 className="contact-info-title">Contact Info</h3>

          {[
            { icon: 'G', label: 'GitHub', value: 'ErickJamesRubin', link: 'https://github.com/ErickJamesRubin' },
            { icon: 'L', label: 'Location', value: 'Manolo Fortich, Bukidnon, Philippines', link: null },
            { icon: '@', label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
            { icon: 'S', label: 'School', value: 'Northern Bukidnon State College', link: null },
          ].map((c) => (
            <div key={c.label} className="contact-info-card">
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
            <span className="note-icon">✳</span>
            <span>Currently open for project collaborations, internship opportunities, and meaningful technical conversations.</span>
          </div>
        </aside>
      </div>
    </main>
  )
}
