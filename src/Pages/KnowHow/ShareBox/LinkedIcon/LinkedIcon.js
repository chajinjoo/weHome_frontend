import React from "react";
import LinkImg from "../../../../Images/linkIcon.png";

function LinkedIcon(props) {
  return (
    <a
      href={props.shareBox.url}
      className={props.shareBox.class}
      style={{
        backgroundImage: `url(${LinkImg})`
      }}
    >
      ____
    </a>
  );
}

export default LinkedIcon;
