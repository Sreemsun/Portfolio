import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Certifications = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  return (
    <section id="certifications" style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div 
          ref={headerRef} 
          className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}
        >
          <span style={{ 
            color: '#ccff00', 
            fontFamily: '"Geist Mono", monospace', 
            fontSize: '13px', 
            fontWeight: 700, 
            letterSpacing: '0.05em' 
          }}>
            (CERTIFICATIONS)
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: '"Geist Mono", monospace' }}>
            / 06
          </span>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'rgba(15, 15, 15, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '1.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(204, 255, 0, 0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <Award className="w-6 h-6 text-[#ccff00] mb-3" />
              <h3 style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 4px 0',
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.35,
              }}>
                {cert.title}
              </h3>
              <p style={{
                fontSize: '11px',
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                fontFamily: '"Geist Mono", monospace',
              }}>
                {cert.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

