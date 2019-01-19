import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [{ name: 'Shivam', age: 22 }]
	};
	switchNameHandler = (newName, age) => {
		this.setState({ persons: [{ name: newName, age: age }] });
	};
	nameChangeHandler = event => {
		this.setState({ persons: [{ name: event.target.value, age: 22 }] });
	};
	render() {
		return (
			<div className="App">
				<h1>I am a react App</h1>
				<button onClick={this.switchNameHandler.bind(this, 'sivam', 11)}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={this.switchNameHandler}
					change={this.nameChangeHandler}
				>
					My Hobbies is playing.
				</Person>
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
