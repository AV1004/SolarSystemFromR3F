import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Mercury = () => {
  const gltf = useLoader(GLTFLoader, "mercury.glb");
  const MercuryRef = useRef();

  useFrame(({ clock }) => {
    // Orbit Rotation
    MercuryRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.3) * 6;
    MercuryRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.3) * 6;
    // Axis Rotation
    MercuryRef.current.rotation.y += 0.001;
  });

  return (
    <primitive
      object={gltf.scene}
      ref={MercuryRef}
      position={[4, 0, 0]}
      scale={0.06}
    />
  );
};

export default Mercury;
