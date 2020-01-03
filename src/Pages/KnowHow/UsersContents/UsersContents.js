import React from "react";
import "./UsersContent.scss";
import fetchAPI from "../../../Utils/fetch";

class UsersContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
  }
  handleComments = () => {
    fetchAPI("http://10.58.5.97:8000/test_app/housewarmingblog").then(res =>
      this.setState({
        html: res.result.contents
      })
    );
  };

  componentDidMount() {
    this.handleComments();
  }

  render() {
    const { html } = this.state;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      ></div>
    );
  }
}

export default UsersContents;
