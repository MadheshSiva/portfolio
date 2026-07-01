import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Floating Glass Sphere ─── */
function GlassSphere({ position, scale, speed, distort, color }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += speed * 0.002;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={speed}
        />
      </mesh>
    </Float>
  );
}

/* ─── Particles Field ─── */
function ParticleField({ count = 800 }) {
  const points = useRef();
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ─── Animated Wireframe Torus ─── */
function WireframeTorus({ position }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[2, 0.05, 16, 100]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
    </mesh>
  );
}

/* ─── Orbital Ring ─── */
function OrbitalRing({ radius, speed, tilt }) {
  const ringRef = useRef();
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group rotation={[tilt, 0, 0]}>
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, 0.008, 8, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

/* ─── Main Scene ─── */
export default function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#e0e0ff" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#ffffff" />

        {/* Main focal sphere */}
        <GlassSphere
          position={[2.5, 0.5, -2]}
          scale={1.8}
          speed={0.8}
          distort={0.4}
          color="#8b5cf6"
        />

        {/* Secondary spheres */}
        <GlassSphere
          position={[-3, -1, -3]}
          scale={1.2}
          speed={0.5}
          distort={0.3}
          color="#3b82f6"
        />
        <GlassSphere
          position={[0, 2.5, -4]}
          scale={0.8}
          speed={1.2}
          distort={0.5}
          color="#06b6d4"
        />
        <GlassSphere
          position={[-1.5, -2.5, -1]}
          scale={0.6}
          speed={0.9}
          distort={0.2}
          color="#a855f7"
        />

        {/* Wireframe elements */}
        <WireframeTorus position={[0, 0, -5]} />

        {/* Orbital rings */}
        <OrbitalRing radius={4} speed={0.08} tilt={0.5} />
        <OrbitalRing radius={5.5} speed={-0.05} tilt={-0.3} />
        <OrbitalRing radius={3} speed={0.12} tilt={0.8} />

        {/* Particle field */}
        <ParticleField count={600} />
      </Canvas>
    </div>
  );
}
