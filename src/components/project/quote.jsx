import React from "react";

const Quote = ({ children, ...props }) => (
  <div className="bg-red z-10 relative">
    <div className="container grid col-gap-2 grid-cols-12 sm:col-gap-12 py-5 -mt-2">
      <div className="col-span-10 col-start-2">
        <div className="text-white">
          <p className="text-6xl quote">{children}</p>
          <p className="text-xl">{props.author}</p>
        </div>
      </div>
    </div>
  </div>
);
export default Quote;
