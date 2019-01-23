import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
		const style = {
			backgroundColor: 'green',
			border: '2px solid black',
			color: 'white',
			':hover': {
				backgroundColor: 'cyan',
				color: 'black'
			}
		};
		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
			if (this.state.persons.length <= 1) {
				classes.push('bold');
			}
		}
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								click={this.deletePersonHandler.bind(this, index)}
								key={person.id}
								change={event => {
									this.nameChangeHandler(event, person.id);
								}}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = 'red';
			style[':hover'] = {
				color: 'white',
				backgroundColor: 'salmon'
			};
		}
		return (
			<div className="App">
				<h1 class={classes.join(' ')}>I am a react App</h1>
				<button onClick={this.togglePersonHandler} style={style}>
					Toggle Person
				</button>
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

export default Radium(App);
