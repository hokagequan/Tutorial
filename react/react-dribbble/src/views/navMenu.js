import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup} from 'react-bootstrap';
import NavMenuItem from './navMenuItem';
import '../css/style.css';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
		<Navbar inverse collapseOnSelect fluid staticTop>
		    <Navbar.Header>
		    	<Navbar.Brand>
		    		<a href="/">Dribbble</a>
		    	</Navbar.Brand>
		    </Navbar.Header>
			<Nav>
			  {
			  	this.props.menuItems.map((item) => {
			  		return (
			  			<NavMenuItem link={item.url} title={item.text}></NavMenuItem>
			  		);
			  	})	
			  }
	  		</Nav>
	  		<Navbar.Form pullRight>
  				<FormGroup>
					<FormControl type="text" placeholder="Search"></FormControl>
  				</FormGroup>
	  		</Navbar.Form>
	  			<Nav pullRight>
	  				<NavItem>Sign up</NavItem>
	  			<NavItem>Sign in</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}
