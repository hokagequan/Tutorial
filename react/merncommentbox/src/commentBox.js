import React, {Componet} from "react";
import CommentList from "./commentList";
import CommentForm from "./commentForm";
import DATA from "./data";
import style from "./style";

export default class CommentBox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  render() {
    return (
      <div style={style.commentBox}>
      	<h2>Comments:</h2>
      	<CommentList data={DATA} />
      	<CommentForm />
      </div>
    );
  }
}
