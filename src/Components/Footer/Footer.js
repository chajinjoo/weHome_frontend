import React, { Component } from "react";
import "./Footer.scss";
import apple from "../../Images/apple.png";
import facebook_logo from "../../Images/facebook-logo.png";
import google_play from "../../Images/google-play.png";
import instagram_logo from "../../Images/instagram-logo.png";
import kakaostory from "../../Images/kakaostory.png";
import naverstory from "../../Images/naverstory.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="layout_footer">
          <div className="layout_footer_content">
            <div className="footer_top">
              <div className="footer_cs">
                <div className="footer_cs1">고객센터 ></div>
                <div className="footer_cs2">1670-0876</div>
                <div className="footer_cs3">
                  평일 10:00~17:00 (점심시간 12:00~13:00 / 주말&공휴일 제외)
                </div>
              </div>
              <div className="footer_outbound">
                <img src={apple} alt="apple" />
                <img src={google_play} alt="google_play" />
                <img src={kakaostory} alt="kakaostory" />
                <img src={facebook_logo} alt="facebook_logo" />
                <img src={instagram_logo} alt="instagram_logo" />
                <img src={naverstory} alt="naverstory" />
              </div>
            </div>
            <ul className="footer_center">
              <li>브랜드 스토리</li>
              <li>회사소개</li>
              <li>채용정보</li>
              <li>이용약관</li>
              <li>개인정보취급방침</li>
              <li>고객센터</li>
              <li>고객의 소리</li>
              <li>전문가 등록</li>
              <li>사업자 구매회원</li>
              <li>제휴/광고 문의</li>
              <li>입점신청 문의</li>
            </ul>
            <ul className="footer_info">
              <li>상호명 : (주)버킷플레이스</li>
              <li>이메일 : contact@bucketplace.net</li>
              <li>대표이사 : 이승재</li>
              <li>사업자등록번호 : 119-86-91245</li>
              <li>통신판매업신고번호 : 제2018-서울서초-0580호</li>
              <li>주소 : 서울특별시 서초구 서초대로 398 플래티넘타워 19층</li>
            </ul>
            <div className="footer_info">
              <li>
                NICEPAY 안전거래 서비스:고객님의 안전거래를 위해 현금 결제 시,
                저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
              </li>
              <li className="footer_info1">가입 확인</li>
            </div>
            <p className="footer_copyright">
              Copyright © 2014 - 2019 by Bucketplace, Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
