import React from "react";
import "./CommentsBox.scss";
import UserImg from "../../../../Images/userCommentImg.png";
import Rightarrow from "../../../../Images/Rightarrow.png";
import UserComment from "../UserComment";

class CommentsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsNum: 4,
      Usercomment: [
        {
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "asdfasdfasdfasdfasdfasdfasdfasdfasdfa"
        },
        {
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "asdfasdfasdfasdfasdfasdfasdfasdfasdfa"
        },
        {
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "asdfasdfasdfasdfasdfasdfasdfasdfasdfa"
        }
      ]
    };
  }
  render() {
    const Comments = this.state.Usercomment.map((post, index) => (
      <UserComment key={index} Usercomment={post} />
    ));
    return (
      <div>
        <div className="comment_title">
          <h1>댓글</h1>
          <span>{this.state.commentsNum}</span>
        </div>

        <form className="comment_inputBox">
          <div className="comment_user_img">
            <img src={UserImg} alt="본인프로필사진" />
          </div>
          <div className="comment_input_waraper">
            <div className="comment_input">
              <input placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"></input>
            </div>
            <div>
              <button
                className="comment_cofirm"
                style={{
                  backgroundImage: `url(${Rightarrow})`
                }}
              ></button>
            </div>
          </div>
        </form>

        <div className="comment_user_box">
          <div className="comment_user_write">
            {Comments}
            {/* <UserComment
              userPhoto={this.state.Usercomment.userPhoto}
              userId={this.state.Usercomment.userId}
              time={this.state.Usercomment.time}
              contents={this.state.Usercomment.contents_text}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsBox;
