import React from "react";
import "../Styles/knowhow.scss";
import RightInfo from "../Component/RightInfo/RightInfo";
import KnowHowMainFeed from "../Component/KnowHowMainFeed/KnowHowMainFeed";

class KnowHow extends React.Component {
  render() {
    return (
      <div className="knowHowPage">
        <main className="contents">
          <KnowHowMainFeed />
          <RightInfo />
        </main>
      </div>
    );
  }
}

export default KnowHow;
