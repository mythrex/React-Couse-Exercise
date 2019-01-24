import React from 'react';
import Person from './Person/Person';

const Persons = props =>
	props.persons.map((person, index) => {
		return (
			<Person
				name={person.name}
				age={person.age}
				click={() => {
					props.click(index);
				}}
				key={person.id}
				change={event => {
					props.change(event, person.id);
				}}
			/>
		);
	});

export default Persons;
