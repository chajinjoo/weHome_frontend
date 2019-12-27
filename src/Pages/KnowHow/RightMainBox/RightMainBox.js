import React from "react";
import ButtonBox from "../ButtonBox";
import ShareBox from "../ShareBox";
import "./RightMainBox.scss";
import HeartImg from "../../../Images/wehomeIconBox.png";

function RightMainBox(props) {
  return (
    <div className="right_main_box">
      <div className="info">
        <p>{props.title}</p>
        <a href="https://___.com">신고</a>
      </div>
      <div className="right_title">
        <p>{props.subTitle}</p>
      </div>
      <p className="create_at">{props.date}</p>
      <ButtonBox
        HeartImg={HeartImg}
        likes="좋아요"
        likesNum={10}
        scrap="스크랩"
        scrapNum={50}
      />
      <p className="sharing">
        공유하기 <span>{props.shareNum}회</span>
      </p>
      <ShareBox />
    </div>
  );
}

export default RightMainBox;
