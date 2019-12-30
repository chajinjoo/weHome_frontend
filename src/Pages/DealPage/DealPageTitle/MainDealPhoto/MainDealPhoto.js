import React from "react";
import "./MainDealPhoto.scss";
import DealMainSmallPhoto from "../../../../Component/DealPage/DealMainSmallPhoto";
import fetchAPI from "../../../../Utils/fetch";
import MainBigPhoto from "./MainBigPhoto/MainBigPhoto";

class MainDealPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallphoto: {},
      bigphoto: {}
    };
  }
  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealmain.json").then(res => {
      this.setState({
        smallphoto: res,
        bigphoto: res.dealMainBigPhoto[0].url
      });
    });
    // console.log(this.state.smallphoto, "sdkf");
  }

  handleHover = e => {
    console.dir(e.target.offsetTop);
    console.dir(e.target);
    // const a =
    // if (e.target.offsetTop === 199) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[0].url
    //   });
    // } else if (e.target.offsetTop === 263) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[1].url
    //   });
    // } else if (e.target.offsetTop === 327) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[2].url
    //   });
    // } else if (e.target.offsetTop === 391) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[3].url
    //   });
    // } else if (e.target.offsetTop === 455) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[4].url
    //   });
    // } else if (e.target.offsetTop === 519) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[5].url
    //   });
    // } else if (e.target.offsetTop === 583) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[6].url
    //   });
    // } else if (e.target.offsetTop === 647) {
    //   this.setState({
    //     bigphoto: this.state.bigphoto[7].url
    //   });
    // }
  };

  render() {
    if (
      !this.state.smallphoto.dealMainSmallPhoto &&
      !this.state.smallphoto.dealMainBigPhoto
    )
      return <></>;

    const smallPhotos = this.state.smallphoto.dealMainSmallPhoto.map(photo => (
      <DealMainSmallPhoto
        key={photo.id}
        smallPhoto={photo.url}
        handleHover={this.handleHover}
      />
    ));
    console.log(this.state.bigphoto);
    return (
      <>
        <div className="deal_main_small_photo">{smallPhotos}</div>
        <MainBigPhoto mainBigPhoto={this.state.bigphoto} />
      </>
    );
  }
}

export default MainDealPhoto;
