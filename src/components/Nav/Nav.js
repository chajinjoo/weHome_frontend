import React, { Component } from "react";
import "./Nav.scss";
import home_logo from "../../Images/home_logo.png";
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
              <li id="list1" className="nav_list">
                스토어
              </li>
              {/* <ul className="store_lists">
                <li className="store_list">스토어홈</li>
                <li className="store_list">카테고리</li>
                <li className="store_list">신혼가구</li>
                <li className="store_list">베스트</li>
                <li className="store_list">특가</li>
                <li className="store_list">결산sale</li>
                <li className="store_list">리퍼브</li>
                <li className="store_list">기획전</li>
              </ul> */}
              <li className="nav_list">전문가시공</li>
            </ul>
          </div>

          <div className="nav_center">
            <i className="fas fa-search"></i>
            <input className="search" placeholder="오늘의집 통합검색" />

            <button className="nav_btn">글쓰기</button>
          </div>
          <div className="nav_right">
            <div className="nav_right"></div>
            <div className="cart_box">
              <svg
                t="1577326638974"
                className="cart_logo"
                viewBox="0 0 1053 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11719"
                width="200"
                height="200"
              >
                <path
                  d="M969.202121 163.356787H245.956085l-9.785071-60.962843A122.147235 122.147235 0 0 0 115.020749 0.001477H41.577324a41.429624 41.429624 0 1 0 0 82.896174h73.443425a42.980466 42.980466 0 0 1 41.614248 35.373957L253.30412 670.481975v3.69248a82.342302 82.342302 0 0 0 79.536017 63.39988h565.392521a81.234558 81.234558 0 0 0 79.536017-67.055435l73.443425-409.606794c0-3.69248 2.437037-9.748147 2.437037-14.76992a86.662503 86.662503 0 0 0-84.447016-82.896173z m-72.187981 491.099826H331.621619L261.870674 244.849818h708.549966l-73.443425 409.606795zM307.177402 777.563892a123.10728 123.10728 0 1 0 123.587302 123.10728 123.808851 123.808851 0 0 0-123.624227-122.922656z m0 163.35531a41.983496 41.983496 0 0 1-41.614248-41.466549 41.171151 41.171151 0 0 1 41.614248-41.429624 41.429624 41.429624 0 1 1 0 82.896173z m595.966254-163.35531a123.10728 123.10728 0 1 0 123.587302 123.10728 123.808851 123.808851 0 0 0-123.624227-122.922656z m0 163.35531a41.983496 41.983496 0 0 1-41.614248-41.466549 41.614248 41.614248 0 0 1 83.228497 0 41.983496 41.983496 0 0 1-41.651174 41.651173z"
                  p-id="11720"
                  fill="#707070"
                ></path>
              </svg>
            </div>
            <span className="nav_txt">로그인</span>
            <span className="border_left">⠀</span>
            <span className="nav_txt">회원가입</span>
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
