import Head from "./Head";
import Footer from "./footer";
import NestedLayout from "../components/nested-layout";
import { CssBaseline, Container } from "@material-ui/core";
import React, { Component, FC, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Shape: FC = (props: any) => {
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
    ),
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
            ? "hsla(" + Math.random() * 360 + ", 50%, 50%)"
            : "hsla(" + Math.random() * 360 + ", 50%, 50%)"
        }
      />
    </mesh>
  );
};
export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      {/* <Canvas> */}
      <CssBaseline />
      <Container maxWidth="md">
        <Head />
        <NestedLayout>{children}</NestedLayout>
        <Footer />
      </Container>
      {/* </Canvas> */}
    </>
  );
}
