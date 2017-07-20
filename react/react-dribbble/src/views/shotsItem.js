import React from 'react';

export default class ShotsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="thumbnail">
      		<img src={this.props.item.imageURL} alt="缩略图"></img>
		    <div className="cardState">
		      <ul className="cardStateList">
		        <li>
		          <p>
		            <span className="glyphicon glyphicon-eye-open"></span>
		      	    {this.props.item.viewed}
		          </p>
		        </li>
		        <li>
		          <p>
		            <span className="glyphicon glyphicon-comment"></span>
		      	    {this.props.item.comments}
		          </p>
		        </li>
		        <li className="cardLike">
		          <p>
		            <span className="glyphicon glyphicon-heart"></span>
		      	    {this.props.item.liked}
		          </p>
		        </li>
		      </ul>
		    </div>
      	</div>
      	<p className="cardTitle">{this.props.item.userName}</p>
      </div>
    );
  }
}
