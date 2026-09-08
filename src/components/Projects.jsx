import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    num: '01',
    name: 'WeatherScope',
    fullTitle: 'WeatherScope – Advanced Weather Dashboard',
    period: '2026',
    category: 'FULL-STACK / WEATHER',
    tech: ['REACT', 'FASTAPI', 'MYSQL', 'OPENWEATHER', 'LEAFLET'],
    desc: 'Full-stack weather dashboard with real-time monitoring, AQI, UV index, city comparison, interactive maps, and automated PDF report generation.',
    github: 'https://github.com/Sreemsun/Weather_app',
    live: 'https://github.com/Sreemsun/Weather_app',
    image: '/projects/weather-app.png',
  },
  {
    num: '02',
    name: 'MedAssist',
    fullTitle: 'MedAssist – AI Medical Assistance Platform',
    period: '2026',
    category: 'AI / MEDICAL',
    tech: ['NODE.JS', 'EXPRESS', 'MONGODB', 'OPENAI', 'PYTHON', 'JWT'],
    desc: 'AI-powered medical platform with symptom analysis, digital health records, appointment scheduling, JWT auth, and Python-based ML analytics.',
    github: 'https://github.com/Sreemsun/Medical_assistant',
    live: 'https://github.com/Sreemsun/Medical_assistant',
    image: '/projects/medical-app.png',
  },
  {
    num: '03',
    name: 'Environmental Alert',
    fullTitle: 'Environmental Monitoring & Alert System',
    period: '2026',
    category: 'DATA / MONITORING',
    tech: ['PYTHON', 'FLASK', 'SQLITE', 'WEATHERAPI', 'CHART.JS'],
    desc: 'Flask dashboard for real-time weather, AQI, pollution and UV monitoring with a multi-factor environmental risk scoring algorithm and live API integration.',
    github: 'https://github.com/Sreemsun/Environment-monitoring-and-alert-system',
    live: 'https://github.com/Sreemsun/Environment-monitoring-and-alert-system',
    image: '/projects/environment-app.png',
  },
];

function ProjectRow({ project, delay, onHover, onLeave }) {
  const [ref, visible] = useScrollReveal(0.08);

  return (
    <div 
      ref={ref} 
      className={`reveal reveal-delay-${delay}${visible ? ' is-visible' : ''} grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-center gap-6 lg:gap-10 p-6 md:p-10`}
      style={{
        background: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        cursor: 'pointer',
        transition: 'background 0.25s ease',
        position: 'relative',
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
        onHover(project);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#000';
        onLeave();
      }}
    >
      {/* Left Column: Number + Massive Typography Title */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
        <span style={{ 
          fontSize: '13px', 
          fontWeight: 600, 
          color: 'rgba(255,255,255,0.25)', 
          fontFamily: '"Geist Mono", monospace' 
        }}>
          {project.num}
        </span>
        <h3 style={{ 
          fontSize: 'clamp(28px, 3.5vw, 44px)', 
          fontWeight: 900, 
          color: '#fff', 
          margin: 0, 
          fontFamily: 'Inter, sans-serif', 
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
        }}>
          {project.name}
        </h3>
      </div>

      {/* Right Column: Description + Tech Stack + Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <p style={{ 
            fontSize: '13.5px', 
            lineHeight: 1.65, 
            color: 'rgba(255,255,255,0.82)', 
            margin: 0, 
            fontFamily: '"Geist Mono", "Fira Code", monospace', 
            maxWidth: '480px' 
          }}>
            {project.desc}
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '12px', 
            color: 'rgba(255,255,255,0.65)', 
            fontFamily: '"Geist Mono", "Fira Code", monospace',
            flexShrink: 0,
          }}>
            <span>{project.period}</span>
            <span style={{ fontSize: '14px' }}>↗</span>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontSize: '10px',
              fontFamily: '"Geist Mono", "Fira Code", monospace',
              color: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '20px',
              padding: '3px 11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'rgba(255,255,255,0.04)',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* GitHub & Live Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '11px',
              fontFamily: '"Geist Mono", monospace',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#ccff00';
              e.currentTarget.style.color = '#ccff00';
              e.currentTarget.style.background = 'rgba(204,255,0,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub ↗
            </div>
          </a>

          <a 
            href={project.live} 
            target="_blank" 
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '11px',
              fontFamily: '"Geist Mono", monospace',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#ccff00';
              e.currentTarget.style.color = '#ccff00';
              e.currentTarget.style.background = 'rgba(204,255,0,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
              Live Demo ↗
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  const [activeProject, setActiveProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const cardWidth = 320;
    const cardHeight = 200;
    let left = e.clientX + 24;
    let top = e.clientY + 24;

    if (left + cardWidth > window.innerWidth - 24) {
      left = e.clientX - cardWidth - 20;
    }
    if (top + cardHeight > window.innerHeight - 24) {
      top = e.clientY - cardHeight - 20;
    }

    setMousePos({ x: left, y: top });
  };

  const handleHover = (project) => {
    setActiveProject(project);
  };

  const handleLeave = () => {
    setActiveProject(null);
  };

  return (
    <section 
      id="work" 
      style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      onMouseMove={handleMouseMove}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header matching screenshot */}
        <div ref={headerRef} className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span style={{ 
            color: '#ccff00', 
            fontFamily: '"Geist Mono", monospace', 
            fontSize: '13px', 
            fontWeight: 700, 
            letterSpacing: '0.05em' 
          }}>
            (SELECTED WORK)
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ 
            fontSize: '12px', 
            color: 'rgba(255,255,255,0.3)', 
            fontFamily: '"Geist Mono", monospace' 
          }}>
            / 03
          </span>
        </div>

        {/* Project Rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {projects.map((proj, i) => (
            <ProjectRow 
              key={proj.num} 
              project={proj} 
              delay={Math.min(i + 1, 3)} 
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </div>
      </div>

      {/* Floating Hover Image Preview matching screenshot */}
      {activeProject && (
        <div
          style={{
            position: 'fixed',
            top: mousePos.y,
            left: mousePos.x,
            width: '320px',
            height: '200px',
            pointerEvents: 'none',
            zIndex: 9999,
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.95), 0 0 25px rgba(204, 255, 0, 0.15)',
            background: '#0a0a0a',
            transition: 'opacity 0.2s ease, transform 0.15s ease-out',
          }}
        >
          <img
            src={activeProject.image}
            alt={activeProject.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />

          {/* Top-Left Category Overlay Tag matching screenshot */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(204, 255, 0, 0.3)',
            color: '#ccff00',
            fontSize: '10px',
            fontFamily: '"Geist Mono", monospace',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '4px',
            letterSpacing: '0.06em',
          }}>
            {activeProject.category}
          </div>
        </div>
      )}
    </section>
  );
}
