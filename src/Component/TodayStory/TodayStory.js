import React, { Component } from "react";
import StoryLeft from "./StoryLeft";
import StoryRight from "./StoryRight";
import TodayStoryData from "./TodayStoryData";
import "./TodayStory.scss";
import { Link } from "react-router-dom";
// import fetchAPI from "../../Utils/fetch";

class TodayStory extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     TodayStoryData: []
  //   };
  // }

  // componentDidMount() {
  //   fetchAPI("http://10.58.1.56:8000/test_app/maintodaystory").then(res => {
  //     this.setState({
  //       TodayStoryData: res.result
  //     });
  //   });
  // }

  render() {
    return (
      <section className="story_section">
        <div className="story_title">오늘의 스토리</div>
        <div className="total_story_box">
          <Link
            to="/knowhow"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="storyleft_box">
              {TodayStoryData.map((
                el //this.state.TodayStoryData.map
              ) => (
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
          </Link>
          <div className="storyright_box">
            <StoryRight />
          </div>
        </div>
      </section>
    );
  }
}

export default TodayStory;
