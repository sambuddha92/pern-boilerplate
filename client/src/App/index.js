import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";

import Home from "../components/Home";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" {...props} component={Home} />
        <Route exact path="/signin" {...props} component={Signin} />
        <Route exact path="/signup" {...props} component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
