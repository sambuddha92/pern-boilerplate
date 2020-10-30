import React from "react";
import "./index.scss";

/*
Change navbar to a container.
Import and render navbar from the App directly instead of pages.
Replace a tags with Link and NavLink
*/

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="inner">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/another">Another Private Page</a>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
        </div>
      </div>
      <div className="Navbar-Offset"></div>
    </React.Fragment>
  );
};

export default Navbar;
