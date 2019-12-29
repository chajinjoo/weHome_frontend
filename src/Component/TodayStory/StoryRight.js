import React, { Component } from "react";
import "./StoryRight.scss";

class StoryRight extends Component {
  render() {
    return (
      <>
        <div className="story_menu_box">
          <div className="story_menu1">
            <div className="story_menu_title">예쁜 집 구경하기</div>
            <div className="stoty_menu_sub">
              <div className="stoty_menu_sub1">집들이</div>
              <div className="stoty_menu_sub2">></div>
            </div>
          </div>
          <div className="story_menu2">
            <div className="story_menu_title">전문가 시공사례</div>
            <div className="stoty_menu_sub">
              <div className="stoty_menu_sub2_1">전문가 집들이</div>
              <div className="stoty_menu_sub2_2">></div>
            </div>
          </div>
          <div className="story_menu3">
            <div className="story_menu_title">인테리어 꿀팁 총 집합</div>
            <div className="stoty_menu_sub">
              <div className="stoty_menu_sub3_1">노하우</div>
              <div className="stoty_menu_sub3_2">></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StoryRight;
