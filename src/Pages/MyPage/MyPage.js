import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import "../MyPage/MyPage.scss";
import MyPageData from "./MyPageData";
import MyPageRight from "./MyPageRight";

class MyPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="mypage_container">
          <ul className="mypage_lists">
            <li className="mypage_list1">프로필</li>
            <li className="mypage_list">나의쇼핑</li>
            <li className="mypage_list">나의리뷰</li>
            <li className="mypage_list">설정</li>
          </ul>
        </div>

        <div className="mypage_sub_container">
          <ul className="mypage_sub_lists">
            <li className="mypage_sub_list">모두보기</li>
            <li className="mypage_sub_list">사진</li>
            <li className="mypage_sub_list">집들이</li>
            <li className="mypage_sub_list">노하우</li>
            <li className="mypage_sub_list">질문과답변</li>
            <li className="mypage_sub_list">스크랩북</li>
            <li className="mypage_sub_list1">좋아요</li>
            <li className="mypage_sub_list">나의활동</li>
          </ul>
        </div>

        <div className="mypage_main_container">
          <div className="mypage_row">
            <div className="mypage_user_pic_box">
              <img
                className="mypage_user_pic"
                src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/144/144"
                alt="mypage_user_pic"
              />
            </div>
            <div className="mypage_user_info">
              <div className="info_name">weHome</div>
            </div>
          </div>
          <div className="mypage_like_feed">
            <div className="mypage_like_content">
              {MyPageData.map(el => (
                <MyPageRight key={el.num} like_img={el.like_img} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MyPage;
