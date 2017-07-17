import React from 'react';
import {NavItem, Dropdown, MenuItem, NavDropdown} from 'react-bootstrap';

export default class NavMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false}
  }

  handleOpen = () => {
  	this.setState({
  		isOpen: true 
  	});
  }

  handleClose = () => {
  	this.setState({
  		isOpen: false 
  	});
  }

  render() {
    return (
      	<NavDropdown
      	  onMouseEnter={this.handleOpen}
      	  onMouseLeave={this.handleClose}
      	  open={this.state.isOpen} 
      	  title={this.props.title} 
      	  noCaret 
      	  id={this.props.title}>
      	</NavDropdown>
    );
  }
}
