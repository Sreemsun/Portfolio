import React from 'react';

function GeometricBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <svg viewBox="0 0 800 700" style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        width: 'clamp(380px, 52vw, 700px)', height: 'auto', opacity: 1,
      }} fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="520,40 760,220 640,500 380,480" fill="rgba(30,30,30,0.7)" stroke="rgba(60,60,60,0.4)" strokeWidth="1" />
        <polygon points="400,80 660,260 560,480 300,400" fill="rgba(22,22,22,0.8)" stroke="rgba(55,55,55,0.35)" strokeWidth="1" />
        <polygon points="340,180 560,300 480,520 250,440" fill="rgba(18,18,18,0.9)" stroke="rgba(50,50,50,0.3)" strokeWidth="1" />
        <polygon points="600,30 720,120 680,200 570,140" fill="rgba(28,28,28,0.75)" stroke="rgba(65,65,65,0.3)" strokeWidth="1" />
        <polygon points="460,260 580,340 540,430 420,370" fill="rgba(25,25,25,0.85)" stroke="rgba(70,70,70,0.25)" strokeWidth="0.5" />
        <polygon points="320,420 480,480 400,580" fill="rgba(20,20,20,0.8)" stroke="rgba(55,55,55,0.3)" strokeWidth="1" />
        <polygon points="620,60 760,400 640,400 600,300 560,400 440,400 560,80" fill="rgba(15,15,15,0.6)" stroke="rgba(40,40,40,0.2)" strokeWidth="1" />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />
    </div>
  );
}

export function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh', background: '#000',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 3rem', paddingTop: '60px',
      position: 'relative', overflow: 'hidden',
    }}>
      <GeometricBackground />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: '#ccff00', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
            Full-Stack Engineer — Kannur, Kerala
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: 'clamp(52px, 9vw, 130px)', fontWeight: 900,
          lineHeight: 0.92, letterSpacing: '-0.03em', color: '#ffffff',
          margin: '0 0 3.5rem 0', fontFamily: 'Inter, sans-serif',
        }}>
          <span style={{ display: 'block' }}>Full-Stack Systems.</span>
          <span style={{ display: 'block' }}>AI / ML Products.</span>
        </h1>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{
            fontSize: '13.5px', lineHeight: 1.8,
            color: 'rgba(255,255,255,0.78)', maxWidth: '360px', margin: 0,
            fontFamily: '"Geist Mono", "Fira Code", "Courier New", monospace',
            letterSpacing: '0.01em',
          }}>
            I'm Sreemsun Anand — a software engineer building across
            the full stack, data infrastructure, and applied
            AI/ML. I turn ambitious ideas into shipped systems.
          </p>

          <button onClick={scrollToWork} style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', padding: 0,
          }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>
              Selected Work
            </span>
            <div style={{
              width: '42px', height: '42px',
              border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.85)', fontSize: '16px',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ccff00'; e.currentTarget.style.color = '#ccff00'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}>
              ↗
            </div>
          </button>
        </div>
      </div>

      {/* Vertical SCROLL */}
      <div style={{
        position: 'absolute', right: '1.5rem', bottom: '3rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 2,
      }}>
        <div className="scroll-bounce" style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.35))' }} />
        <span style={{
          fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
          writingMode: 'vertical-rl', fontFamily: 'Inter, sans-serif',
        }}>Scroll</span>
      </div>
    </section>
  );
}
