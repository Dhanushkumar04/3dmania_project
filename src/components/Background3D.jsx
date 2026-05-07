import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Sparkles, Float as FloatDrei } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const ParticleField = () => {
  const count = 2000;
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 80;
      const speed = 0.005 + Math.random() / 500;
      const xFactor = -100 + Math.random() * 200;
      const yFactor = -100 + Math.random() * 200;
      const zFactor = -100 + Math.random() * 200;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const s = Math.cos(t) * 0.5 + 0.5;
      dummy.position.set(
        xFactor + Math.cos(t / 5) * factor,
        yFactor + Math.sin(t / 5) * factor,
        zFactor + Math.cos(t / 5) * factor
      );
      dummy.scale.set(s * 0.5, s * 0.5, s * 0.5);
      dummy.rotation.set(t, t, t);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} transparent opacity={0.6} />
    </instancedMesh>
  );
};

const FloatingDrone = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.z = t * 0.5;
    mesh.current.position.y = Math.sin(t) * 2;
  });

  return (
    <FloatDrei speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={mesh} position={[15, 5, -10]}>
        {/* Core body */}
        <mesh>
          <boxGeometry args={[1, 0.2, 1]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Arms */}
        {[0, 90, 180, 270].map((deg, i) => (
          <group key={i} rotation={[0, (deg * Math.PI) / 180, 0]}>
            <mesh position={[1.5, 0, 0]}>
              <boxGeometry args={[2, 0.1, 0.2]} />
              <meshStandardMaterial color="#444" />
            </mesh>
            <mesh position={[2.5, 0.2, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 0.05, 16]} />
              <meshStandardMaterial color="#00f2ff" transparent opacity={0.3} />
            </mesh>
          </group>
        ))}
        <pointLight intensity={2} color="#00f2ff" distance={5} />
      </group>
    </FloatDrei>
  );
};

const Background3D = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0, 
      background: '#050505' 
    }}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 40]} fov={75} />
        <fog attach="fog" args={['#050505', 30, 90]} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
        <spotLight position={[-20, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />
        <Sparkles count={200} scale={[100, 100, 100]} size={2} speed={0.5} color="#00f2ff" />
        
        <ParticleField />
        <FloatingDrone />
        
        {/* Subtle background glow */}
        <mesh position={[0, 0, -50]}>
          <planeGeometry args={[200, 200]} />
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.03} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Background3D;
