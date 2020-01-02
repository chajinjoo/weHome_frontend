import React from "react";
import "./DealProductNav.scss";

export default function ProductNav({ info }) {
  return (
    <div className="product_nav_menu">
      <a href={info.linked}>
        <p id={info.id}>{info.contents}</p>
      </a>
    </div>
  );
}
