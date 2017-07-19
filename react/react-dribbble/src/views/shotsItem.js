import React from 'react';

export default class ShotsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div className="thumbnail">
		    <img src={this.props.item.image} alt="缩略图" />
		    <div className="cardState">
		      <ul className="cardStateList">
		        <li>
		          <p>
		            <span className="glyphicon glyphicon-eye-open"></span>
		      	    1234
		          </p>
		        </li>
		        <li>
		          <p>
		            <span className="glyphicon glyphicon-comment"></span>
		      	    1234
		          </p>
		        </li>
		        <li className="cardLike">
		          <p>
		            <span className="glyphicon glyphicon-heart"></span>
		      	    1234
		          </p>
		        </li>
		      </ul>
		    </div>
      	</div>
      	<p className="cardTitle">kk</p>
      </div>
    );
  }
}
