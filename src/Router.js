import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
// import Signup from './Pages/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/signup" component={Signup} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
