import React from "react";
import ProductNav from "./ProductNav";
import "./DealProductNav.scss";

const info = [
  { linked: "#", id: "aaa", contents: "상품정보" },
  { linked: "#", id: "bbb", contents: "리뷰" },
  { linked: "#", id: "ccc", contents: "문의" },
  { linked: "#", id: "ddd", contents: "배송/환불" },
  { linked: "#", id: "eee", contents: "추천" }
];
function DealProductNav() {
  const Navs = info.map((nav, index) => <ProductNav key={index} info={nav} />);
  return (
    <>
      <div className="lier_box"></div>
      {Navs}
    </>
  );
}

export default DealProductNav;
