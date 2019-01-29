import React, { Component } from 'react';
class Person extends Component {
	state = {};
	constructor(props) {
		super(props);
		console.log('[Person.js] constructor', props);
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount');
	}
	render() {
		console.log('[Person.js] Inside render');
		return (
			<div>
				<p onClick={this.props.click}>
					I am {this.props.name} and I am {this.props.age} years old.
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.change}
					value={this.props.name}
				/>
			</div>
		);
	}
}

export default Person;
