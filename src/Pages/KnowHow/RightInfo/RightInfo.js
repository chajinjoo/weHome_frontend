import React from "react";
import OtherPeople from "../OtherPeople";
import RightMainBox from "../RightMainBox";
import "./rightinfo.scss";

class RightInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherPeople: {
        url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-users-profile_images1570975365_.jpeg/320/320",
        otherId: "2mazi",
        otherLink: "인스타그램 @_ms.im__",
        instaLink: "https://___.com"
      },
      infoMessage: {
        title: "온라인집들이",
        subTitle: "매일 호캉스를 즐기는 기분으로!",
        date: "2019년 12월 23일 10:05",
        shareNum: 12
      }
    };
  }

  render() {
    return (
      <div>
        <div className="right_info">
          <RightMainBox
            title={this.state.infoMessage.title}
            subTitle={this.state.infoMessage.subTitle}
            date={this.state.infoMessage.date}
            shareNum={this.state.infoMessage.shareNum}
          />
          <OtherPeople
            url={this.state.otherPeople.url}
            instaLink={this.state.otherPeople.instaLink}
            otherId={this.state.otherPeople.otherId}
            otherLink={this.state.otherPeople.otherLink}
          />
          <div className="all_product">
            <a href="https://___.com">이 집의 모든 제품 보기</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RightInfo;
