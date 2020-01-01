import React, { Component } from "react";
import "./TodayDealCenter.scss";

class StoryDealCenter extends Component {
  render() {
    const { img, subtitle, title, sale, price, stars, review } = this.props;
    return (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        />
        <div className="today_deal_main">
          <div className="today_deal_container">
            <div className="today_deal_content">
              <div className="today_deal_box">
                <img className="deal_img" src={img} alt="deal_img" />
              </div>
            </div>
          </div>
          <div className="today_deal_sub">
            <div className="deal_sub_title">{subtitle}</div>
            <div className="deal_title">{title}</div>
            <div className="deal_total">
              <div className="deal_sale">{sale}</div>
              <div className="deal_price">{price}</div>
            </div>
            <div className="deal_score">
              <i className="fas fa-star"></i>
              <div className="deal_stars">{stars}</div>
              <div className="deal_review">{review}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StoryDealCenter;
