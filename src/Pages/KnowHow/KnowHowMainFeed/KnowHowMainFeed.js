import React from "react";
import "./KnowHowMainFeed.scss";
import Information from "../Information";
import UsersContents from "../UsersContents";
import KnowHowComments from "../KnowHowComments";
import fetchAPI from "../../../Utils/fetch";

class KnowHowMainFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main_image: {}
    };
  }

  handleComments = () => {
    fetchAPI("http://10.58.5.97:8000/test_app/housewarmingblog").then(res =>
      this.setState({
        main_image: res.result.title_image
      })
    );
  };

  componentDidMount() {
    this.handleComments();
  }

  render() {
    const { main_image } = this.state;
    return (
      <section className="main_contents">
        <div
          className="main"
          style={{ backgroundImage: `url(${main_image})` }}
        ></div>
        <Information />
        <UsersContents />
        <KnowHowComments />
      </section>
    );
  }
}

export default KnowHowMainFeed;
