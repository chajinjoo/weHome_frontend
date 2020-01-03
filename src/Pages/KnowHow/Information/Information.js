import React from "react";
import "./Information.scss";
import SubInformation from "./SubInformation";
import fetchAPI from "../../../Utils/fetch";

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [],
      userInfo: "© hanna"
    };
  }

  // componentDidMount = () => {
  //   fetchAPI("http://localhost:3000/data/information.json").then(data => {
  //     // console.log(data);
  //     this.setState({
  //       information: data
  //     });
  //   });
  // };
  handleComments = () => {
    fetchAPI("http://10.58.5.97:8000/test_app/housewarmingblog").then(res =>
      this.setState({
        information: res.result.house_info
      })
    );
  };

  componentDidMount() {
    this.handleComments();
  }

  render() {
    const { userInfo, information } = this.state;
    const posts = information.map((post, index) => (
      <SubInformation key={index} information={post} />
    ));

    return (
      <div className="information_wrap">
        <div className="information">
          <div className="copy_right">&nbsp;{userInfo}</div>
          {posts}
        </div>
      </div>
    );
  }
}

export default Information;
