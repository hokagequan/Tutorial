import React from "react";
import Comment from "./comment";
import style from "./style";

export default class commentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let commentNodes = this.props.data.map(function(comment) {
  		return (
  			<Comment author={comment.author} key={comment['_id']}>
  				{comment.text}
  			</Comment>
  			);
  	})
    return (
      <div style={style.commentList}>{commentNodes}</div>
    );
  }
}
