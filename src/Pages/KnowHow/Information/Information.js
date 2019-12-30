import React from "react";
import "./Information.scss";
import SubInformation from "./SubInformation";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [
        { label: "건물", value: "아파트" },
        { label: "평수", value: "24평" },
        { label: "스타일", value: "미니멀&심플, 내추럴, 한국&아시아" },
        { label: "작업", value: "셀프•DIY" },
        { label: "분야", value: "홈스타일링" },
        { label: "기간", value: "2개월" },
        { label: "예산", value: "800 만원" },
        { label: "가족형태", value: "신혼부부" },
        { label: "세부공정", value: "주방리모델링,조명시공" },
        { label: "지역", value: "경기도 수원시 영통구 영통동" }
      ],
      userInfo: "© hanna"
    };
  }

  render() {
    const posts = this.state.information.map((post, index) => (
      <SubInformation key={index} information={post} />
    ));

    return (
      <div className="information_wrap">
        <div className="information">
          <div className="copy_right">&nbsp;{this.state.userInfo}</div>
          {posts}
        </div>
      </div>
    );
  }
}

export default Information;
