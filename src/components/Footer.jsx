import React from 'react';

export function Footer() {
  return (
    <footer style={{
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 900,
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em',
            padding: 0,
          }}
        >
          Sreemsun<span style={{ color: '#ccff00' }}>.</span>
        </button>

        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: '"Geist Mono", monospace' }}>
          © {new Date().getFullYear()} Sreemsun Anand — Full-Stack &amp; AI Engineer
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#ccff00';
            e.currentTarget.style.color = '#ccff00';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

