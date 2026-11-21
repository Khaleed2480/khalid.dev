import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

function SocialIcon({ type }) {
  if (type === 'whatsapp') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.31 20.62C8.76 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM17.85 16.01C17.61 16.69 16.46 17.31 15.89 17.39C15.38 17.46 14.74 17.49 14.03 17.27C13.6 17.13 13.05 16.95 12.35 16.65C9.4 15.38 7.47 12.41 7.32 12.21C7.17 12.01 6.12 10.62 6.12 9.18C6.12 7.74 6.87 7.03 7.14 6.74C7.41 6.45 7.73 6.38 7.92 6.38C8.11 6.38 8.31 6.38 8.48 6.39C8.66 6.4 8.9 6.32 9.14 6.89C9.39 7.48 9.98 8.93 10.05 9.08C10.12 9.23 10.17 9.4 10.07 9.6C9.97 9.8 9.92 9.92 9.78 10.09C9.63 10.26 9.47 10.47 9.34 10.6C9.19 10.75 9.04 10.91 9.21 11.2C9.38 11.49 9.96 12.44 10.83 13.21C11.95 14.2 12.89 14.51 13.18 14.66C13.47 14.81 13.64 14.78 13.81 14.58C13.98 14.38 14.55 13.71 14.75 13.41C14.95 13.12 15.14 13.17 15.41 13.27C15.68 13.37 17.13 14.08 17.42 14.23C17.71 14.38 17.91 14.45 17.98 14.57C18.05 14.7 18.05 15.33 17.85 16.01Z" />
      </svg>
    );
  }
  if (type === 'linkedin') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
      </svg>
    );
  }
  if (type === 'github') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.93C9.34 22.02 9.52 21.71 9.52 21.44C9.52 21.2 9.51 20.39 9.51 19.53C7 20 6.35 18.9 6.15 18.33C6.04 18.04 5.55 17.15 5.13 16.91C4.78 16.72 4.28 16.25 5.12 16.24C5.91 16.23 6.48 16.98 6.67 17.29C7.58 18.86 9.03 18.42 9.61 18.15C9.7 17.48 9.96 17.03 10.25 16.77C8.03 16.51 5.71 15.63 5.71 11.73C5.71 10.62 6.1 9.7 6.73 8.99C6.63 8.73 6.28 7.68 6.83 6.26C6.83 6.26 7.67 5.99 9.58 7.31C10.38 7.08 11.23 6.97 12.08 6.97C12.93 6.97 13.78 7.08 14.58 7.31C16.49 5.98 17.33 6.26 17.33 6.26C17.88 7.68 17.53 8.73 17.43 8.99C18.06 9.7 18.45 10.61 18.45 11.73C18.45 15.64 16.12 16.51 13.9 16.77C14.27 17.09 14.59 17.71 14.59 18.67C14.59 20.05 14.58 21.12 14.58 21.44C14.58 21.71 14.76 22.03 15.27 21.93C19.14 20.58 22 16.74 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }
  return null;
}

export default function Contact() {
  const [ref, isVisible] = useInView();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Frontend Project',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          _subject: `[khalid.dev] ${form.subject} from ${form.name}`,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('sent');
      setForm({ name: '', email: '', subject: 'Frontend Project', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className={`container contact-layout reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Left: Invite */}
        <div>
          <span className="eyebrow-line">Let’s Connect</span>
          <h2 className="section-title">
            Have an idea? Let’s build something{' '}
            <span className="gradient-text">remarkable.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', margin: 0 }}>
            Whether you’re hiring for a frontend role or launching a new web product, send a message
            straight to my Gmail or reach out on WhatsApp.
          </p>
        </div>

        {/* Center: Form -> Sends directly to Gmail */}
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="form-row-2">
            <input
              type="text"
              required
              aria-label="Your Name"
              className="field-input"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              required
              aria-label="Your Email"
              className="field-input"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <select
            aria-label="Select Subject"
            className="field-select"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          >
            <option value="Frontend Project">Frontend Project</option>
            <option value="Full-Time / Contract Role">Full-Time / Contract Role</option>
            <option value="UI Collaboration">UI Collaboration</option>
            <option value="General Question">General Question</option>
          </select>

          <textarea
            required
            aria-label="Your Message"
            className="field-textarea"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {status === 'sent' && (
            <div
              role="status"
              style={{
                padding: '0.7rem 0.9rem',
                borderRadius: '8px',
                background: 'var(--accent-soft)',
                color: 'var(--accent-solid)',
                fontSize: '0.84rem',
              }}
            >
              Message sent! I’ll get back to you shortly.
            </div>
          )}

          {status === 'error' && (
            <div
              role="status"
              style={{
                padding: '0.7rem 0.9rem',
                borderRadius: '8px',
                background: 'rgba(224, 122, 95, 0.14)',
                color: '#f4a29e',
                fontSize: '0.84rem',
              }}
            >
              Couldn’t send right now—reach out on WhatsApp or{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} style={{ textDecoration: 'underline' }}>
                {SITE_CONFIG.email}
              </a>.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn btn-gradient"
            style={{ justifySelf: 'end', opacity: status === 'sending' ? 0.7 : 1 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>
        </form>

        {/* Right: Direct Links (WhatsApp, LinkedIn, GitHub) */}
        <div className="direct-box">
          <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            Or reach out directly:
          </div>

          <div className="social-circle-row">
            {SITE_CONFIG.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="status-dot" aria-hidden="true" />
            <span>{SITE_CONFIG.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}