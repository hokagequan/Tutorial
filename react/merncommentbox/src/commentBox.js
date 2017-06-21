import React from "react";
import axios from "axios";
import CommentList from "./commentList";
import CommentForm from "./commentForm";
import DATA from "./data";
import style from "./style";

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  loadCommentsFromServer() {
  	console.log(`Props: ${this.props.url}`)
  	axios.get(this.props.url)
  	.then(res => {
  		this.setState({
  			data: res.data
  		});
  	})
  }

  handleCommentSubmit(comment) {
  	let comments = this.state.data;
  	comment.id = Date.now();
  	let newComments = comments.concat([comment]);
  	this.setState({
  		data: newComments
  	});

  	axios.post(this.props.url, comment)
  	.then(res => {
  		console.log(`${res}`);
  	})
  	.catch(err => {
  		console.error(err);
  		this.setState({
  			data: comments
  		});
  	});
  }

  componentDidMount() {
  	console.log(`Props: ${this.props.url}`)
  	this.loadCommentsFromServer();
  	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <div style={style.commentBox}>
      	<h2>Comments:</h2>
      	<CommentList data={this.state.data} />
      	<CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
