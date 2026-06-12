"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scroll";

// Ashima Arts 3D simplex noise (public domain)
const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

const vertexShader = /* glsl */ `
uniform float uTime;
uniform float uAmp;

varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

${NOISE_GLSL}

void main() {
  float n = snoise(position * 0.8 + uTime * 0.12);
  float n2 = snoise(position * 1.9 - uTime * 0.08) * 0.4;
  float d = n + n2;

  vec3 p = position + normal * d * uAmp;
  vNoise = d;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

// soft pearl: pastel gradient driven by surface direction + white sheen
const fragmentShader = /* glsl */ `
uniform float uTime;

varying float vNoise;
varying vec3 vNormal;
varying vec3 vView;

void main() {
  vec3 n = normalize(vNormal);
  float fres = pow(1.0 - max(dot(n, normalize(vView)), 0.0), 2.0);

  vec3 peach      = vec3(0.97, 0.86, 0.78);
  vec3 periwinkle = vec3(0.78, 0.82, 0.97);
  vec3 mint       = vec3(0.85, 0.94, 0.88);

  vec3 col = mix(periwinkle, peach, n.x * 0.5 + 0.5);
  col = mix(col, mint, smoothstep(-0.2, 0.9, n.y) * 0.6);
  col = mix(col, vec3(1.0), fres * 0.55);
  col += vNoise * 0.03;

  gl_FragColor = vec4(col, 1.0);
}
`;

const INITIAL_UNIFORMS = {
  uTime: { value: 0 },
  uAmp: { value: 0.32 },
};

export default function Blob() {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (material.current) {
      const u = material.current.uniforms;
      u.uTime.value = t;
      // scrolling gently agitates the surface
      const targetAmp =
        0.32 + Math.min(Math.abs(scrollState.velocity) * 0.008, 0.3);
      u.uAmp.value += (targetAmp - u.uAmp.value) * 0.05;
    }
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.05 + scrollState.progress * 1.2;
      mesh.current.rotation.x = Math.sin(t * 0.07) * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 64]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={INITIAL_UNIFORMS}
      />
    </mesh>
  );
}
