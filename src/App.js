import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [{ name: 'Shivam', age: 22 }],
		showPersons: false
	};
	deletePersonHandler = index => {
		const persons = this.state.persons;
		persons.splice(index, 1);
		this.setState({ persons: persons });
	};
	nameChangeHandler = event => {
		this.setState({ persons: [{ name: event.target.value, age: 22 }] });
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
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								click={this.deletePersonHandler.bind(this, index)}
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div className="App">
				<h1>I am a react App</h1>
				<button onClick={this.togglePersonHandler}>Toggle Person</button>
				{persons}
			</div>
			// React.createElement(
			// 	'div',
			// 	{ className: 'App' },
			// 	React.createElement('h1', null, 'I am a react app!')
			// )
		);
	}
}

export default App;
