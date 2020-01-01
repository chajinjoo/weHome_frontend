import React, { Component } from "react";
import "./MyPageRight.scss";

class MyPageRight extends Component {
  render() {
    const { like_img } = this.props;
    return (
      <div className="like_img_box">
        <img className="like_img" src={like_img} alt="like_img" />
        <span className="like_txt">집들이</span>
      </div>
    );
  }
}

export default MyPageRight;
