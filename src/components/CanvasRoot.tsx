"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./three/Scene"), { ssr: false });

export default function CanvasRoot() {
  return <Scene />;
}
