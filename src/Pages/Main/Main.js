import React from "react";
import "../Main/Main.scss";
import Nav from "../../Component/Nav/Nav";
import MainHeader from "../../Component/MainHeader/MainHeader";
import Manuicon from "../../Component/Menuicon/Menuicon";
import Footer from "../../Component/Footer/Footer";
import TodayStory from "../../Component/TodayStory/TodayStory";
import TodayDeal from "../../Component/TodayDeal/TodayDeal";

function Main() {
  return (
    <>
      <Nav />
      <div className="main_contents">
        <MainHeader />
        <Manuicon />
        <TodayStory />
        <TodayDeal />
        <Footer />
      </div>
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </>
  );
}

export default Main;
