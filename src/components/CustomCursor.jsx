import React, { useEffect, useRef } from 'react';

export function CustomCursor() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth lerp
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
      glowRef.current.style.transform = `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.02) 60%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        mixBlendMode: 'screen',
      }}
    />
  );
}
