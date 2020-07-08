import React from "react";
import Image from "../imageFluid";

const HeaderWithImage = (props) => (
  <div className="relative">
    <Image name={props.image} />
    <div className="container absolute left-0 right-0 justify-center flex top-0 items-center h-full">
      <div className="text-white font-medium text-6xl sm:text-8xl text-center leading-tight">
        {props.title}
      </div>
    </div>
  </div>
);
export default HeaderWithImage;
