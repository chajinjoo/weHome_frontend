import React from "react";
import OtherPeople from "../OtherPeople";
import RightMainBox from "../RightMainBox";
import "./rightinfo.scss";
import fetchAPI from "../../../Utils/fetch";
import { TOKEN } from "../../../Config/constants";

let token = localStorage.getItem(TOKEN) || "";
class RightInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  // componentDidMount() {
  //   fetchAPI("http://localhost:3000/data/rightInfo.json").then(res => {
  //     this.setState({
  //       data: res
  //     });
  //   });
  //   // console.log(this.state.data);
  // }

  handleComments = () => {
    fetchAPI("http://10.58.5.97:8000/test_app/housewarmingblog", {
      header: {
        Authorization: token
      }
    }).then(res =>
      this.setState({
        data: res.result
      })
    );
  };

  componentDidMount() {
    this.handleComments();
  }

  render() {
    if (!this.state.data) return <>"dfasd"</>;
    console.log(this.state.data);
    const {
      category,
      title,
      shared_num,
      created_at,
      writer_id,
      writer_profile_image
    } = this.state.data;
    // const {
    //   title,
    //   subTitle,
    //   date,
    //   shareNum
    // } = this.state.data.data.infoMessage;
    // const {
    //   url,
    //   instaLink,
    //   otherId,
    //   otherLink
    // } = this.state.data.data.otherPeople;

    return (
      <div className="qwer">
        <div className="right_info">
          <RightMainBox
            title={category}
            subTitle={title}
            date={created_at}
            shareNum={shared_num}
          />
          <OtherPeople
            url={writer_profile_image}
            // instaLink={instaLink}
            otherId={writer_id}
            // otherLink={otherLink}
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
