import React from "react";
import Image from "../imageFixed";

const ImageOnly = ({ ...props }) => (
  <div className="relative py-4 bg-lightGray">
    <div className="container grid grid-cols-12 col-gap-2">
      <div className="col-start-2 col-span-10">
        {props.image && <Image name={props.image} />}
        <div className="text-base sm:text-md">{props.credits && props.credits}</div>
      </div>
    </div>
  </div>
);
export default ImageOnly;
