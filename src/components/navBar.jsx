import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import { Link } from "gatsby";
import Div100vh from "react-div-100vh";
import StateContext from "./helpers/stateContext";

const Nav = ({ menuItems, themeColor, ...props }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { navBarHeight, setNavBarHeight } = useContext(StateContext);
  const [menuBackground, setMenuBackground] = useState(themeColor);
  const navBar = useRef(null);

  useLayoutEffect(() => {
    function FsetNavBarHeight() {
      setNavBarHeight(navBar.current.scrollHeight);
    }
    FsetNavBarHeight();
    window.addEventListener("resize", FsetNavBarHeight);
    return () => window.removeEventListener("resize", FsetNavBarHeight);
  }, []);

  return (
    <>
      <button
        className={`hamburger hamburger--squeeze z-50 fixed bottom-0 top-auto sm:bottom-auto sm:top-0 flex items-center theme-${themeColor} ${
          showMenu === true ? "is-active" : ""
        }`}
        type="button"
        aria-label="menu"
        aria-controls="navigation"
        style={{ height: navBarHeight, right: "13px !important" }}
        onClick={() => {
          setShowMenu(showMenu === true ? false : true),
            setMenuBackground(themeColor);
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div
        className={`fixed z-40 bg-white w-full flex justify-center bottom-0 sm:bottom-auto sm:top-0`}
        ref={navBar}
      >
        <Link
          to="/"
          className={`font-sans text-6xl text-${themeColor} transition duration-200 ease-in-out font-semibold no-underline`}
        >
          Zoff
        </Link>
      </div>
      <div
        style={{ display: showMenu === true ? "flex" : "none" }}
        className={`fixed z-40 bg-${menuBackground} transition duration-200 ease-in-out w-full items-center justify-center`}
      >
        <Div100vh className="flex items-center">
          <ul className="text-white text-center text-7xl lg:text-8xl font-medium">
            {menuItems.map((menuItem) => (
              <li>
                {typeof window !== "undefined" &&
                window.location.pathname === `/${menuItem.url}` ? (
                  <button
                    onMouseOver={() => setMenuBackground(menuItem.color)}
                    onClick={() => {
                      setShowMenu(false), setMenuBackground(themeColor);
                    }}
                    className="no-underline font-medium focus:outline-none"
                  >
                    {menuItem.label}
                  </button>
                ) : (
                  <Link
                    onMouseOver={() => setMenuBackground(menuItem.color)}
                    onClick={() => setShowMenu(false)}
                    to={menuItem.url}
                    className="no-underline"
                  >
                    {menuItem.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </Div100vh>
      </div>
    </>
  );
};

export default Nav;
