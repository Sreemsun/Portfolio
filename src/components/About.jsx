import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const points = [
  {
    num: '01',
    title: 'Own the whole stack.',
    desc: 'From pixel to database, I build full-stack products with React, Node.js, FastAPI, and modern databases. I care about how every layer connects — and how the final product feels to the person using it.',
  },
  {
    num: '02',
    title: 'Make AI useful.',
    desc: 'I combine software engineering with AI and machine learning to build applications that do more than automate tasks. I focus on turning models and APIs into features people can actually use.',
  },
  {
    num: '03',
    title: 'Let data drive decisions.',
    desc: 'I build data-driven systems for monitoring, analytics, and visualization — transforming raw information into insights that people can understand and act on.',
  },
];

export function About() {
  const [headingRef, headingVisible] = useScrollReveal(0.1);
  const [p1Ref, p1Visible] = useScrollReveal(0.1);
  const [p2Ref, p2Visible] = useScrollReveal(0.1);
  const [p3Ref, p3Visible] = useScrollReveal(0.1);
  const [photoRef, photoVisible] = useScrollReveal(0.1);

  const pointRefs = [
    { ref: p1Ref, visible: p1Visible },
    { ref: p2Ref, visible: p2Visible },
    { ref: p3Ref, visible: p3Visible },
  ];

  return (
    <section id="about" style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section label */}
        <div ref={headingRef} className={`reveal${headingVisible ? ' is-visible' : ''}`}
          style={{ marginBottom: '1.5rem' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
            color: '#ccff00', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif',
          }}>
            — About
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.03em', margin: '0 0 5rem 0',
            fontFamily: 'Inter, sans-serif', maxWidth: '900px',
          }}>
          Engineer at the seam of<br />
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>product, data</span>
          {' '}& intelligence.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-start">
          {/* Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {points.map((p, i) => (
              <div key={p.num}
                ref={pointRefs[i].ref}
                className={`reveal reveal-delay-${i + 1}${pointRefs[i].visible ? ' is-visible' : ''}`}
                style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                {/* Large dimmed number */}
                <span style={{
                  fontSize: '36px', fontWeight: 900,
                  color: 'rgba(255,255,255,0.14)',
                  fontFamily: 'Inter, sans-serif',
                  minWidth: '48px', lineHeight: 1,
                  letterSpacing: '-0.04em',
                  paddingTop: '4px',
                  userSelect: 'none',
                }}>
                  {p.num}
                </span>
                <div>
                  <h3 style={{
                    fontSize: '22px', fontWeight: 800, color: '#fff',
                    margin: '0 0 0.75rem 0', fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.02em', lineHeight: 1.1,
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    fontSize: '13.5px', lineHeight: 1.85,
                    color: 'rgba(255,255,255,0.78)', margin: 0,
                    fontFamily: '"Geist Mono", "Fira Code", "Courier New", monospace',
                    maxWidth: '520px', letterSpacing: '0.01em',
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div ref={p3Ref} className={`reveal reveal-delay-4${p3Visible ? ' is-visible' : ''}`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: '0.5rem'
              }}>
              {[
                { val: '3+', label: 'Major Projects' },
                { val: '20+', label: 'Tech Stack & Tools' },
                { val: '10+', label: 'Certifications' },
                { val: '3', label: 'Hackathons' },

              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '26px', fontWeight: 900, color: '#fff', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div ref={photoRef} className={`reveal reveal-delay-2${photoVisible ? ' is-visible' : ''}`} style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              minHeight: '440px',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              background: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              justify: 'flex-end',
            }}>
              {/* Full Tile Image - Darkened & Subtle */}
              <img
                src="/profile.png"
                alt="Sreemsun Anand"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  opacity: 0.45,
                  filter: 'brightness(0.4) contrast(1.15) grayscale(20%)',
                }}
              />

              {/* Seamless Dark Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.96) 82%, #000000 100%)',
                pointerEvents: 'none',
              }} />


              {/* Text & Status Pill overlay on faded bottom */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '2rem 1.5rem 1.5rem',
              }}>
                {/* Status Pill */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '4px 12px', borderRadius: '20px',
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(204,255,0,0.3)',
                  marginBottom: '0.85rem',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccff00', boxShadow: '0 0 8px #ccff00' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ccff00', fontFamily: 'Inter, sans-serif' }}>
                    Available for Opportunities
                  </span>
                </div>

                <h4 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: '0 0 4px 0', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                  Sreemsun Anand
                </h4>
                <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', margin: 0, fontFamily: '"Geist Mono", monospace' }}>
                  Kannur, Kerala · B.Tech CS (2027)
                </p>
              </div>
            </div>


            {/* Education tag */}
            <div style={{
              marginTop: '1rem', padding: '1.25rem',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px', background: 'rgba(15,15,15,0.8)',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#ccff00', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                Education & Degree
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#fff', fontFamily: 'Inter, sans-serif', marginBottom: '4px' }}>
                B.Tech – Computer Science &amp; Engineering
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>
                Christ College of Engineering, Kerala
              </div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: '"Geist Mono", monospace', marginTop: '6px' }}>
                2023 – 2027 · CGPA: 7.9 / 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
