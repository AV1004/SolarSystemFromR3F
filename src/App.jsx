import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import Sun from "./components/Planets/sun/Sun";
import Earth from "./components/Planets/earth/Earth";
import Mercury from "./components/Planets/mercury/Mercury";
import Venus from "./components/Planets/venus/Venus";
import Mars from "./components/Planets/mars/Mars";
import Jupiter from "./components/Planets/jupiter/Jupiter";
import Saturn from "./components/Planets/saturn/Saturn";
import Uranus from "./components/Planets/uranus/Uranus";
import Neptune from "./components/Planets/neptune/Neptune";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 45, position: [0, 0, 50] }}>
        <Suspense fallback={null}>
          <Stars />
          {/* <directionalLight position={[0, 0, 50]} /> */}
          <OrbitControls />
          <ambientLight />
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Mars />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
