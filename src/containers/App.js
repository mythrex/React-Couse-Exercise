import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] Constructor!', props);
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(
			'[Update App.js.js] Inside shouldComponentUpdate',
			nextProps,
			nextState
		);
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(
			'[Update App.js.js] Inside componentWillUpdate',
			nextProps,
			nextState
		);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[Update App.js.js] Inside componentDidUpdate');
	}
	state = {
		persons: [
			{ name: 'Shivam', age: 22, id: 'asdxz21' },
			{ name: 'AC', age: 2, id: 'asdxz2' }
		],
		showPersons: false,
		changeCounter: 1
	};
	deletePersonHandler = index => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons: persons });
	};
	nameChangeHandler = (event, id) => {
		const pIndex = this.state.persons.findIndex(p => p.id === id);
		const person = {
			...this.state.persons[pIndex]
		};
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[pIndex] = person;

		// this is wrong way to update state
		// this is not guaranteed to have latest state
		// this.setState expects an object and a function(if oldstate is req)
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			};
		});
	};
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	render() {
		console.log('[App.js] Inside render');
		// everytime react needs to update DOM render() is invoked
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					click={this.deletePersonHandler}
					change={this.nameChangeHandler}
				/>
			);
		}
		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({ showPersons: true });
					}}
				>
					Show
				</button>
				<Cockpit
					personsLength={this.state.persons.length}
					showPersons={this.state.showPersons}
					click={this.togglePersonHandler}
				/>
				{persons}
			</Aux>
		);
	}
}

export default withClass(App, styles.App);
