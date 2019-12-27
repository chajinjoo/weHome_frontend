import React from "react";
import StoryLeft from "./StoryLeft";
import TodayStoryData from "./TodayStoryData";

function TodayStory() {
  return (
    <section className="today_story_section">
      <div>오늘의 스토리</div>
      {TodayStoryData.map(el => (
        <StoryLeft
          key={el.num}
          // data={el}
          img={el.data_img}
          title={el.data_title}
          user_img={el.data_user_img}
          user={el.data_user}
        />
      ))}
    </section>
  );
}

export default TodayStory;
