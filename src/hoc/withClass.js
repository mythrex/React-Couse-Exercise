import React from 'react';

const withClass = (WrappedComponents, className) => {
	return props => (
		<div className={className}>
			<WrappedComponents {...props} />
		</div>
	);
};

export default withClass;
