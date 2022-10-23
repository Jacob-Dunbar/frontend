import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { OrbitControls, useGLFT } from "@react-three/drei";
import Skull4 from "./Skull4";

export default function R3FDemo() {
  const ref = useRef();

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <OrbitControls />
        <Skull4 />
      </Suspense>
    </Canvas>
  );
}
