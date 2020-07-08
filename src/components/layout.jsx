import React, { useState } from "react";
import Helmet from "./helmet";
import NavBar from "./navBar";
import Footer from "./footer";
import StateContext from "./helpers/stateContext";

const Layout = ({ themeColor = "red", children }) => {
  const [navBarHeight, setNavBarHeight] = useState(0);
  return (
    <StateContext.Provider value={{ navBarHeight, setNavBarHeight }}>
      <Helmet />
      <div id="top" className="absolute top-0" />
      <NavBar
        menuItems={[
          { label: "Kollektiv", url: "kollektiv", color: "gray" },
          { label: "empowern", url: "empowern", color: "red" },
          { label: "intervenieren", url: "intervenieren", color: "green" },
          { label: "vermitteln", url: "vermitteln", color: "blue" },
        ]}
        themeColor={themeColor}
      />
      <div style={{ paddingTop: navBarHeight }} className="important:pt-0">
        {children}
        <Footer
          footerItems={[
            { label: "Datenschutz", url: "datenschutz" },
            { label: "Impressum", url: "impressum" },
            { label: "Kontakt", url: "kontakt" },
          ]}
          themeColor={themeColor}
        />
      </div>
    </StateContext.Provider>
  );
};

export default Layout;
