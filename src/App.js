import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
	state = {
		persons: [{ name: 'Shivam', age: 22 }]
	};
	render() {
		return (
			<div className="App">
				<h1>I am a react App</h1>
				<button>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
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
