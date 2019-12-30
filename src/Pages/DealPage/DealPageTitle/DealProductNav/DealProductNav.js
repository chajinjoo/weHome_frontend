import React from "react";
import ProductNav from "./ProductNav";
import "./DealProductNav.scss";

class DealProductNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { linked: "#", id: "aaa", contents: "상품정보" },
        { linked: "#", id: "bbb", contents: "리뷰" },
        { linked: "#", id: "ccc", contents: "문의" },
        { linked: "#", id: "ddd", contents: "배송/환불" },
        { linked: "#", id: "eee", contents: "추천" }
      ]
    };
  }

  render() {
    const Navs = this.state.info.map((nav, index) => (
      <ProductNav key={index} info={nav} />
    ));
    return (
      <>
        <div className="lier_box"></div>
        {Navs}
      </>
    );
  }
}

export default DealProductNav;
