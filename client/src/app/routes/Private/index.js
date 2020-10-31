import React from "react";
import "./index.scss";

//Import components


//Import containers
import SignoutButton from "../../containers/SignoutButton";

const Private = () => {
  return (
    <div className="Private">
      <h2>Another Private Page</h2>
      <p>
        This is Another Private Page. This is a private route and only displayed
        if user is logged in.
      </p>
      <SignoutButton />
    </div>
  );
};

export default Private;

/*

*/
