import React from "react";
import Image from "./imageFixed";

const MediaStripe = (props) => (
  <div className="w-full mt-3">
    <div className="w-full flex flex-wrap md:flex-no-wrap items-start">
      {props.images && props.images.map((image) => <Image name={image.name} isMediaStripe />)}
    </div>
    <div className="text-sm">{props.credits && props.credits}</div>
  </div>
);
export default MediaStripe;