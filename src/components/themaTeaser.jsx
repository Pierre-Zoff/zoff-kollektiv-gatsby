import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "./imageFluid";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const ThemaTeaser = ({ bgClass = "", ...props }) => {
  const ref = useRef(null);
  const [yScroll, setYScroll] = useState(10000);

  Number.prototype.mapRange = function (in_min, in_max, out_min, out_max) {
    let mappedValue =
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    return mappedValue < out_min ? out_min : mappedValue;
  };

  useScrollPosition(({ prevPos, currPos }) => {
    setYScroll(
      currPos.y + ref.current.offsetTop + ref.current.offsetHeight / 2 + 200
    );
  });
  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="relative" style={{ maxHeight: "100vh" }}>
        <Image name={props.teaserImage} style={{ maxHeight: "100vh" }} className="fixed" />
        <div
          className={`w-full h-full absolute top-0 ${bgClass} bg-opacity-75`}
          style={{
            left:
              yScroll.mapRange(
                0,
                ref.current ? ref.current.offsetHeight : 10000,
                0,
                100
              ) + "vw",
          }}
        ></div>
      </div>
    </div>
  );
};
export default ThemaTeaser;
