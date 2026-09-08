import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillGroups = [
  {
    num: '01',
    title: 'Full-Stack Engineering',
    tags: ['React', 'TypeScript', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'Redis'],
  },
  {
    num: '02',
    title: 'Data',
    tags: ['Python', 'Spark', 'Airflow', 'dbt', 'Snowflake', 'Kafka', 'Pandas'],
  },
  {
    num: '03',
    title: 'AI / ML',
    tags: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'RAG', 'Vector DBs', 'scikit-learn', 'MLflow'],
  },
  {
    num: '04',
    title: 'Toolbox',
    tags: ['Git', 'CI/CD', 'Linux', 'Terraform', 'Grafana', 'Playwright'],
  },
];

export function Skills() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);
  const [titleRef, titleVisible] = useScrollReveal(0.1);
  const [gridRef, gridVisible] = useScrollReveal(0.1);

  return (
    <section id="skills" style={{ background: '#000', padding: '120px 3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section label */}
        <div ref={headerRef} className={`reveal${headerVisible ? ' is-visible' : ''}`}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span className="section-label">(Capabilities)</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>/ 02</span>
        </div>

        {/* Heading */}
        <h2 ref={titleRef} className={`reveal${titleVisible ? ' is-visible' : ''}`}
          style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 3.5rem 0', fontFamily: 'Inter, sans-serif' }}>
          A full-spectrum stack.
        </h2>

        {/* 2×2 equal grid */}
        <div ref={gridRef} className={`reveal${gridVisible ? ' is-visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-4`}>


          {skillGroups.map((group) => (
            <div key={group.num} style={{
              background: 'rgba(12,12,12,1)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              padding: '2rem',
              position: 'relative',
              transition: 'border-color 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              {/* Number */}
              <span style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                fontSize: '11px', fontWeight: 600,
                color: 'rgba(255,255,255,0.15)',
                fontFamily: 'Inter, sans-serif',
              }}>
                {group.num}
              </span>

              {/* Title */}
              <h3 style={{
                fontSize: '18px', fontWeight: 800, color: '#fff',
                margin: '0 0 1.5rem 0',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.02em',
              }}>
                {group.title}
              </h3>

              {/* Tags — all uniform, no accent */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.tags.map(tag => (
                  <span key={tag} style={{
                    display: 'inline-block',
                    padding: '5px 13px',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: '3px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.03)',
                    fontFamily: '"Geist Mono", "Fira Code", "Courier New", monospace',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                  >{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
