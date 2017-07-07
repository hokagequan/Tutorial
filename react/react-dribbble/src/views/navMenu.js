import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../css/style.css';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<Navbar inverse fixedTop collapseOnSelect fluid>
		    <Navbar.Header>
		    	<Navbar.Brand>
		    		<a href="/">Dribbble</a>
		    	</Navbar.Brand>
		    </Navbar.Header>
			<Nav>
			  {
			  	this.props.menuItems.map((item) => {
			  		return (
			  			<NavItem href={item.url}>{item.text}</NavItem>
			  		);
			  	})	
			  }
	  		</Nav>
		</Navbar>
    );
  }
}
