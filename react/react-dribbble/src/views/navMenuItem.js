import React from 'react';
import {NavItem, Dropdown, MenuItem, NavDropdown} from 'react-bootstrap';
import '../css/style.css';

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

  handleSelect = () => {

  }

  render() {
    return (
      	<NavDropdown
      	  onMouseEnter={this.handleOpen}
      	  onMouseLeave={this.handleClose}
      	  open={this.state.isOpen} 
      	  onSelect={this.handleSelect}
      	  title={this.props.title} 
      	  noCaret 
      	  href={this.props.link}
      	  id={this.props.title}>
      	  {
      	  	this.props.subItems.map((section, i) => {
      	  		let items = 
      	  			section.map((item, j) => {
      	  				return (
      	  					<MenuItem href={item.url}>{item.text}</MenuItem>
						);
      	  			});
				
				if (i == this.props.subItems.length - 1) {
  					return items;
      	  		}

      	  		items.push(
					<MenuItem divider />
      	  		)

      	  		return items;
      	  	})	
      	  }
      	</NavDropdown>
    );
  }
}
