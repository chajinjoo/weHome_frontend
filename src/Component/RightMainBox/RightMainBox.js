import React from "react";
import ButtonBox from "../ButtonBox/ButtonBox";
import ShareBox from "../ShareBox/ShareBox";
import "./RightMainBox.scss";
import LinkImg from "../../Images/linkIcon.png";
import HeartImg from "../../Images/wehomeIconBox.png";

class RightMainBox extends React.Component {
  render() {
    return (
      <div className="rightMainBox">
        <div className="info">
          <p>{this.props.title}</p>
          <a href="https://___.com">신고</a>
        </div>
        <div className="rightTitle">
          <p>{this.props.subTitle}</p>
        </div>
        <p className="create-at">{this.props.date}</p>
        <ButtonBox
          HeartImg={HeartImg}
          likes="좋아요"
          likesNum={10}
          scrap="스크랩"
          scrapNum={50}
        />
        <p className="sharing">
          공유하기 <span>{this.props.shareNum}회</span>
        </p>
        <ShareBox LinkImg={LinkImg} />
      </div>
    );
  }
}

export default RightMainBox;
