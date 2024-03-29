import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Saturn = () => {
  const gltf = useLoader(GLTFLoader, "saturn.glb");
  const saturnRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    saturnRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.07) * 27;
    saturnRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.07) * 27;
    // Axis Rotation
    saturnRef.current.rotation.y += 0.02;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={saturnRef}
      position={[0, 0, 0]}
      scale={0.4}
    />
  );
};

export default Saturn;
