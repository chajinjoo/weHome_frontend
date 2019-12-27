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
      <section className="today_story_section">
        <div>오늘의 스토리</div>
        {TodayStoryData.map(el => (
          <TodayStory
            key={el.num}
            // data={el}
            img={el.data_img}
            title={el.data_title}
            user_img={el.data_user_img}
            user={el.data_user}
          />
        ))}
      </section>
      <Footer />
      {/* <h1>하하하하하하하 우리는 위홈</h1> */}
    </div>
  );
}

export default Main;
