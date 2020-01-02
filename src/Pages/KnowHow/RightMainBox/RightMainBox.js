import React from "react";
import ButtonBox from "../ButtonBox";
import ShareBox from "../ShareBox";
import "./RightMainBox.scss";
import HeartImg from "../../../Images/wehomeIconBox.png";

function RightMainBox({ title, subTitle, date, shareNum }) {
  return (
    <div className="right_main_box">
      <div className="info">
        <p>{title}</p>
        <a href="https://___.com">신고</a>
      </div>
      <div className="right_title">
        <p>{subTitle}</p>
      </div>
      <p className="create_at">{date}</p>
      <ButtonBox
        HeartImg={HeartImg}
        likes="좋아요"
        likesNum={10}
        scrap="스크랩"
        scrapNum={50}
      />
      <p className="sharing">
        공유하기 <span>{shareNum}회</span>
      </p>
      <ShareBox />
    </div>
  );
}

export default RightMainBox;
