import React from "react";
import Image from "../imageFixed";

const TextWithImages = ({
  textPosition = "left",
  children,
  isHighlight = false,
  ...props
}) => {
  const text = (
    <>
      <h2 className="text-5xl sm:text-7xl font-bold mb-2">
        {props.textTitle && props.textTitle}
      </h2>
      <div className="text-base sm:text-xl leading-normal">{children}</div>
    </>
  );
  const images = (
    <div className="grid grid-cols-1 row-gap-1">
      {props.images &&
        props.images.map((image) => (
          <Image name={image.name} className="col-span-1" />
        ))}
      <div className="col-span-1">{props.credits && props.credits}</div>
    </div>
  );

  return (
    <div
      className={`relative py-4 ${
        isHighlight === true ? "bg-lightGray" : "bg-white"
      }`}
    >
      <div className="container grid grid-cols-12 col-gap-2">
        <div className="col-start-2 col-span-10 grid grid-cols-12 col-gap-2">
          <div className="col-span-12 sm:col-span-6">
            {textPosition === "left" ? text : images}
          </div>
          <div className="col-span-12 sm:col-span-6">
            {textPosition !== "left" ? text : images}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextWithImages;
