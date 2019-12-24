import React from "react";
import "./ButtonBox.scss";

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesNum: 0,
      scrapNum: 0
    };
  }

  handleAddLikes = () => {
    this.setState({
      likesNum: this.state.likesNum + 1
    });
  };

  handleAddScrap = () => {
    this.setState({
      scrapNum: this.state.scrapNum + 1
    });
  };

  render() {
    return (
      <div className="buttonBox">
        <button onClick={this.handleAddLikes}>
          <div
            className="heartBox"
            style={{
              backgroundImage: `url(${this.props.HeartImg})`
            }}
          ></div>
          <div className="label">
            {this.props.likes}
            <span className="count">{this.state.likesNum}</span>
          </div>
        </button>
        <button onClick={this.handleAddScrap}>
          <div
            className="bookMarkBox"
            style={{
              backgroundImage: `url(${this.props.HeartImg})`
            }}
          ></div>
          <div className="label">
            {this.props.scrap}
            <span className="count">{this.state.scrapNum}</span>
          </div>
        </button>
      </div>
    );
  }
}

export default ButtonBox;
