import React, { useEffect, Suspense } from "react";
import "./app/styles/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./app/state/authSlice";


import PrivateRoute from "./app/containers/PrivateRoute";
import Navbar from "./app/containers/Navbar";
import Footer from "./app/components/Footer";
import Loading from "./app/components/Loading";

const Signin = React.lazy(() => import("./app/routes/Signin"));
const Signup = React.lazy(() => import("./app/routes/Signup"));
const Landing = React.lazy(() => import("./app/routes/Landing"));
const Dashboard = React.lazy(() => import("./app/routes/Dashboard"));
const Private = React.lazy(() => import("./app/routes/Private"));

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
    <React.Fragment>
      <Router>
        <Navbar />
          <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" {...props} component={Landing} />
                <Route exact path="/signin" {...props} component={Signin} />
                <Route exact path="/signup" {...props} component={Signup} />
                <PrivateRoute exact path="/dashboard" {...props} component={Dashboard} />
                <PrivateRoute exact path="/another" {...props} component={Private} />
              </Switch>
          </Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
