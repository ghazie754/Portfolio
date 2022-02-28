import React, {
  createContext,
  useRef,
  useContext,
  createRef,
  MutableRefObject,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";

const state: {
  sections: number;
  pages: number;
  zoom: number;
  top: MutableRefObject<undefined | any>;
} = {
  sections: 3,
  pages: 3,
  zoom: 1,
  top: createRef(),
};

function lerp(v0: number, v1: number, t: number) {
  (t: { equal: (arg0: number, arg1: number) => void; end: () => void }) => {
    t.equal(lerp(0, 1, 0), 0);
    t.equal(lerp(-25, 50, 1), 50);
    t.equal(lerp(-25, 50, 0), -25);
    t.equal(lerp(100, 10, 0), 100);
    t.equal(lerp(0, 100, 0.5), 50);
    t.end();
  };
  return v0 * (1 - t) + v1 * t;
}
const offsetContext = createContext(0);

const Section = ({
  children,
  offset,
  factor,
  ...props
}: {
  [x: string]: any;
  children: any;
  offset: any;
  factor: any;
}): JSX.Element => {
  type T = any;
  const { offset: parentOffset, sectionHeight, aspect } = useSection();
  const ref: React.MutableRefObject<T> = useRef();
  offset = offset !== undefined ? offset : parentOffset;
  useFrame(() => {
    const curY = ref.current.position.y;
    const curTop = state.top.current / aspect;
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1);
  });
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  );
};

const useSection = () => {
  const { sections, pages, zoom } = state;
  const { size, viewport } = useThree();
  const offset = useContext(offsetContext);
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  const canvasWidth = viewportWidth / zoom;
  const canvasHeight = viewportHeight / zoom;
  const mobile = size.width < 700;
  const margin = canvasWidth * (mobile ? 0.2 : 0.1);
  const contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6);
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1));
  const aspect = size.height / viewportHeight;
  return {
    aspect,
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
  };
};

export { Section, useSection };
