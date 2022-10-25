import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Face from "./Face.js";
import css from "../styles/three.module.scss";
import Skull from "../components/Skull.js";
import { useSpring, animated } from "@react-spring/three";

export default function ThreeHeader() {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={css.canvas}>
      {/* light mode face vvv */}

      {/* <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />

          <spotLight
            intensity={0.6}
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
            // scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
            hovered={hovered}
            active={active}
          />
        </Suspense>
      </Canvas> */}

      {/* dark mode skull vvv */}

      <Canvas>
        <Suspense fallback={null}>
          <Skull />
        </Suspense>
      </Canvas>
    </div>
  );
}
