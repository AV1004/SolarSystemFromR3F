import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Earth = () => {
  const gltf = useLoader(GLTFLoader, "earth.glb");
  const earthRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    earthRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.15) * 12;
    earthRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.15) * 12;
    // Axis Rotation
    earthRef.current.rotation.y += 0.01;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={earthRef}
      position={[0, 0, 0]}
      scale={0.4}
    />
  );
};

export default Earth;
