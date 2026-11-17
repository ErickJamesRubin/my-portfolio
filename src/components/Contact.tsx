import { useState, type FormEvent } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent('Portfolio Contact — ' + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const findMe = [
    { icon: '🐙', label: 'GitHub',    value: 'ErickJamesRubin',               href: 'https://github.com/ErickJamesRubin' },
    { icon: '📍', label: 'Location',  value: 'Manolo Fortich, Bukidnon, PH',  href: null },
    { icon: '✉️', label: 'Email',     value: 'your.email@example.com',         href: 'mailto:your.email@example.com' },
    { icon: '🎓', label: 'School',    value: 'Northern Bukidnon State College', href: null },
  ]

  return (
    <div className="contact-wrap section-wrap section-pad">
      <p className="sec-label reveal">Get In Touch</p>
      <h2 className="sec-title reveal">Contact Me</h2>
      <div className="sec-rule reveal" />

      <div className="contact-grid">
        {/* Form card */}
        <div className="glass contact-card reveal">
          <h3 className="contact-card-title">Send a Message</h3>
          <div className="contact-rule" />
          {sent && <div className="contact-sent">Message prepared — your mail app should open.</div>}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Tell me about your idea..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-blue contact-submit">Send Message</button>
          </form>
        </div>

        {/* Find me card */}
        <aside className="glass contact-card reveal">
          <h3 className="contact-card-title">Find Me</h3>
          <div className="contact-rule" />
          <div className="findme-list">
            {findMe.map((c) => (
              <div key={c.label} className="findme-row">
                <span className="findme-icon">{c.icon}</span>
                <div className="findme-text">
                  <div className="findme-label">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="findme-val findme-link">{c.value}</a>
                  ) : (
                    <div className="findme-val">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-note">
            <span className="contact-note-dot">✳</span>
            Currently open for internship opportunities, project collaborations, and meaningful technical conversations.
          </div>
        </aside>
      </div>
    </div>
  )
}
