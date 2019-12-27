import React from "react";
import "./Sidepic.scss";

function Sidepic() {
  const numbers = Array(8)
    .fill()
    .map((e, i) => i + 1);
  return (
    <>
      <div className="slide">
        {numbers.map(num => (
          <input type="radio" name="pos" id={`pos${num}`} key={num} checked />
        ))}
        <ul>
          {numbers.map(num => (
            <li key={num}></li>
          ))}
        </ul>
        <p className="bullet">
          {numbers.map(num => (
            <label key={num} for={`pos${num}`}>
              {num}
            </label>
          ))}
        </p>
      </div>
    </>
  );
}

export default Sidepic;
