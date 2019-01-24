import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
	state = {
		persons: [{ name: 'Shivam', age: 22, id: 'asdxz21' }],
		showPersons: false
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
		this.setState({ persons: persons });
	};
	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	render() {
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
			<div className={styles.App}>
				<Cockpit
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					click={this.togglePersonHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
