import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Mars = () => {
  const gltf = useLoader(GLTFLoader, "mars.glb");
  const marsRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    marsRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 16;
    marsRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.1) * 16;
    // Axis Rotation
    marsRef.current.rotation.y += 0.01;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={marsRef}
      position={[0, 0, 0]}
      scale={0.5}
    />
  );
};

export default Mars;
