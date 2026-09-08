import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Futuristic Brain Core Object Group
    const group = new THREE.Group();
    scene.add(group);

    // Outer wireframe icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.2, 12);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      emissive: 0x6366f1,
      emissiveIntensity: 0.4
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    // Inner glowing solid core
    const innerGeo = new THREE.IcosahedronGeometry(0.7, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.3
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerCore);

    // Orbiting rings
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 2;
    ring2.rotation.y = Math.PI / 4;
    group.add(ring1, ring2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 1);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      group.rotation.y += 0.004;
      group.rotation.x += 0.0015;

      // Smooth mouse tracking
      group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.04;
      group.rotation.x += (mouseY * 0.4 - group.rotation.x) * 0.04;

      const time = Date.now() * 0.002;
      core.scale.setScalar(1 + Math.sin(time) * 0.04);
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[500px] relative pointer-events-none flex items-center justify-center"
      id="hero-3d-container"
    />
  );
};

export default ThreeHeroCanvas;
