import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const CompletedList = props =>


<ul className="finishedList">
	<h3>Completed</h3>

	{props.tasks.filter(t => t.completed).map((task, index) =>
			<Task
				text={task.text}
				completed={task.completed}
				id={task.id}
				removeTask={props.removeTask}
			/>
		)}
</ul>


CompletedList.protoTypes = {
	tasks: PropTypes.array.isRequired,
	removeTask: PropTypes.func.isRequired
}

export default CompletedList;
