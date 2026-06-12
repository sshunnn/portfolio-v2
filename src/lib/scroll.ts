import type Lenis from "lenis";

// Shared mutable scroll state, read every frame by the WebGL scene
// without triggering React re-renders.
export const scrollState = {
  progress: 0,
  velocity: 0,
};

export const lenisRef: { current: Lenis | null } = { current: null };
