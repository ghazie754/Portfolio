import React, { Component, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Shape(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, sethover] = useState(false);
  const [clicked, setclick] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (_state, _delta) => (
      (ref.current.rotation.x += 0.03),
      (ref.current.rotation.y += 0.024),
      (ref.current.rotation.z += 0.024)
    )
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(_event) => setclick(!clicked)}
      onPointerOver={(_event) => sethover(true)}
      onPointerOut={(_event) => sethover(false)}
    >
      <icosahedronGeometry />
      <meshStandardMaterial
        color={
          hovered
            ? "hsla(" + Math.floor(Math.random() * 360) + ", 50%, 50%)"
            : "hsla(" + Math.floor(Math.random() * 360) + ", 50%, 50%)"
        }
      />
    </mesh>
  );
}
export default class hero extends Component {
  render() {
    return (
      <div className="canvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Shape position={[0, 0, 0]} />
        </Canvas>
      </div>
    );
  }
}
