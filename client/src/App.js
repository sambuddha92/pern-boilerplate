import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./app/state/authSlice";

import PrivateRoute from "./app/containers/PrivateRoute";

const LandingPage = React.lazy(() => import("./app/pages/Landing"));
const SigninPage = React.lazy(() => import("./app/pages/Signin"));
const SignupPage = React.lazy(() => import("./app/pages/Signup"));
const DashboardPage = React.lazy(() => import("./app/pages/Dashboard"));
const PrivatePage = React.lazy(() => import("./app/pages/Private"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" {...props} component={LandingPage} />
          <Route exact path="/signin" {...props} component={SigninPage} />
          <Route exact path="/signup" {...props} component={SignupPage} />
          <PrivateRoute exact path="/dashboard" {...props} component={DashboardPage} />
          <PrivateRoute exact path="/another" {...props} component={PrivatePage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
