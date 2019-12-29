import React from "react";
import "../../Styles/knowhow.scss";
import RightInfo from "./RightInfo";
import KnowHowMainFeed from "./KnowHowMainFeed";
import Nav from "../../Component/Nav/Nav";

class KnowHow extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="knowHowPage">
          <main className="contents">
            <KnowHowMainFeed />
            <RightInfo />
          </main>
        </div>
      </>
    );
  }
}

export default KnowHow;
