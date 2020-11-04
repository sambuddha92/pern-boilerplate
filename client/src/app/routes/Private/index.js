import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

//Import components

//Import containers
import SignoutButton from "../../containers/SignoutButton";

const Private = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="Private">
      <div className="inner container is-fixed">
        <h2 className="title has-text-centered">Another Private Page</h2>
        <p className="is-md has-text-centered">{`Welcome, ${auth.user.first_name} ${auth.user.last_name}`}</p>
        <p className="subtitle has-text-centered">
          This is Another Private Page. This is a private route and only
          displayed if user is logged in.
        </p>
        <div className="buttons">
          <SignoutButton className="button is-red is-hollow" />
        </div>
      </div>
    </div>
  );
};

export default Private;

/*

*/
