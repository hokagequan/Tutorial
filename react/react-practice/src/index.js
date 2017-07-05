import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import HomePage from "./views/homePage";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

// ReactDOM.render(
// 	<Router history={hashHistory}>
// 		<Route path="/" component={HomePage}></Route>
// 	</Router>, 
// 	document.getElementById('root')
// );
ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={App}></Route>
	</BrowserRouter>, 
	document.getElementById('root')
);

registerServiceWorker();
