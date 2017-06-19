import React from 'react';

export default class CommentForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
  	this.setState({
  		author: e.target.value
  	});
  }

  handleTextChange(e){
  	this.setState({
  		text: e.target.value
  	});
  }

  handleSubmit(e){
  	
  }

  render() {
    return (
      <div></div>
    );
  }
}
