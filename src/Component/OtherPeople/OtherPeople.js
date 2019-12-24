import React from "react";
import "./OtherPeople.scss";

class OtherPeople extends React.Component {
  render() {
    return (
      <div className="otherPeople">
        <div>
          <a href={this.props.instaLink}>
            <div
              className="otherPhoto"
              style={{
                backgroundImage: `url(${this.props.url})`
              }}
            ></div>
          </a>

          <div className="otherUser">
            <p>
              <a href={this.props.instaLink}>{this.props.otherId}</a>
            </p>
            <p>
              <a className="linked" href={this.props.instaLink}>
                {this.props.otherLink}
              </a>
            </p>
          </div>
        </div>
        <button>팔로우</button>
      </div>
    );
  }
}

export default OtherPeople;
