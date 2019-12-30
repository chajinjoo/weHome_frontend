import React from "react";
import "./KnowHowComments.scss";
import CommentsBox from "./CommentsBox";

class KnowHowComments extends React.Component {
  render() {
    return (
      <section className="comments_box">
        <CommentsBox />
      </section>
    );
  }
}

export default KnowHowComments;
