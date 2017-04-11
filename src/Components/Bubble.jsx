import React from 'react';
import '../styles/bubble.scss';

const Bubble = (props) => {
	// duration is in minutes
	// 24 hrs is 1440 min
	let styles = {
		height: `${props.duration/1440*100}%`,
		width: `${props.duration/1440*100}%`
	};

	return (
		<div className={ `c-blot-bubble ${props.className}` } style={ styles }>
			{ props.children }
		</div>
	)
}

export default Bubble;