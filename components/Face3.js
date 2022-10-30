import { useRef, useState, useEffect } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./angle";
import { useSpring, a } from "@react-spring/three";

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF("/gltf_models/face3.gltf");
  const group = useRef();
  const orbitControlsRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Set state for if on mobile or desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 415);

  // Function to change state of isMobile
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 415);
    console.log(isMobile);
  };

  // Add event listener for screen resize and run updateIsMobile, plus cleanup.

  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  // If mobile just spin head no orbit controls

  const Face = useRef();

  useFrame(({ clock }) => {
    if (isMobile) {
      const a = clock.getElapsedTime();
      Face.current.rotation.y = a;
    }
  });

  // useSpring to animate head spin when headClicked state set to true onClick

  const spring = useSpring({
    rotation: clicked ? [0, -83.2, 0] : [0, -89.55, 0],
  });

  // Mouse controls - set angle of orbit controls based on mouse x and y position.

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // Set azimuthmal and polar angle
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      // orbitControlsRef.current.setPolarAngle(angleToRadians(y));
      orbitControlsRef.current.update();
    }
  });

  // Listen for change in hovered state and change mouse to pointer

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7.5]} />

      {/* Conditionaly render obit controls if not on mobile */}

      {isMobile ? null : (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          ref={orbitControlsRef}
          minPolarAngle={angleToRadians(50)}
          maxPolarAngle={angleToRadians(100)}
        />
      )}

      <a.group
        ref={Face}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        rotation={spring.rotation}
        position={[0, 2.1, 0.01]}
        scale={[0.1, 0.1, 0.022]}
      >
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials.skin_pink}
        />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.sk} />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={materials.skin_normal}
        />
        <mesh
          geometry={nodes.Cube009_3.geometry}
          material={materials["skin.002"]}
        />
        <mesh
          geometry={nodes.Cube009_4.geometry}
          material={materials["skin.001"]}
        />
        <mesh
          geometry={nodes.Cube009_5.geometry}
          material={materials["sk.001"]}
        />
        <mesh
          geometry={nodes.Cube009_6.geometry}
          material={materials["skin.004"]}
        />
        <mesh
          geometry={nodes.Cube009_7.geometry}
          material={materials.skin_shadow}
        />
      </a.group>
    </group>
  );
}

useGLTF.preload("/gltf_models/face3.gltf");
