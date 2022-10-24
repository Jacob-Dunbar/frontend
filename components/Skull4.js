/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./skull4.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.08, 1.9, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.19, -0.33, -0.15]}
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
    </group>
  );
}

useGLTF.preload("/skull4.gltf");