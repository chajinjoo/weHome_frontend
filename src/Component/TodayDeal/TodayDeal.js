import React, { Component } from "react";
import TodayDealCenter from "./TodayDealCenter";
import TodayDealData from "./TodayDealData";
import "./TodayDeal.scss";

class TodayDeal extends Component {
  render() {
    return (
      <section className="deal_section">
        <div className="total_deal_title">
          <div className="today_deal_title">오늘의 딜</div>
          <div className="today_deal_title2">더보기</div>
        </div>
        <div className="total_deal_box">
          {TodayDealData.map(el => (
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
      </section>
    );
  }
}

export default TodayDeal;
