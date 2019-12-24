import React from "react";
import "./ShareBox.scss";

class ShareBox extends React.Component {
  render() {
    return (
      <div className="shareBox">
        <a
          href="https://___.com"
          className="facebook-share"
          style={{
            backgroundImage: `url(${this.props.LinkImg})`
          }}
        >
          ____
        </a>
        <a
          href="https://___.com"
          className="kakao-share"
          style={{
            backgroundImage: `url(${this.props.LinkImg})`
          }}
        >
          ____
        </a>
        <a
          href="https://___.com"
          className="line-share"
          style={{
            backgroundImage: `url(${this.props.LinkImg})`
          }}
        >
          ____
        </a>
        <a
          href="https://___.com"
          className="url-share"
          style={{
            backgroundImage: `url(${this.props.LinkImg})`
          }}
        >
          ____
        </a>
      </div>
    );
  }
}

export default ShareBox;
