import React, { Component } from "react";
import "./Menuicon.scss";
import menuicon1 from "../../Images/manuicon1.png";
import menuicon2 from "../../Images/manuicon2.png";
import menuicon3 from "../../Images/manuicon3.png";
import menuicon4 from "../../Images/manuicon4.png";
import menuicon5 from "../../Images/manuicon5.png";
import menuicon6 from "../../Images/manuicon6.png";
import menuicon7 from "../../Images/manuicon7.png";
import menuicon8 from "../../Images/manuicon8.png";

class Manuicon extends Component {
  render() {
    return (
      <>
        <div className="menuicon_container">
          <ul className="menuicon_lists">
            <li>
              <img className="menuicon_img" src={menuicon1} alt="menuicon1" />
              <div className="munuicon_txt">신혼가구</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon2} alt="menuicon2" />
              <div className="munuicon_txt">쇼핑하기</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon3} alt="menuicon3" />
              <div className="munuicon_txt">평수별집구경</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon4} alt="menuicon4" />
              <div className="munuicon_txt">공간별사진</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon5} alt="menuicon5" />
              <div className="munuicon_txt">시공간편상담</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon6} alt="menuicon6" />
              <div className="munuicon_txt">시공스토어</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon7} alt="menuicon7" />
              <div className="munuicon_txt">가이드북</div>
            </li>
            <li>
              <img className="menuicon_img" src={menuicon8} alt="menuicon8" />
              <div className="munuicon_txt">질문과답변</div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Manuicon;
