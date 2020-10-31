import React from "react";
import "./index.scss";

import NavbarMain from "./_NavbarMain";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavbarMain />
      <div className="Navbar-Offset"></div>
    </React.Fragment>
  );
};

export default Navbar;
