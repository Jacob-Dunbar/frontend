import { useRef, useEffect, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gltf_models/skull.gltf");
  const lightRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Set state for if on mobile or desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 415);

  // Function to change state of isMobile
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 415);
  };

  // Add event listener for screen resize and run updateIsMobile, plus cleanup.

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  // useSpring to light change headClicked state set to true onClick

  const spring = useSpring({
    intensity: clicked ? 0.15 : 0.075,
  });

  // Get viewport size from state model using useThree hook

  const { viewport } = useThree();

  // useFrame to move the point light (lightRef) to the mouse location before every render.

  useFrame(({ mouse }) => {
    if (!isMobile) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      lightRef.current.position.set(x, y, 1);
      lightRef.current.rotation.set(-y, x, 0);
    }
  });

  // Listen for change in hovered state and change mouse to pointer

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <a.pointLight
        ref={lightRef}
        distance={20}
        decay={2}
        intensity={spring.intensity}
        color={"#d5fdeb"}
        position={[0, 0, 1]}
      />

      <Float speed={6} rotationIntensity={0.5} floatIntensity={0.5}>
        <group
          onClick={() => setClicked(!clicked)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          position={[0, 2, 0]}
          rotation={[-0.95, -1.565, 1.9]}
          scale={[-0.27, -0.23, -0.11]}
        >
          <mesh
            geometry={nodes.Cube147.geometry}
            material={materials.bone_white}
          />
          <mesh
            geometry={nodes.Cube147_1.geometry}
            material={materials.bone_dark001}
          />
          <mesh
            geometry={nodes.Cube147_2.geometry}
            material={materials["skin.001"]}
          />
          <mesh geometry={nodes.Cube147_3.geometry} material={materials.sk} />
          <mesh
            geometry={nodes.Cube147_4.geometry}
            material={materials["bone_whitex.001"]}
          />
        </group>
      </Float>
    </group>
  );
}

useGLTF.preload("/gltf_models/skull.gltf");
