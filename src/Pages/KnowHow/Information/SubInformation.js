import React from "react";

function SubInformation({ information }) {
  return (
    <div className="label_box">
      <div className="label">{information.label}</div>
      <div className="value">{information.value}</div>
    </div>
  );
}

export default SubInformation;
