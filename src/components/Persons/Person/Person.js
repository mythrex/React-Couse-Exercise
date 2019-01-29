import React, { Component } from 'react';
class Person extends Component {
	state = {};
	render() {
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
