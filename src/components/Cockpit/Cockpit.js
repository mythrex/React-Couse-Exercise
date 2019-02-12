import React from 'react';
import styles from './Cockpit.css';
// import Aux from '../../hoc/Aux';

const Cockpit = props => {
	// console.log(useEffect);
	// useEffect(() => {
	// 	console.log('[Cockpit.js] Use Effect.');
	// });
	let classes = [];
	let btnClass = styles.Button;
	if (props.showPersons) {
		btnClass = [styles.Button, styles.Red].join(' ');
	}
	if (props.persons.length <= 2) {
		classes.push(styles.red);
		if (props.persons.length <= 1) {
			classes.push(styles.bold);
		}
	}

	return (
		<div>
			<h1 className={classes.join(' ')}>I am a react App</h1>
			<button onClick={props.click} className={btnClass}>
				Toggle Person
			</button>
		</div>
	);
};

export default Cockpit;
