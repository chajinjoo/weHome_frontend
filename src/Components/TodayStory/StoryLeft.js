import React, { Component } from "react";
import "./StoryLeft.scss";

class StoryLeft extends Component {
  render() {
    const { img, title, user_img, user } = this.props;
    return (
      <div className="today_story_box">
        <img className="data_img" src={img} alt="data_img" />
        <div className="data_title">{title}</div>
        <div className="boxbox">
          <img className="data_uesr_img" src={user_img} alt="data_uesr_img" />
          <div className="data_user">{user}</div>
        </div>
      </div>
    );
  }
}

export default StoryLeft;
