import React from 'react';
import {NavItem, Dropdown, MenuItem} from 'react-bootstrap';

export default class NavMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<NavItem href={this.props.link}>
      	{this.props.title}
      	<Dropdown>
      		<MenuItem>item 1</MenuItem>
      	</Dropdown>
      	</NavItem>
    );
  }
}
