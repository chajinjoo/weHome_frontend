import React from "react";
import "./MainDealPhoto.scss";
import DealMainSmallPhoto from "../../../../Component/DealPage/DealMainSmallPhoto";
import fetchAPI from "../../../../Utils/fetch";
import MainBigPhoto from "./MainBigPhoto/MainBigPhoto";

class MainDealPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallphoto: [],
      bigphoto: [],
      currentPic: {}
    };
  }
  componentDidMount() {
    fetchAPI("http://localhost:3000/data/dealmain.json").then(res => {
      this.setState({
        smallphoto: res.dealMainSmallPhoto,
        bigphoto: res.dealMainBigPhoto,
        currentPic: res.dealMainBigPhoto[0]
      });
    });
  }

  handleHover = id => {
    const currentPic =
      this.state.bigphoto.filter(photo => {
        return photo.id === id;
      })[0] || {};
    this.setState({
      currentPic
    });
  };

  render() {
    const smallPhotos = this.state.smallphoto.map(photo => (
      <DealMainSmallPhoto
        key={photo.id}
        smallPhoto={photo.url}
        handleHover={() => {
          this.handleHover(photo.id);
        }}
      />
    ));
    return (
      <>
        <div className="deal_main_small_photo">{smallPhotos}</div>
        <MainBigPhoto mainBigPhoto={this.state.currentPic.url} />
      </>
    );
  }
}

export default MainDealPhoto;
