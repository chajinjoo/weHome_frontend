import React from "react";
import "./Usercomment.scss";

class UserComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      like: "좋아요",
      hate: "좋아요 취소",
      likeHeartNum: 5
    };
  }

  handleLike = () => {
    const { isLiked, likeHeartNum } = this.state;
    const offSet = isLiked ? -1 : 1;
    this.setState({
      likeHeartNum: likeHeartNum + offSet,
      isLiked: !isLiked
    });
  };

  render() {
    const { userPhoto, userId, contents_text, time } = this.props.Usercomment;
    const { isLiked, like, hate, likeHeartNum } = this.state;
    // console.log(this.props.Usercomment);
    return (
      <div className="user_comment">
        <img src={userPhoto} alt="userimg" />
        <div className="user_comment_box">
          <div className="user_comment_top">
            <span>{userId}</span>
            <span>{contents_text}</span>
          </div>
          <div className="user_comment_bottom">
            <span className="comment_time">{time}시간 전</span>
            <div
              onClick={this.handleLike}
              className={isLiked ? "fill_heart_img" : "line_heart_img"}
            ></div>
            <span className="comment_likes_num">{likeHeartNum}</span>
            <span className="comment_likes">
              <button className="comment_like_btn">
                {isLiked ? hate : like}
              </button>
            </span>
            <button onClick={this.props.handleRemove}>삭제</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserComment;
