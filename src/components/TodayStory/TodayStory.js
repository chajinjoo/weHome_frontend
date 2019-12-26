import React, { Component } from "react";
import "./TodayStory.scss";

class TodayStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_img: this.props.data.data_img,
      data_title: this.props.data.data_title,
      data_uesr_img: this.props.data.data_uesr_img,
      data_user: this.props.data.data_user
    };
  }
  render() {
    return (
      <>
        <div>
          <ul className="today_story_box">
            <li>
              <img
                className="data_img"
                src={this.state.data_img}
                alt="data_img"
              />
              <div className="data_title">{this.state.data_title}</div>
              <div>
                <img
                  className="data_uesr_img"
                  src={this.state.data_uesr_img}
                  alt="data_uesr_img"
                />
                <div className="data_user">{this.state.data_user}</div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default TodayStory;
