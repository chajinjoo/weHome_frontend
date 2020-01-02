import React from "react";
import "./CommentsBox.scss";
import UserImg from "../../../../Images/userCommentImg.png";
import Rightarrow from "../../../../Images/Rightarrow.png";
import UserComment from "../UserComment";
import CommentCount from "../CommentCount/CommentCount";
import fetchAPI from "../../../../Utils/fetch";

class CommentsBox extends React.Component {
  constructor(props) {
    super(props);
    this.commentId = 2;
    this.state = {
      currentPage: 1,
      Usercomment: []

      // Usercomment: [
      //   {
      //     id: 0,
      //     userPhoto:
      //       "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
      //     userId: "jotang",
      //     time: 2,
      //     contents_text: "댓글을 한번 달아보겠습니다."
      //   },
      //   {
      //     id: 1,
      //     userPhoto:
      //       "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
      //     userId: "jotang",
      //     time: 2,
      //     contents_text: "댓글이 잘 달릴까요?"
      //   },
      //   {
      //     id: 2,
      //     userPhoto:
      //       "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
      //     userId: "jotang",
      //     time: 2,
      //     contents_text: "자 도전 시작!"
      //   }
      // ],
      // loginUser: {
      //   userId: "wecode",
      //   userProfile:
      //     "https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-users-profile_images-1555840371_Hpoz.jpeg/36/none",
      //   userTime: 4
      // }
    };
  }

  // handleSeongjin = () => {
  //   fetchAPI("http://10.58.3.101:8000/test_app/comments")
  //     .then(res => console.log(res))
  //     .then(res => {
  //       this.setState({
  //         Usercomment: res.result
  //       });
  //     });
  // };
  handleComments = () => {
    fetchAPI("http://10.58.5.97:8000/test_app/comments").then(res =>
      this.setState({
        Usercomment: res.result
      })
    );
  };

  componentDidMount() {
    this.handleComments();
    // this.handleSeongjin();
  }

  onSubmit = e => {
    // const { userProfile, userId, userTime } = this.state.loginUser;
    // const { Usercomment } = this.state;
    // let token = localStorage.getItem("access_token") || "";
    e.preventDefault();
    fetch("http://10.58.5.97:8000/test_app/comments ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents_text: e.target.title.value
      })
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      .then((e.target.title.value = ""))
      .then(res =>
        this.setState({
          Usercomment: res.result
        })
      );

    // this.commentId += 1;
    // let UserComments = [
    //   {
    //     id: this.commentId,
    //     userPhoto: userProfile,
    //     userId: userId,
    //     time: userTime,
    //     contents_text: e.target.title.value
    //   }
    // ];
    // let addComment = UserComments.concat(Usercomment);
    // this.setState({
    //   Usercomment: addComment
    // });
  };

  handleRemove = a => {
    const { Usercomment } = this.state;

    const Arr = Usercomment;
    const newArr = Arr.filter(el => Arr.indexOf(el) === a);
    console.log("삭제", newArr);
    fetch("http://10.58.5.97:8000/test_app/erasecomments ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        result: newArr
      })
    })
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            Usercomment: res.result
          })
        // console.log(a);
        // console.log(newArr);
        // this.setState({
        //   Usercomment: newArr
        // });
      );
  };

  paginate = pageNum => {
    this.setState({
      currentPage: pageNum
    });
    // console.log(pageNum);
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
    const a = this.state.Usercomment;
    console.log(a);
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
                autoComplete="off"
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
