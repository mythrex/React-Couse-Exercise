import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
class Person extends Component {
	state = {};
	constructor(props) {
		super(props);
		console.log('[Person.js] constructor', props);
		this.inputElement = React.createRef();
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount');
	}
	focusInput() {
		if (this.props.position === 0) {
			this.inputElement.current.focus();
		}
	}
	render() {
		console.log('[Person.js] Inside render');
		return (
			<React.Fragment>
				<p onClick={this.props.click}>
					I am {this.props.name} and I am {this.props.age} years old.
				</p>
				<p>{this.props.children}</p>
				<input
					ref={this.inputElement}
					type="text"
					onChange={this.props.change}
					value={this.props.name}
				/>
			</React.Fragment>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	change: PropTypes.func
};
export default withClass(Person);
