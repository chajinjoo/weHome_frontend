import React from "react";
import "./KnowHowMainFeed.scss";
import Information from "../Information/Information";
import UsersContents from "../UsersContents/UsersContents";

class KnowHowMainFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: {
        url:
          "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-projects-cover_images-157683070523339811.jpg/1440/none"
      }
    };
  }

  render() {
    return (
      <section className="mainContents">
        <div
          className="main"
          style={{ backgroundImage: `url(${this.state.mainImg.url})` }}
        ></div>
        <Information />
        <UsersContents />
      </section>
    );
  }
}

export default KnowHowMainFeed;
