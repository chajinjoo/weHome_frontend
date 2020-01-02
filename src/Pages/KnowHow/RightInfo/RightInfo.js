import React from "react";
import OtherPeople from "../OtherPeople";
import RightMainBox from "../RightMainBox";
import "./rightinfo.scss";
import fetchAPI from "../../../Utils/fetch";

class RightInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetchAPI("http://localhost:3000/data/rightInfo.json").then(res => {
      this.setState({
        data: res
      });
    });
    // console.log(this.state.data);
  }

  render() {
    if (!this.state.data.data) return <></>;

    const {
      title,
      subTitle,
      date,
      shareNum
    } = this.state.data.data.infoMessage;
    const {
      url,
      instaLink,
      otherId,
      otherLink
    } = this.state.data.data.otherPeople;

    return (
      <div className="qwer">
        <div className="right_info">
          <RightMainBox
            title={title}
            subTitle={subTitle}
            date={date}
            shareNum={shareNum}
          />
          <OtherPeople
            url={url}
            instaLink={instaLink}
            otherId={otherId}
            otherLink={otherLink}
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
