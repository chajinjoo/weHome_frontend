import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Signup from "./Component/Signup";
import Login from "./Pages/Login";
import KnowHow from "./Pages/KnowHow";
import ScrollToTop from "./ScrollToTop";
import MyPage from "./Pages/MyPage/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/knowhow" component={KnowHow} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Routes;
