import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Uranus = () => {
  const gltf = useLoader(GLTFLoader, "uranus.glb");
  const uranusRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    uranusRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.05) * 29;
    uranusRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.05) * 29;
    // Axis Rotation
    uranusRef.current.rotation.y += 0.015;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={uranusRef}
      position={[0, 0, 0]}
      scale={0.0009}
    />
  );
};

export default Uranus;
