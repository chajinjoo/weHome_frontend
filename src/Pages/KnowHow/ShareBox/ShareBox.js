import React from "react";
import "./ShareBox.scss";
import LinkedIcon from "./LinkedIcon";
import LinkImg from "../../../Images/linkIcon.png";

class ShareBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isCopy: false,
      top: -250,
      shareBox: [
        { url: "https://___.com", class: "facebook_share" },
        { url: "https://___.com", class: "kakao_share" },
        { url: "https://___.com", class: "line_share" }
      ]
    };
  }

  handleCopy = () => {
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked
    });
  };

  handleUrlCopy = () => {
    const { isCopy } = this.state;
    this.setState(
      {
        isCopy: !isCopy,
        top: 0
      },
      () => {
        setTimeout(() => {
          this.setState({
            top: -250
          });
        }, 500);
      }
    );
  };

  render() {
    const { isClicked, top, shareBox } = this.state;
    const icons = shareBox.map((icon, index) => (
      <LinkedIcon key={index} shareBox={icon} />
    ));
    return (
      <div>
        <div className="share_box">
          {icons}
          <button
            className="url_share"
            style={{
              backgroundImage: `url(${LinkImg})`
            }}
            onClick={this.handleCopy}
          >
            ____
          </button>
        </div>
        <div className={isClicked ? "on_url_copy" : "off_url_copy"}>
          <div>URL 복사하기</div>
          <div>
            <input value={window.location.href} readOnly />
            <button onClick={this.handleUrlCopy}>복사</button>
          </div>
        </div>
        <div
          className="on_alert_box"
          style={{
            top: top + "px"
          }}
        >
          <span>클립보드에 복사되었습니다.</span>
        </div>
      </div>
    );
  }
}

export default ShareBox;
