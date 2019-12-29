import React from "react";
import "./KnowHowMainFeed.scss";
import Information from "../Information";
import UsersContents from "../UsersContents";
import KnowHowComments from "../KnowHowComments";

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
      <section className="main_contents">
        <div
          className="main"
          style={{ backgroundImage: `url(${this.state.mainImg.url})` }}
        ></div>
        <Information />
        <UsersContents />
        <KnowHowComments />
      </section>
    );
  }
}

export default KnowHowMainFeed;
