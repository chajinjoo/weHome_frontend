import React, { Component } from "react";
import TodayDealCenter from "./TodayDealCenter";
import TodayDealData from "./TodayDealData";
import "./TodayDeal.scss";
import fetchAPI from "../../Utils/fetch";
import { TOKEN } from "../../Config/constants";
import { Link } from "react-router-dom";

let token = localStorage.getItem(TOKEN) || "";

class TodayDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodayDealData: []
    };
  }

  componentDidMount() {
    fetchAPI("http://10.58.5.97:8000/test_app/maintodaydeal", {
      headers: {
        Authorization: token
      }
    }).then(res => {
      this.setState({
        TodayDealData: res.result
      });
    });
  }

  render() {
    // if (!this.state.TodayDealData) return <></>;
    return (
      <section className="deal_section">
        <div className="total_deal_title">
          <div className="today_deal_title">오늘의 딜</div>
          <div className="today_deal_title2">더보기</div>
        </div>
        <Link to="/dealpage" style={{ textDecoration: "none", color: "black" }}>
          <div className="total_deal_box">
            {this.state.TodayDealData.map((
              el //this.state.TodayDealData.map
            ) => (
              <TodayDealCenter
                key={el.num}
                // data={el}
                img={el.deal_img}
                subtitle={el.deal_sub_title}
                title={el.deal_title}
                sale={el.deal_sale}
                price={el.deal_price}
                stars={el.deal_stars}
                review={el.deal_review}
              />
            ))}
          </div>
        </Link>
      </section>
    );
  }
}

export default TodayDeal;
