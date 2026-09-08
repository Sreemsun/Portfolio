import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'work', 'experience', 'hackathons', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'work' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'hackathons' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(0, 0, 0, 0.92)' : 'rgba(0, 0, 0, 0.75)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '22px',
            fontWeight: 900,
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            padding: 0,
          }}
        >
          Sreemsun<span style={{ color: '#ccff00' }}>.</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                  transition: 'all 0.2s ease',
                  padding: '6px 0',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
                }}
              >
                {isActive && (
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#ccff00',
                    boxShadow: '0 0 8px #ccff00',
                  }} />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '6px',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            padding: 0,
          }}
        >
          <span style={{
            width: '18px',
            height: '2px',
            background: mobileMenuOpen ? '#ccff00' : '#fff',
            transition: 'transform 0.2s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, 3px)' : 'none',
          }} />
          <span style={{
            width: '18px',
            height: '2px',
            background: mobileMenuOpen ? '#ccff00' : '#fff',
            opacity: mobileMenuOpen ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }} />
          <span style={{
            width: '18px',
            height: '2px',
            background: mobileMenuOpen ? '#ccff00' : '#fff',
            transition: 'transform 0.2s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, -3px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0a0a0a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeSection === item.id ? '#ccff00' : 'rgba(255, 255, 255, 0.8)',
                padding: '8px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{item.label}</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>↗</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

