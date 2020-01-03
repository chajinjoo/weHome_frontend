import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import StoryLeft from "./StoryLeft";
import StoryRight from "./StoryRight";
import TodayStoryData from "./TodayStoryData";
import "./TodayStory.scss";
import { Link } from "react-router-dom";
import fetchAPI from "../../Utils/fetch";
import { TOKEN } from "../../Config/constants";

let token = localStorage.getItem(TOKEN) || "";

class TodayStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodayStoryData: []
    };
  }

  componentDidMount() {
    fetchAPI("http://10.58.5.97:8000/test_app/maintodaystory", {
      headers: {
        Authorization: token
      }
    }).then(res => {
      this.setState({
        TodayStoryData: res.result
      });
    });
  }

  // goToKnowhow = () => {
  //   fetch("http://10.58.1.56:8000/", {
  //     method: "POST",
  //     headers: {
  //       Authorization: token
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       this.props.history.push("/knowhow");
  //     });
  // };

  // goToKnowhow = () => {
  //   // console.log(this.props.history);
  //   this.props.history.push("/knowhow");
  // };

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
              {this.state.TodayStoryData.map((
                el //this.state.TodayStoryData.map
              ) => (
                <StoryLeft
                  key={el.num}
                  // data={el}
                  img={el.data_img}
                  title={el.data_title}
                  user_img={el.data_user_img}
                  user={el.data_user}
                  // onClick={() => this.goToKnowhow()
                  // }
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

export default withRouter(TodayStory);
