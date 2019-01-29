import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	state = {};
	constructor(props) {
		super(props);
		console.log('[Persons.js] Hello bitch!', props);
	}

	componentWillMount() {
		console.log('[Persons.js] Inside componentWillMount');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		console.log(
			'[Update Persons.js] Inside componentWillReceiveProps',
			nextProps
		);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(
			'[Update Persons.js] Inside shouldComponentUpdate',
			nextProps,
			nextState
		);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(
			'[Update Persons.js] Inside componentWillUpdate',
			nextProps,
			nextState
		);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[Update Persons.js] Inside componentDidUpdate');
	}
	render() {
		console.log('[Persons.js] Inside render');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					name={person.name}
					age={person.age}
					click={() => {
						this.props.click(index);
					}}
					key={person.id}
					change={event => {
						this.props.change(event, person.id);
					}}
				/>
			);
		});
	}
}

export default Persons;
