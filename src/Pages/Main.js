import React from "react";
import "../Pages/Main.scss";
import Nav from "../Component/Nav/Nav";
import MainHeader from "../Component/MainHeader/MainHeader";
import Manuicon from "../Component/Menuicon/Menuicon";
import Footer from "../Component/Footer/Footer";
import TodayStory from "../Component/TodayStory/TodayStory";

function Main() {
  return (
    <div>
      <Nav />
      <MainHeader />
      <Manuicon />
      <TodayStory />
      <Footer />
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </div>
  );
}

export default Main;
