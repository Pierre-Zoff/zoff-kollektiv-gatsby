import React from "react";

const TextStripe = ({ className = "", ...props }) => (
  <div className={`relative py-3 sm:py-5 bg-white ${className}`}>
    <div className="container grid grid-cols-12 col-gap-0 sm:col-gap-4 md:col-gap-12">
      <div className="col-span-10 col-start-2 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3">
        <div className="font-sans font-medium text-xl sm:text-3xl hyphens-auto">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);
export default TextStripe;
