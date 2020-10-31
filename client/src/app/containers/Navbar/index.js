import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

import SignoutButton from "../SignoutButton";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="inner">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink exact activeClassName="active" to="/another">
            Another Private Page
          </NavLink>
          {auth.isAuthenticated ? (
            <React.Fragment>
              <SignoutButton />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink exact activeClassName="active" to="/signin">
                Sign In
              </NavLink>
              <NavLink exact activeClassName="active" to="/signup">
                Sign Up
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="Navbar-Offset"></div>
    </React.Fragment>
  );
};

export default Navbar;
