import React from "react";
import "./CommentCount.scss";

class CommentCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postPage: 5
    };
  }
  render() {
    let data = this.props.data;
    const pagesNum = [];
    for (let i = 1; i <= Math.ceil(data.length / this.state.postPage); i++) {
      pagesNum.push(i);
    }
    // console.log(data);
    return (
      <div className="comment_count">
        <ul>
          {pagesNum.map(num => (
            <li key={num}>
              <button onClick={() => this.props.paginate(num)} href="!#">
                {num}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentCount;
