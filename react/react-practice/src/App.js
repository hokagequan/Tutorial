import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/style.css';
import Navbar from "./views/navbar";

var data = [
  {
    "text": "Shots",
    "url": "/"
  },
  {
    "text": "Designers",
    "url": "/Designers"
  },
  {
    "text": "Blog",
    "url": "/Blog"
  }
];

class App extends Component {
  render() {
    return (
      <Navbar items={data} />
      
    );
  }
}

export default App;
