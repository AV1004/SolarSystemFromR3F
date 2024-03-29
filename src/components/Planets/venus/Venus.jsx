import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Venus = () => {
  const gltf = useLoader(GLTFLoader, "venus.glb");
  const venusRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    venusRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 9;
    venusRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 9;
    // Axis Rotation
    venusRef.current.rotation.y += 0.00001;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={venusRef}
      position={[0, -0.2, 0]}
      scale={0.4}
    />
  );
};

export default Venus;
