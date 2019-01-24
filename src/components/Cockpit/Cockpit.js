import React from 'react';
import styles from './Cockpit.css';

console.log(styles);
const Cockpit = props => {
	let classes = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = styles.Red;
	}
	if (props.persons.length <= 2) {
		classes.push(styles.red);
		if (props.persons.length <= 1) {
			classes.push(styles.bold);
		}
	}

	return (
		<div className={styles.Cockpit}>
			<h1 className={classes.join(' ')}>I am a react App</h1>
			<button onClick={props.click} className={btnClass}>
				Toggle Person
			</button>
		</div>
	);
};

export default Cockpit;
