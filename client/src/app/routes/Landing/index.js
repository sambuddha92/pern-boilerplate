import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

//Import components

//Import containers

const Landing = () => {
  return (
      <div className="Landing">
        <h2>Welcome.</h2>
        <ul>
          <li>
            New user? <Link to="/signup">Sign Up</Link>.
          </li>
          <li>
            Exisiting user? <Link to="/signin">Sign In</Link>.
          </li>
        </ul>
        <p>
          The following are protected pages. These will redirect unauthenticated
          users to the Signin page.
        </p>
        <ul>
          <li>
            <Link to="/dashboard">Your Dashboard</Link>
          </li>
          <li>
            <Link to="/another">Another Private Page</Link>
          </li>
        </ul>
      </div>
  );
};

export default Landing;
