import React from "react";
import LinkImg from "../../../../Images/linkIcon.png";

function LinkedIcon({ shareBox }) {
  return (
    <a
      href={shareBox.url}
      className={shareBox.class}
      style={{
        backgroundImage: `url(${LinkImg})`
      }}
    >
      ____
    </a>
  );
}

export default LinkedIcon;
