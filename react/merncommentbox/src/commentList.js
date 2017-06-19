import React from "react";
import Comment from "./Comment";
import style from "./style";

export default class commentList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	let commentNodes = this.props.data.map(function(comment) {
  		return (
  			<Comment author={comment.author} key={comment.id}>
  				{comment.text}
  			</Comment>
  			);
  	})
    return (
      <div style={style.commentList>{commentNodes}</div>
    );
  }
}
