import React from "react";
import "./DealPageTitle.scss";
import MainDealPhoto from "./MainDealPhoto/MainDealPhoto";
import MainDealInfo from "./MainDealInfo/MainDealInfo";
import MainDealSelect from "./MainDealSelect/MainDealSelect";
import DealProductNav from "./DealProductNav/DealProductNav";
import DealDetetailPage from "../DealMainPage/DealDetailPage/DealDetailPage";
import DealMainPage from "../DealMainPage/DealMainPage";

export default function DealPageTitle() {
  return (
    <div className="deal_roof">
      <div className="deal_rooftop">
        <div className="deal_page_title">
          <div className="deal_page_category">
            <span className="deal_category">패브릭 > </span>
            <span className="deal_category">침구 > </span>
            <span className="deal_category">차렵이불</span>
            <div className="deal_main_photo">
              <div className="deal_really_main_photo">
                <MainDealPhoto />
              </div>
              <div className="deal_main_info">
                <MainDealInfo />
                <MainDealSelect
                  info_select="info_select"
                  select_confirm="select_confirm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="qwe">
        <div className="deal_product_navgation">
          <DealProductNav />
        </div>
        <DealMainPage />
      </div>
    </div>
  );
}
