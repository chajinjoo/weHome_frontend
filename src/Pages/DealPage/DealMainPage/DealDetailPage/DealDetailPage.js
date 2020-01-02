import React from "react";
import DealSubSelect from "../DealSubSelect/DealSubSelect";
import "./DealDetailPage.scss";
import fetchAPI from "../../../../Utils/fetch";

class DealDetetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main_image: []
    };
  }
  componentDidMount() {
    fetchAPI("http://localhost:3000/data/detailmain.json").then(res => {
      this.setState({
        main_image: res
      });
    });
  }

  render() {
    if (!this.state.main_image.main_img) return <>dkdkdk</>;

    const img_box = this.state.main_image.main_img.map((el, index) => (
      <img src={el.url} alt="dd"></img>
    ));
    return (
      <>
        <div className="detali_main_feeds">{img_box}</div>
        <div className="select_sub_container">
          <DealSubSelect />
        </div>
      </>
    );
  }
}

export default DealDetetailPage;
