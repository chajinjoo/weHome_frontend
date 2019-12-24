import React, { Component } from "react";
import "./MainHeader.scss";

class MainHeader extends Component {
  render() {
    return (
      <>
        <div className="home_header">
          <div className="center_container">
            <div className="header_center"></div>
          </div>
          <div className="header_side"></div>
        </div>
      </>
    );
  }
}

export default MainHeader;
