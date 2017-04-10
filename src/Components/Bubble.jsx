import React from 'react';
import '../styles/bubble.scss';

const Bubble = (props) => {
	let styles = {
		height: `${props.duration}px`,
		width: `${props.duration}px`
	};

	return (
		<div className={ `c-blot-bubble ${props.className}` } style={ styles }>
			{ props.children }
		</div>
	)
}

export default Bubble;