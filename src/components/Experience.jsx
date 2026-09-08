import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    year: '2026',
    period: 'AUG 2026 — PRESENT',
    role: 'AI Engineer Intern',
    company: 'PM Accelerator (Remote)',
    desc: 'Working as a full-stack engineer within a core product team building and scaling an AI product, contributing to frontend interfaces, backend systems, and AI model integrations.',
  },
  {
    year: '2025',
    period: 'JAN 2025 — JUN 2025',
    role: 'Industry Orientation Trainee',
    company: 'Talrop (Hybrid)',
    desc: 'Completed structured training in frontend, backend, product engineering, and software development practices. Gained exposure to startup ecosystems, professional expectations, and industry execution standards.',
  },
];

function ExpEntry({ exp, index }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div 
      ref={ref} 
      className={`reveal reveal-delay-${Math.min(index + 1, 3)}${visible ? ' is-visible' : ''}`}
      style={{ 
        position: 'relative', 
        paddingBottom: index < experiences.length - 1 ? '5.5rem' : 0, 
        paddingLeft: '3rem' 
      }}
    >
      {/* Ghost year */}
      <div style={{
        position: 'absolute', left: '-20px', top: '-18px',
        fontSize: 'clamp(85px, 12vw, 175px)', fontWeight: 900,
        color: 'rgba(255,255,255,0.035)', letterSpacing: '-0.05em',
        lineHeight: 1, fontFamily: 'Inter, sans-serif', userSelect: 'none', zIndex: 0, pointerEvents: 'none',
      }}>{exp.year}</div>

      {/* Timeline Dot */}
      <div style={{
        position: 'absolute', left: '-5px', top: '2.6rem',
        width: '10px', height: '10px', borderRadius: '50%',
        background: index === 0 ? '#ccff00' : 'rgba(255,255,255,0.3)',
        border: index === 0 ? '1px solid #ccff00' : '1px solid rgba(255,255,255,0.45)',
        boxShadow: index === 0 ? '0 0 12px rgba(204,255,0,0.6)' : 'none',
        zIndex: 1,
      }} />

      {/* Connector line */}
      {index < experiences.length - 1 && (
        <div style={{
          position: 'absolute', left: '-1px',
          top: 'calc(2.6rem + 12px)', bottom: 0,
          width: '1px', background: 'rgba(255,255,255,0.1)',
        }} />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '1.5rem' }}>
        <div style={{ 
          fontSize: '13px', 
          fontWeight: 700, 
          color: '#ccff00', 
          letterSpacing: '0.14em', 
          textTransform: 'uppercase', 
          marginBottom: '0.6rem', 
          fontFamily: '"Geist Mono", "Fira Code", monospace' 
        }}>
          {exp.period}
        </div>

        <h3 style={{ 
          fontSize: 'clamp(26px, 3.5vw, 42px)', 
          fontWeight: 900, 
          color: '#fff', 
          margin: '0 0 0.5rem 0', 
          fontFamily: 'Inter, sans-serif', 
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          {exp.role}
        </h3>

        <div style={{ 
          fontSize: '16px', 
          fontWeight: 600, 
          color: 'rgba(255,255,255,0.75)', 
          fontFamily: '"Geist Mono", "Fira Code", monospace', 
          marginBottom: '1rem', 
          letterSpacing: '0.01em' 
        }}>
          {exp.company}
        </div>

        <p style={{ 
          fontSize: '16px', 
          lineHeight: 1.75, 
          color: 'rgba(255,255,255,0.82)', 
          margin: 0, 
          fontFamily: '"Geist Mono", "Fira Code", monospace', 
          maxWidth: '640px' 
        }}>
          {exp.desc}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  return (
    <section id="experience" style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={headerRef} className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4.5rem' }}>
          <span style={{ 
            color: '#ccff00', 
            fontFamily: '"Geist Mono", "Fira Code", monospace', 
            fontSize: '13px', 
            fontWeight: 700, 
            letterSpacing: '0.06em' 
          }}>
            (EXPERIENCE)
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: '"Geist Mono", monospace', fontWeight: 600 }}>/ 04</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, i) => <ExpEntry key={i} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  );
}
