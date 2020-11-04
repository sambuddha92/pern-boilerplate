/*
 * This is the main Navbar component. This is imported as NavbarMain in the aggregator component (index.js) in the same folder.
 * The Navbar position is fixed to the top, as a result, it is taken out of the render flow and hence overlaps positionally with the subsequent elements.
 * To fix this, in the aggregator file, an offset div with the same height as the Navbar is being exported along with the NavbarMain component.
 * The offset div takes up the space that would otherwise be occupied by subsequent elements.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import SignoutButton from "../SignoutButton";

const NavbarMain = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <nav className="Navbar">
      <div className="inner container is-fixed">
        <NavLink exact activeClassName="active" className="no-deco" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" className="no-deco" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink exact activeClassName="active" className="no-deco" to="/another">
          Another Private Page
        </NavLink>
        {auth.isAuthenticated ? (
          <React.Fragment>
            <SignoutButton />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavLink exact activeClassName="active" className="no-deco" to="/signin">
              Sign In
            </NavLink>
            <NavLink exact activeClassName="active" className="no-deco" to="/signup">
              Sign Up
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
