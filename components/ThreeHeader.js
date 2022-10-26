import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Face from "./Face.js";
import css from "../styles/three.module.scss";
import Skull from "../components/Skull.js";
import { useSpring, animated } from "@react-spring/three";

export default function ThreeHeader(props) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={css.canvas}>
      {/* light mode face vvv */}
      <Canvas className={!props.darkMode ? css.show : css.hidden}>
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
            scale={[0.5, 0.5, 0.5]}
            hovered={hovered}
            active={active}
          />
        </Suspense>
      </Canvas>

      {/* dark mode skull vvv */}
      <Canvas className={props.darkMode ? css.show : css.hidden}>
        <Suspense fallback={null}>
          <Skull />
        </Suspense>
      </Canvas>

      <section className={css.text}>
        <h1>Jacob Dunbar</h1>
        <h2>Web Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus,
          curabitur ornare etiam scelerisque fames mauris donec rhoncus. Erat
          lectus est nisl eget tellus egestas enim massa. Morbi amet sit
          pretium, sit.
        </p>
        <p>
          Tellus, curabitur ornare etiam scelerisque fames mauris donec rhoncus.
          Erat lectus est nisl eget tellus egestas enim{" "}
        </p>
        <div className={css.buttons}>
          <button className={css.emailbtn}>Email Me</button>
          <button className={css.linkedinbtn}>LinkedIn</button>
        </div>
      </section>
    </div>
  );
}
