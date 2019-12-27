import React from "react";
import "./ButtonBox.scss";

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesNum: props.likesNum,
      scrapNum: props.scrapNum,
      isClicked: false,
      isScraped: false,
      top: -80
    };
  }

  handleAddLikes = () => {
    const { isClicked, likesNum } = this.state;
    const offSet = isClicked ? -1 : 1;

    this.setState({
      likesNum: likesNum + offSet,
      isClicked: !isClicked
    });
  };

  showNotification = () => {
    const { isScraped, scrapNum } = this.state;
    const offSet = isScraped ? -1 : 1;

    this.setState(
      {
        scrapNum: scrapNum + offSet,
        isScraped: !isScraped,
        top: -10
      },
      () => {
        setTimeout(() => {
          this.setState({
            top: -80
          });
        }, 1000);
      }
    );
  };

  render() {
    const { isClicked, isScraped, likesNum, scrapNum, top } = this.state;
    const { HeartImg, likes, scrap } = this.props;

    return (
      <>
        <div className="button_box">
          <button
            className={isClicked ? "active" : ""}
            onClick={this.handleAddLikes}
          >
            <div
              className={isClicked ? "heart_box2" : "heart_box"}
              style={{
                backgroundImage: `url(${HeartImg})`
              }}
            ></div>
            <div className={isClicked ? "label2" : "label"}>
              {likes}
              <span className="count">{likesNum}</span>
            </div>
          </button>
          <button
            className={isScraped ? "active2" : ""}
            onClick={this.showNotification}
          >
            <div
              className={isScraped ? "bookMark_box2" : "bookMark_box"}
              style={{
                backgroundImage: `url(${HeartImg})`
              }}
            ></div>
            <div className={isScraped ? "label2" : "label"}>
              {scrap}
              <span className="count">{scrapNum}</span>
            </div>
          </button>
        </div>
        {/* 여기부터 조심해주세요 경계선입니다
        여기부터 조심해주세요 경계선입니다
        여기부터 조심해주세요 경계선입니다 */}
        <div
          className={isScraped ? "on_scrap" : "off_scrap"}
          style={{
            top: top + "%"
          }}
        >
          <div>
            <button className="cancel">X</button>
            <div className="on">스크랩했습니다.</div>
            <div className="off">스크랩북에서 삭제했습니다</div>
          </div>
          <div>
            <a hrdf="https://_______.com">
              <div className="looking">스크랩북 보기</div>
            </a>
            <button className="folder">폴더에 담기</button>
          </div>
        </div>
      </>
    );
  }
}

export default ButtonBox;

// handleAddScrap = () => {
//   if (this.state.isScraped) {
//     this.setState({ scrapNum: this.state.scrapNum - 1 });
//   } else {
//     this.setState({ scrapNum: this.state.scrapNum + 1 });
//   }
//   this.setState({
//     isScraped: this.state.isScraped ? false : true
//   });
// };
