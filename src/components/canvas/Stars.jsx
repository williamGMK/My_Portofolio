import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Star = (props) => {
  const ref = useRef();
  // Generate more stars spread out in a larger area
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff" // make stars white
          size={0.005} // make them more visible
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Star />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
