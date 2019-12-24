import React, { Component } from "react";
import "./Nav.scss";
import home_logo from "../../Images/home_logo.png";
import zzim from "../../Images/zzim.png";
import house_logo from "../../Images/house_logo.png";

class Nav extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        />
        <div className="nav">
          <div className="nav_left">
            <img className="home_logo" src={home_logo} alt="home_logo" />
            <ul className="nav_lists">
              <li className="nav_list">커뮤니티</li>
              <li className="nav_list">스토어</li>
              <li className="nav_list">전문가시공</li>
            </ul>
            {/* <span className="comu">커뮤니티</span>
            <span className="store">스토어</span>
            <span className="make">전문가시공</span> */}
          </div>

          <div className="nav_center">
            <i className="fas fa-search"></i>
            <input className="search" placeholder="오늘의집 통합검색" />
            <button className="btn">글쓰기</button>
          </div>
          <div className="nav_right">
            <div className="nav_right"></div>
            <img className="zzim" src={zzim} alt="zzim" />
            <span className="txt">로그인</span>
            <span className="border_left">⠀</span>
            <span className="txt">회원가입</span>
          </div>
        </div>

        <div className="category">
          <div>
            <ul className="category_lists">
              <li className="category_list">홈</li>
              <li className="category_list">사진</li>
              <li className="category_list">집들이</li>
              <li className="category_list">노하우</li>
              <li className="category_list">전문가집들이</li>
              <li className="category_list">셀프가이드</li>
              <li className="category_list">질문과답변</li>
              <li className="category_list">이벤트</li>
            </ul>
          </div>
          <div className="category_right">
            <img className="house_logo" src={house_logo} alt="house_logo" />
            <span className="download">앱다운로드</span>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
