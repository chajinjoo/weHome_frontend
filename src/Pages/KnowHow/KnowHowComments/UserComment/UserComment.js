import React from "react";
import "./Usercomment.scss";
import lineHeart from "../../../../Images/heart.png";
import fillHeart from "../../../../Images/fillHeart.png";

class UserComment extends React.Component {
  render() {
    return (
      <div className="user_comment">
        <img src={this.props.Usercomment.userPhoto} alt="userimg" />
        <div className="user_comment_box">
          <div className="user_comment_top">
            <span>{this.props.Usercomment.userId}</span>
            <span>{this.props.Usercomment.contents_text}</span>
          </div>
          <div className="user_comment_bottom">
            <span className="comment_time">
              {this.props.Usercomment.time}시간 전
            </span>
            <img className="heart_img" src={lineHeart} alt="하트" />
            <span className="comment_likes">좋아요</span>
            <button>신고</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserComment;
