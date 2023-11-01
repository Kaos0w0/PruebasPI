/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Telephone(props) {
  const { nodes, materials } = useGLTF("/assets/models/mine_telephone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.lambert13SG}
        color={props.color}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/mine_telephone.glb");