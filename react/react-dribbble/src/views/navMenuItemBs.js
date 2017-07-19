import React from 'react';
import '../css/style.css';

export default class NavMenuItemBs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false}
  }

  render() {
    return (
    	<li className="dropdown">
    		<a 
    		  className="dropdown-toggle" 
    		  data-toggle="dropdown" 
    		  role="button" 
    		  href={this.props.link} 
    		  aria-haspopup="true" 
    		  aria-expanded="false">
    		  {this.props.title}
    		</a>
    		<ul className="dropdown-menu nav-dropdown">
			{
				this.props.subItems.map((section, i) => {
					let items =
					section.map((item, j) => {
						return (
							<li><a href={item.url}>{item.text}</a></li>
						);
					})

					if (i == this.props.subItems.length - 1) {
						return items;
					}

					items.push(
						<li className="divider"></li>
					);

					return items;
				})
			}
    		</ul>
    	</li>
    );
  }
}
