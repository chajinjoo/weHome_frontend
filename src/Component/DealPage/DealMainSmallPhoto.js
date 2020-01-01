import React from "react";

export default function DealMainSmallPhoto(props) {
  return (
    <div
      className="a"
      style={{
        backgroundImage: `url(${props.smallPhoto})`
      }}
      onMouseOver={props.handleHover}
    ></div>
  );
}
