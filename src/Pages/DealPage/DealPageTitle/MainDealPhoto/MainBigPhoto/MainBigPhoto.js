import React from "react";

export default function MainBigPhoto(props) {
  return (
    <div className="deal_main_bigbox">
      <div
        style={{
          backgroundImage: `url(${props.mainBigPhoto})`
        }}
        className="deal_main_big_photo"
      ></div>
    </div>
  );
}
