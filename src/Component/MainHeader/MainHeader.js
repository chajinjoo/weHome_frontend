import React, { Component } from "react";
import "./MainHeader.scss";
import zoom from "../../Images/zoom1.png";
import Sidepic from "./Sidepic";

class MainHeader extends Component {
  render() {
    return (
      <>
        <div className="home_header">
          <div className="center_container">
            <div className="header_center">
              <img className="header_center_img" src={zoom} alt="zoom" />
            </div>
            <div className="center_img_txt1">결과는 대만족!</div>
            <div className="center_img_txt2">
              예산 부족으로 도전한 반셀프 인테리어
            </div>
            <div className="center_img_txt3">weHome</div>
            <img
              className="center_pic"
              src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-users-profile_images1565716598_njI68J.jpeg/36/36"
              alt="center_pic"
            />
            <button className="center_btn">보러가기</button>
          </div>
          <Sidepic />
        </div>
      </>
    );
  }
}

export default MainHeader;
