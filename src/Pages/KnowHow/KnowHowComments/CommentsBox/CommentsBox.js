import React from "react";
import "./CommentsBox.scss";
import UserImg from "../../../../Images/userCommentImg.png";
import Rightarrow from "../../../../Images/Rightarrow.png";
import UserComment from "../UserComment";
import CommentCount from "../CommentCount/CommentCount";

class CommentsBox extends React.Component {
  constructor(props) {
    super(props);
    this.commentId = 2;
    this.state = {
      currentPage: 1,
      Usercomment: [
        {
          id: 0,
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "댓글을 한번 달아보겠습니다."
        },
        {
          id: 1,
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "댓글이 잘 달릴까요?"
        },
        {
          id: 2,
          userPhoto:
            "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
          userId: "jotang",
          time: 2,
          contents_text: "자 도전 시작!"
        }
      ],
      loginUser: {
        userId: "wecode",
        userProfile:
          "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
        userTime: 4
      }
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.commentId += 1;
    let UserComments = [
      {
        id: this.commentId,
        userPhoto: this.state.loginUser.userProfile,
        userId: this.state.loginUser.userId,
        time: this.state.loginUser.userTime,
        contents_text: e.target.title.value
      }
    ];
    let addComment = UserComments.concat(this.state.Usercomment);
    this.setState({
      Usercomment: addComment
    });

    e.target.title.value = "";
  };

  handleRemove = a => {
    const Arr = this.state.Usercomment;
    const newArr = Arr.filter(el => Arr.indexOf(el) !== a);
    console.log(a);
    console.log(newArr);
    this.setState({
      Usercomment: newArr
    });
  };

  paginate = pageNum => {
    this.setState({
      currentPage: pageNum
    });
    console.log(pageNum);
  };

  render() {
    const starting = (this.state.currentPage - 1) * 5;
    const ending = (this.state.currentPage - 1) * 5 + 5;
    const Comments = this.state.Usercomment.slice(
      starting,
      ending
    ).map((post, index) => (
      <UserComment
        key={index}
        Usercomment={post}
        handleRemove={() => this.handleRemove(index)}
      />
    ));

    return (
      <>
        <div className="comment_title">
          <h1>댓글</h1>
          <span>{this.state.Usercomment.length}</span>
        </div>

        <form onSubmit={this.onSubmit} className="comment_inputBox">
          <div className="comment_user_img">
            <img src={UserImg} alt="본인프로필사진" />
          </div>
          <div className="comment_input_waraper">
            <div className="comment_input">
              <input
                autocomplete="off"
                name="title"
                placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
              ></input>
            </div>
            <div>
              <button
                type="submit"
                className="comment_cofirm"
                style={{
                  backgroundImage: `url(${Rightarrow})`
                }}
              ></button>
            </div>
          </div>
        </form>

        <div className="comment_user_box">
          <div className="comment_user_write">{Comments}</div>
          <CommentCount
            paginate={this.paginate}
            data={this.state.Usercomment}
          />
        </div>
      </>
    );
  }
}

export default CommentsBox;
