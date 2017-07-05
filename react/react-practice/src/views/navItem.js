import React from 'react';
import {Link} from 'react-router-dom';
import "../style/style.css";

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={this.props.item.url} className="naviItem">{this.props.item.text}</Link>
      </li>
    );
  }
}
