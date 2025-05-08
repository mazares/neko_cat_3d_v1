"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
import NekoCat from "./components/neko_cat/NekoCat";

function App() {
  // const material = new THREE.MeshStandardMaterial({
  //   color: "magenta",
  //   emissive: "black",
  //   emissiveIntensity: 0,
  //   metalness: 0.5,
  //   roughness: 0.5
  // });

  return (
    <Stage
      environment="city"
      intensity={0.5}
      shadows={false}
      adjustCamera={true}
      preset="rembrandt"
    >
      <NekoCat position={[0, 0, 0]} rotation={[0, 0, 0]} />

      <ambientLight intensity={1} />
      <pointLight position={[0, 7, 1]} intensity={400} />
    </Stage>
  );
}

export default () => (
  <Canvas>
    <App />
    <OrbitControls
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      autoRotate={true}
      autoRotateSpeed={1}
    />
    <ambientLight intensity={1} />
    <pointLight position={[0, 7, 1]} intensity={400} />
  </Canvas>
);
