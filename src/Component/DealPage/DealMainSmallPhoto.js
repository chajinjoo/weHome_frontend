import React from "react";

export default function DealMainSmallPhoto(props) {
  return (
    <div>
      <div
        className="a"
        style={{
          backgroundImage: `url(${props.smallPhoto})`
        }}
        onMouseOver={e => props.handleHover(e)}
      ></div>
    </div>
  );
}
