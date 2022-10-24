import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { OrbitControls, useGLFT } from "@react-three/drei";
import Face from "./Face";
import css from "../styles/three.module.css";
import Skull4 from "../components/Skull4";
import { useSpring, animated } from "@react-spring/three";

export default function R3FDemo() {
  const ref = useRef();

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    intensity: active ? 1 : 0.6,
  });

  console.log("hello");
  return (
    <div className={css.canvas}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <OrbitControls />
          <animated.spotLight
            intensity={props.intensity}
            angle={0.9}
            penumbra={1}
            position={[10, 50, 160]}
            castShadow
            color={"#FFFFFF"}
          />

          <Face
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
