import React from 'react';
import '../css/shots.css';

export default class ShotsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<nav className="navbar navbar-default">
      		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav navbar-center">
      				<li className="dropdown">
      					<a>Popular<span className="caret"></span></a>
      				</li>
      				<li className="dropdown">
      					<a>Shots<span className="caret"></span></a>
      				</li>
      				<li className="dropdown">
      					<a>Now<span className="caret"></span></a>
      				</li>
      			</ul>
      			<ul className="nav navbar-nav pull-right">
      				<img alt="Brand" src="..." />
      			</ul>
      		</div>
      	</nav>
      </div>
    );
  }
}
