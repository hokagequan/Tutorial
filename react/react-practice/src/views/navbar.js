import React from 'react';
import NavItem from './navItem';
import NavHeader from './navHeader';
import '../style/style.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var items = this.props.items;

    return (
      <ul className="navigation">
        <NavHeader />
      {
      	items.map((item, i) => {
      		return (<NavItem item={item} key={i} />);
      	})
      }
      </ul>
    );
  }
}
