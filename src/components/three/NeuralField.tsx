import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODES = 140;
const LINK_DIST = 1.35;

function readAccent(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v ? `rgb(${v.split(/\s+/).join(',')})` : fallback;
}

function Network({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);

  const { positions, linePositions, colors } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < NODES; i++) {
      // Points distributed inside a flattened sphere.
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.6 * Math.cbrt(Math.random());
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.75,
          r * Math.cos(phi),
        ),
      );
    }
    const pos = new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]));
    const a = new THREE.Color(readAccent('--accent-a', '#8b5cf6'));
    const b = new THREE.Color(readAccent('--accent-b', '#22d3ee'));
    const col = new Float32Array(
      pts.flatMap((p) => {
        const c = a.clone().lerp(b, (p.x + 2.6) / 5.2);
        return [c.r, c.g, c.b];
      }),
    );
    const lines: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i]!.distanceTo(pts[j]!) < LINK_DIST)
          lines.push(...pts[i]!.toArray(), ...pts[j]!.toArray());
      }
    }
    return { positions: pos, linePositions: new Float32Array(lines), colors: col };
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += dt * 0.06;
    // Parallax toward the pointer, eased.
    g.rotation.x += (pointer.current.y * 0.35 - g.rotation.x) * 0.04;
    g.position.x += (pointer.current.x * 0.4 - g.position.x) * 0.04;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={readAccent('--accent-b', '#22d3ee')}
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/** Particle neural network that parallaxes with the mouse. Lazy-loaded from the hero. */
export default function NeuralField({ animate = true }: { animate?: boolean }) {
  const pointer = useRef({ x: 0, y: 0 });
  return (
    <div
      className="h-full w-full"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.current.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      }}
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={animate ? 'always' : 'demand'}
        aria-hidden
      >
        <Network pointer={pointer} />
      </Canvas>
    </div>
  );
}
