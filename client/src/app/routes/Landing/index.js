import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

//Import components

//Import containers

const Landing = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="Landing">
      <div className="inner container is-fluid">
        <h1 className="title is-xxxxl has-text-centered">PERN Boilerplate</h1>
        <p className="is-lg subtitle has-text-centered">
          A boilerplate application built using PostgreSQL, Express, React and
          NodeJS
        </p>
        {auth.isAuthenticated ? (
          <div className="buttons">
            <Link to="/another">
              <button className="button is-blue is-hollow is-large">
                Another Page
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="button is-blue is-large">Dashboard</button>
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <Link to="/signin">
              <button className="button is-blue is-hollow is-large">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="button is-blue is-large">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
