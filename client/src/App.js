import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./app/state/authSlice";

import SigninPage from "./app/pages/Signin";
import LandingPage from "./app/pages/Landing";

const App = (props) => {
  //Check and update authentication status
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const expired = new Date(Date.now()) >= new Date(auth.expires);
  useEffect(() => {
    const main = () => {
      if (expired) {
        dispatch(signout());
      }
    };
    main();
  }, [dispatch, expired]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" {...props} component={LandingPage} />
        <Route exact path="/signin" {...props} component={SigninPage} />
      </Switch>
    </Router>
  );
};

export default App;
