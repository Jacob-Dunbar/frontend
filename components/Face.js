/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
// import { useFrame } from "react-three-fiber";
import React, { useEffect, useRef } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "react-three-fiber";
// import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "./angle";

export default function Model({ ...props }) {
  const spring = useSpring({
    scale: props.hovered ? [0.11, 0.88, 0.26] : [0.1, 0.85, 0.25],
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("./face.gltf");
  const orbitControlsRef = useRef(null);

  // useFrame to slowly rotate face

  // useFrame(() => {
  //   group.current.rotation.y += 0.01;
  // });

  // Mouse controls

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(y * angleToRadians(90 - 30));
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      // orbitControlsRef.current.setPolarAngle(angleToRadians(y));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7.5]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(50)}
        maxPolarAngle={angleToRadians(120)}
      />
      <animated.group
        rotation={[0, -89.55, 0]}
        position={[0, 0.8, 0.01]}
        scale={spring.scale}
      >
        <mesh
          geometry={nodes.Cube100.geometry}
          material={materials["skin.002"]}
        />
        <mesh
          geometry={nodes.Cube100_1.geometry}
          material={materials.skin_normal}
        />
        <mesh geometry={nodes.Cube100_2.geometry} material={materials.sk} />
        <mesh
          geometry={nodes.Cube100_3.geometry}
          material={materials["skin.001"]}
        />
        <mesh
          geometry={nodes.Cube100_4.geometry}
          material={materials["sk.001"]}
        />
        <mesh
          geometry={nodes.Cube100_5.geometry}
          material={materials["skin.004"]}
        />
        <mesh
          geometry={nodes.Cube100_6.geometry}
          material={props.active ? materials.skin_pink : materials.skin_shadow}
        />
        <mesh
          geometry={nodes.Cube100_7.geometry}
          material={materials.skin_shadow}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload("/face.gltf");