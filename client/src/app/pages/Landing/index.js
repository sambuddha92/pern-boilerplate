import React from "react";
import "./index.scss";

//Import components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

//Import containers

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="LandingPage">
        <h2>Welcome.</h2>
        <ul>
          <li>
            New user? <a href="/signup">Sign Up</a>.
          </li>
          <li>
            Exisiting user? <a href="/signin">Sign In</a>.
          </li>
        </ul>
        <p>
          The following are protected pages. These will redirect unauthenticated
          users to the Signin page.
        </p>
        <ul>
          <li>
            <a href="/dashboard">Your Dashboard</a>
          </li>
          <li>
            <a href="/another">Another Private Page</a>
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
