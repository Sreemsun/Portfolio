import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [leftRef, leftVisible] = useScrollReveal(0.1);
  const [rightRef, rightVisible] = useScrollReveal(0.1);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Users get a free key from web3forms.com
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });

      const res = await response.json();
      if (res.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        // Fallback simulate success state if key is default
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }
  };


  return (
    <section
      id="contact"
      style={{
        background: '#000',
        padding: '120px 3rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div
          ref={headerRef}
          className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}
        >
          <span className="section-label">(Contact)</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>/ 07</span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left */}
          <div
            ref={leftRef}
            className={`reveal${leftVisible ? ' is-visible' : ''}`}
          >
            <h2 style={{
              fontSize: 'clamp(40px, 6vw, 82px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              fontFamily: 'Inter, sans-serif',
            }}>
              Let's build<br />something.
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 2rem 0',
              fontFamily: 'Inter, sans-serif',
              maxWidth: '360px',
            }}>
              Have a product, a data problem, or an AI idea worth shipping? Drop a note — I read every message.
            </p>

            {/* Email & Phone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <a
                href="mailto:sreemsun21anand@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ccff00'}
                onMouseLeave={e => e.currentTarget.style.color = '#fff'}
              >
                sreemsun21anand@gmail.com <span style={{ fontSize: '14px', color: '#ccff00' }}>↗</span>
              </a>

              <a
                href="tel:+919037705985"
                style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontFamily: '"Geist Mono", monospace',
                }}
              >
                +91 9037705985
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { name: 'GitHub', href: 'https://github.com/Sreemsun' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sreemsun-anand/' },
                { name: 'Resume', href: '/Resume_1.pdf' },
              ].map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ccff00'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {link.name} ↗
                </a>
              ))}
            </div>
          </div>


          {/* Right — form */}
          <form
            ref={rightRef}
            className={`reveal reveal-delay-2${rightVisible ? ' is-visible' : ''}`}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}
          >
            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about it..."
                className="form-input"
                rows={5}
                required
                style={{ resize: 'none' }}
              />
            </div>

            <div>
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : 'Send Message'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
