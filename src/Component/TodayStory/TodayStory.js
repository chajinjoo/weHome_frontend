import React, { Component } from "react";
import StoryLeft from "./StoryLeft";
import StoryRight from "./StoryRight";
import TodayStoryData from "./TodayStoryData";
import "./TodayStory.scss";

class TodayStory extends Component {
  render() {
    return (
      <section className="story_section">
        <div className="story_title">오늘의 스토리</div>
        <div className="total_story_box">
          <div className="storyleft_box">
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
          </div>
          <div className="storyright_box">
            <StoryRight />
          </div>
        </div>
      </section>
    );
  }
}

export default TodayStory;
