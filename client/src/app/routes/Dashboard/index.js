import React from "react";
import "./index.scss";

//Import components

//Import containers
import SignoutButton from "../../containers/SignoutButton";

const Dashboard = () => {
  return (
    <div className="Dashboard fluid-container">
      <h2>Dashboard</h2>
      <p>
        This is the Dashboard Page. This is a private route and only displayed
        if user is logged in.
      </p>
      <SignoutButton />
    </div>
  );
};

export default Dashboard;
