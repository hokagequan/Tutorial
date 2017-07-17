import React, { Component } from 'react';
import NavMenu from './views/navMenu';
import {Button} from 'react-bootstrap';

let menuData = [
  {
    text: "Shots",
    url: "/"
  },
  {
    text: "Designers",
    url: "/Designers"
  },
  {
    text: "Blog",
    url: "/Blog"
  }
];

class App extends Component {
  render() {
    return (
      <div>
          <NavMenu menuItems={menuData}></NavMenu>
          <Button>Button</Button>
      </div>
    );
  }
}

export default App;
