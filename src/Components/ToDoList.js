import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';


const ToDoList = props =>

	<ul className="toDoList">
		<h3>To Do</h3>

		{props.tasks.filter(t => !t.completed).map((task, index) =>
			<Task
				text={task.text}
				completed={task.completed}
				id={task.id}
				compliteTask={props.compliteTask}
				removeTask={props.removeTask}	/>
		)}
	</ul>;


ToDoList.proTypes = {
	tasks: PropTypes.array.isRequired,
	compliteTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired
}

export default ToDoList;
