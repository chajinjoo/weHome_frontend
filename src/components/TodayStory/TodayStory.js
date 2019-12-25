import React, { Component } from "react";
import "./TodayStory.scss";

class TodayStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataimg: this.props.data.dataimg,
      datatitle: this.props.data.datatitle,
      datauser: this.props.data.datauser
    };
  }
  render() {
    return (
      <>
        <div>
          <div className="TodayStory_Box">
            <img className="dataimg" src={this.state.dataimg} alt="dataimg" />
            <div className="datatitle">{this.state.datatitle}</div>
          </div>
          <div className="datauser">{this.state.datauser}</div>
        </div>
      </>
    );
  }
}

export default TodayStory;
