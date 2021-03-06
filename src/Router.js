import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signup from "./Component/Signup";
import Login from "./Pages/Login/Login";
import KnowHow from "./Pages/KnowHow";
import DealPage from "./Pages/DealPage";
import ScrollToTop from "./ScrollToTop";
import MyPage from "./Pages/MyPage/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/knowhow/:id" component={KnowHow} />
            <Route exact path="/dealpage" component={DealPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Routes;
