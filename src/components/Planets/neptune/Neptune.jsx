import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Neptune = () => {
  const gltf = useLoader(GLTFLoader, "neptune.glb");
  const neptuneRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    neptuneRef.current.position.x =
      Math.sin(clock.getElapsedTime() * 0.01) * 30;
    neptuneRef.current.position.z =
      Math.cos(clock.getElapsedTime() * 0.01) * 30;
    // Axis Rotation
    neptuneRef.current.rotation.y += 0.015;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={neptuneRef}
      position={[0, 0, 0]}
      scale={0.2}
    />
  );
};

export default Neptune;
