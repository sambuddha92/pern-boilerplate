import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Signin from "./app/pages/Signin";
import Landing from "./app/pages/Landing";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" {...props} component={Landing} />
        <Route exact path="/signin" {...props} component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
