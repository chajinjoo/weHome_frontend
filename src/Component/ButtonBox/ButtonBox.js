import React from "react";
import "./ButtonBox.scss";

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesNum: props.likesNum,
      scrapNum: props.scrapNum,
      isClicked: false,
      isScraped: false
    };
  }

  handleAddLikes = () => {
    if (this.state.isClicked) {
      this.setState({ likesNum: this.state.likesNum - 1 });
    } else {
      this.setState({ likesNum: this.state.likesNum + 1 });
    }
    this.setState({
      isClicked: this.state.isClicked ? false : true
    });
  };

  handleAddScrap = () => {
    if (this.state.isScraped) {
      this.setState({ scrapNum: this.state.scrapNum - 1 });
    } else {
      this.setState({ scrapNum: this.state.scrapNum + 1 });
    }
    this.setState({
      isScraped: this.state.isScraped ? false : true
    });
  };

  render() {
    return (
      <div className="buttonBox">
        <button
          className={this.state.isClicked ? "active" : ""}
          onClick={this.handleAddLikes}
        >
          <div
            className={this.state.isClicked ? "heartBox2" : "heartBox"}
            style={{
              backgroundImage: `url(${this.props.HeartImg})`
            }}
          ></div>
          <div className={this.state.isClicked ? "label2" : "label"}>
            {this.props.likes}
            <span className="count">{this.state.likesNum}</span>
          </div>
        </button>
        <button
          className={this.state.isScraped ? "active2" : ""}
          onClick={this.handleAddScrap}
        >
          <div
            className={this.state.isScraped ? "bookMarkBox2" : "bookMarkBox"}
            style={{
              backgroundImage: `url(${this.props.HeartImg})`
            }}
          ></div>
          <div className={this.state.isScraped ? "label2" : "label"}>
            {this.props.scrap}
            <span className="count">{this.state.scrapNum}</span>
          </div>
        </button>
      </div>
    );
  }
}

export default ButtonBox;
