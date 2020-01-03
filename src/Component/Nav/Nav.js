import React, { Component } from "react";
import "./Nav.scss";
import home_logo from "../../Images/home_logo.png";
import house_logo from "../../Images/house_logo.png";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        />
        <div className="nav">
          <div className="nav_body">
            <div className="nav_left">
              {/* <div></div> */}
              <Link to="/">
                <img
                  id="nav_main_logo"
                  className="home_logo"
                  src={home_logo}
                  alt="home_logo"
                />
              </Link>
              <div className="nav_left_btns">
                <ul className="nav_lists">
                  <li className="nav_list1">커뮤니티</li>
                  <a href="https://ohou.se/store">
                    <li id="list1" className="nav_list">
                      스토어
                    </li>
                  </a>
                  <a href="https://ohou.se/experts">
                    <li className="nav_list">전문가시공</li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="nav_right_container">
              <div className="nav_center">
                <i className="fas fa-search"></i>
                <input className="search" placeholder="오늘의집 통합검색" />
                <button className="nav_btn">글쓰기</button>
              </div>

              <div className="nav_right">
                <div className="nav_right_icon_box">
                  <div className="nav_icon_box">
                    <i className="far fa-bookmark"></i>
                  </div>
                  <div className="nav_icon_box">
                    <i className="far fa-bell"></i>
                  </div>
                  <div className="nav_icon_box">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
                <button className="nav_icon_btn" onClick={this.openModal}>
                  <div className="nav_icon_box">
                    <img
                      className="smile"
                      src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/36/36"
                      alt="smile"
                    />
                  </div>
                  <Modal
                    isOpen={this.state.isModalOpen}
                    close={this.closeModal}
                  />
                  <i className="fas fa-caret-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="category">
          <div className="category_body">
            <div className="category_left">
              <ul className="category_lists">
                <li className="category_list1">홈</li>
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
        </div>
      </>
    );
  }
}

export default Nav;
