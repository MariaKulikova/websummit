import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedSphereInner = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Медленное вращение
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#2F83FF"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        emissive="#2A01F8"
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
};

const AnimatedSphere = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      border: '2px solid red' // Временно для отладки
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2F83FF" />
        <AnimatedSphereInner />
      </Canvas>
    </div>
  );
};

export default AnimatedSphere;
