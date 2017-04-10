import React from 'react';

import Bubble from './Bubble';

const TodayOverview = (props) => {
	let innerBubbles = props.tasks.map((task) => {
		return (
			<Bubble duration={ task.duration }>{ task.title }</Bubble>
		);
	});

	return (
		<div>
			<h1>Today's Overview</h1>
			<Bubble className='c-blot-bubble--static' duration={ 1440 }>
				{ innerBubbles.length > 1 ? innerBubbles :
					'No tasks added' }
			</Bubble>
		</div>
	)
}

export default TodayOverview;