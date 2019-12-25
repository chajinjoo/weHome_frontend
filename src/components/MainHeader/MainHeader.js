import React, { Component } from "react";
import "./MainHeader.scss";
import Sidepic from "./Sidepic";

class MainHeader extends Component {
  render() {
    return (
      <>
        <div className="home_header">
          <div className="center_container">
            <div className="header_center"></div>
          </div>
          <Sidepic />
        </div>
      </>
    );
  }
}

export default MainHeader;
