"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function GreenCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="limegreen" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Green3DScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <GreenCube />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}



