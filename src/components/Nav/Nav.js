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
              <li className="nav_list">전문가시공</li>
            </ul>
          </div>

          <div className="nav_center">
            <i className="fas fa-search"></i>
            <input className="search" placeholder="오늘의집 통합검색" />
            <button className="nav_btn">글쓰기</button>
          </div>

          <div className="nav_right">
            <div className="aa">
              <i className="far fa-bookmark"></i>
            </div>
            <div className="aa">
              <i className="far fa-bell"></i>
            </div>
            <div className="aa">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <img
              className="smile"
              src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/36/36"
              alt="shopping_cart"
            />
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
