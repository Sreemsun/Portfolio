import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Smartphone, Cloud, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hackathons = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-[#ccff00]" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-[#ccff00]" />;
      case 2:
        return <Cloud className="w-5 h-5 text-[#ccff00]" />;
      default:
        return <Users className="w-5 h-5 text-[#ccff00]" />;
    }
  };

  return (
    <section id="hackathons" style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
            (ACHIEVEMENTS &amp; HACKATHONS)
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: '"Geist Mono", monospace' }}>
            / 05
          </span>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 15, 15, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(204, 255, 0, 0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div>
                {/* Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: '6px',
                    background: 'rgba(204, 255, 0, 0.06)',
                    border: '1px solid rgba(204, 255, 0, 0.15)',
                  }}>
                    {getIcon(idx)}
                  </div>

                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#ccff00',
                    background: 'rgba(204, 255, 0, 0.08)',
                    border: '1px solid rgba(204, 255, 0, 0.2)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontFamily: '"Geist Mono", monospace',
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 900,
                  color: '#ffffff',
                  margin: '0 0 4px 0',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  fontSize: '12px',
                  color: '#ccff00',
                  fontFamily: '"Geist Mono", monospace',
                  fontWeight: 600,
                  margin: '0 0 1rem 0',
                }}>
                  {item.role} • {item.project}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '13.5px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.75)',
                  margin: 0,
                  fontFamily: '"Geist Mono", monospace',
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

