import React from 'react';
import Footer from "./footer";

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = AppStore.getState();
	// 	this.onChange = this.onCHange.bind(this);
	// }

	// onChange(state) {
	// 	this.setState(state);
	// }

	render() {
		return (
			<div>
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default App;