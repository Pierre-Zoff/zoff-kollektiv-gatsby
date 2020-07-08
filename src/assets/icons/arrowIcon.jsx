import React from "react";

const ArrowIcon = ({
  width,
  className = "",
  style = { marginTop: "-3px" },
  ...props
}) => (
  <svg
    width={width}
    height="19"
    viewBox="0 0 28 19"
    fill="none"
    className={className}
    style={style}
    {...props}
  >
    <path
      d="M1.23047 17.2695L14.3575 3.15084L26.7696 17.2695"
      stroke="#fff"
      stroke-width="3"
    />
  </svg>
);
export default ArrowIcon;
