import React from 'react';

export default class ShotsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	overlayW: null,
    	overlayH: null
    }

    this.setOverlaySize = this.setOverlaySize.bind(this);
  }

  setOverlaySize({target: image}) {
  	console.log(`size:  ${image.width}x${image.height}`);
  	this.setState({
  		overlayW: image.width,
  		overlayH: image.height
  	});
  }

  render() {
    return (
      <div>
      	<div className="thumbnail">
      		<img src={this.props.item.imageURL} alt="缩略图" onLoad={this.setOverlaySize}></img>
      		<ShotItemOverlay style={{width: this.state.overlayW, height: this.state.overlayH}}>
      		</ShotItemOverlay>
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

class ShotItemOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cartItemOverlay" style={this.props.style}>
        <div className="header">Header</div>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

