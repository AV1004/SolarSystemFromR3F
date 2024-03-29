import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Sun = () => {
  const ref = useRef();

  const gltf = useLoader(GLTFLoader, "sun_and_solar_flares.glb");

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.35;
  });
  return <primitive ref={ref} object={gltf.scene} scale={3} />;
};

export default Sun;
