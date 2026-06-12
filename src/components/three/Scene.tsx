"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import Blob from "./Blob";

// canvas has pointer-events: none, so track the mouse on window instead
function CameraRig({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  useFrame((state) => {
    const { camera } = state;
    const targetX = pointer.current.x * 0.4;
    const targetY = -pointer.current.y * 0.25;

    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CameraRig pointer={pointer} />
        <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
          <Blob />
        </Float>
      </Canvas>
    </div>
  );
}
