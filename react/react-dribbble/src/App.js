import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavMenuBs from './views/navMenuBs';
import ShotsPage from './views/shotsPage';
import './css/style.css';

let menuData = [
  {
    text: "Shots",
    url: "/",
    subItems:[
      [
        {
          text: "Popular",
          url: "/Shots/Popular"
        },
        {
          text: "Recent",
          url: "/Shots/Recent"
        },
        {
          text: "Debuts",
          url: "/Shots/Debuts"
        },
        {
          text: "Teams",
          url: "/Shots/Teams"
        },
        {
          text: "Playoffs",
          url: "/Shots/Playoffs"
        }
      ],
      [
        {
          text: "HigthLights",
          url: "/SHots/HigthLights"
        },
        {
          text: "Projects",
          url: "/SHots/Projects"
        },
        {
          text: "Goods By Designers",
          url: "/SHots/GoodsByDesigners"
        }
      ]
    ]
  },
  {
    text: "Designers",
    url: "/Designers",
    subItems:[
      [
        {
          text: "Popular",
          url: "/Popular"
        }
      ],
      [
        {
          text: "HigthLights",
          url: "/HigthLights"
        }
      ]
    ]
  },
  {
    text: "Blog",
    url: "/Blog",
    subItems:[
      [
        {
          text: "Popular",
          url: "/Popular"
        }
      ],
      [
        {
          text: "HigthLights",
          url: "/HigthLights"
        }
      ]
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div>
          <NavMenuBs menuItems={menuData}></NavMenuBs>
          <BrowserRouter>
            <Route path="/" component={ShotsPage}></Route>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
