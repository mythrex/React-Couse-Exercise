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
		return (
			// true means re render
			// false means do not re rendeer
			nextProps.persons !== this.props.persons ||
			nextProps.showPersons !== this.props.showPersons ||
			nextProps.click !== this.props.click
		);
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(
			'[Update Persons.js] Inside componentWillUpdate',
			nextProps,
			nextState
		);
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log('[Persons.js] getDerivedStateFromProps', prevState);
	// 	return prevState;
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState);
		return { message: 'Some Snapshot' };
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Update Persons.js] Inside componentDidUpdate', snapshot);
	}
	render() {
		console.log('[Persons.js] Inside render');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					position={index}
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
