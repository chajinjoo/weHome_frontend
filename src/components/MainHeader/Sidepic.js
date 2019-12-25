import React from "react";
import "./Sidepic.scss";

function Sidepic() {
  return (
    <>
      <div className="slide">
        <input type="radio" name="pos" id="pos1" checked />
        <input type="radio" name="pos" id="pos2" checked />
        <input type="radio" name="pos" id="pos3" checked />
        <input type="radio" name="pos" id="pos4" checked />
        <input type="radio" name="pos" id="pos5" checked />
        <input type="radio" name="pos" id="pos6" checked />
        <input type="radio" name="pos" id="pos7" checked />
        <input type="radio" name="pos" id="pos8" checked />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p className="bullet">
          <label for="pos1">1</label>
          <label for="pos2">2</label>
          <label for="pos3">3</label>
          <label for="pos4">4</label>
          <label for="pos5">5</label>
          <label for="pos6">6</label>
          <label for="pos7">7</label>
          <label for="pos8">8</label>
        </p>
      </div>
    </>
  );
}

export default Sidepic;
