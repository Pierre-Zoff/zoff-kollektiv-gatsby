import React, { useRef, useState, useLayoutEffect } from "react";
import Image from "./imageFluid";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const SmallBanner = ({ children, ...props }) => (
  <div className="container text-center text-2xl font-bold py-1 text-gray leading-none">
    {children}
  </div>
);
export default SmallBanner;
