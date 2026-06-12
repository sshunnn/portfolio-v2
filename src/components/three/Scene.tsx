"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import Blob from "./Blob";
import Particles from "./Particles";
import { scrollState } from "@/lib/scroll";

function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    // mouse parallax + slow dolly-in as the page scrolls
    const targetX = pointer.x * 0.7;
    const targetY = -pointer.y * 0.45;
    const targetZ = 6.2 - scrollState.progress * 1.8;

    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CameraRig />
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
          <Blob />
        </Float>
        <Particles />
      </Canvas>
    </div>
  );
}
