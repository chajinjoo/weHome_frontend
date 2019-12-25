import React from "react";
import "../Pages/Main.scss";
import Nav from "../Components/Nav/Nav";
import MainHeader from "../Components/MainHeader/MainHeader";
import Manuicon from "../Components/Menuicon/Menuicon";
import Footer from "../Components/Footer/Footer";
import TodayStory from "../Components/TodayStory/TodayStory";
import TodayStoryData from "../Components/TodayStory/TodayStoryData";

function Main() {
  return (
    <div>
      <Nav />
      <MainHeader />
      <Manuicon />
      {TodayStoryData.map((current, index) => (
        <TodayStory data={current} key={index} />
      ))}
      <Footer />
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </div>
  );
}

export default Main;
