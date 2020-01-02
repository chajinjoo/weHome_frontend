import React from "react";
import DealDetetailPage from "./DealDetailPage/DealDetailPage";
import "./DealMainPage.scss";

class DealMainPage extends React.Component {
  render() {
    return (
      <div className="detail_roof">
        <div className="detail_container_box">
          <DealDetetailPage />
        </div>
      </div>
    );
  }
}
export default DealMainPage;
