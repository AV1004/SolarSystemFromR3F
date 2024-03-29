import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Jupiter = () => {
  const gltf = useLoader(GLTFLoader, "jupiter.glb");
  const jupiterRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    jupiterRef.current.position.x =
      Math.sin(clock.getElapsedTime() * 0.09) * 24;
    jupiterRef.current.position.z =
      Math.cos(clock.getElapsedTime() * 0.09) * 24;
    // Axis Rotation
    jupiterRef.current.rotation.y += 0.02;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={jupiterRef}
      position={[0, 0, 0]}
      scale={0.4}
    />
  );
};

export default Jupiter;
