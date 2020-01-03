import React from "react";
import "./OtherPeople.scss";

function OtherPeople({ instaLink, url, otherId, otherLink }) {
  return (
    <div className="other_people">
      <div>
        <a href={instaLink}>
          <div
            className="other_photo"
            style={{
              backgroundImage: `url(${url})`
            }}
          ></div>
        </a>

        <div className="other_user">
          <p>
            <a href={instaLink}>{otherId}</a>
          </p>
          <p>
            <a className="linked" href={instaLink}>
              {otherLink}
            </a>
          </p>
        </div>
      </div>
      <button>팔로우</button>
    </div>
  );
}

export default OtherPeople;
