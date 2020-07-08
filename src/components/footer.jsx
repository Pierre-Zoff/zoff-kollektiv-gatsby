import React, { useContext } from "react";
import { Link } from "gatsby";
import StateContext from "./helpers/stateContext";

const Footer = ({ footerItems, themeColor }) => {
  const { navBarHeight } = useContext(StateContext);
  return (
    <div
      className="relative bg-white flex justify-center py-1 sm:mb-0"
      style={{ marginBottom: navBarHeight }}
    >
      <ul className="text-center">
        {footerItems.map((footerItem) => (
          <li className="inline-block mx-1 last:mr-0">
            <Link
              className={`text-${themeColor} text-xl font-bold no-underline hover:underline`}
              to={footerItem.url}
            >
              {footerItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
