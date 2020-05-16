import React from 'react';
import PropTypes from 'prop-types';

import checkedIcon from '../icons/checkedIcon.svg';
import removeIcon from '../icons/removeIcon.svg';

const Task = props =>

    <li className="task">

        <span>{props.text}</span>

        {!props.completed
        	? <img
							onClick={() => props.compliteTask(props.id)}
							src={checkedIcon}
							alt="ok"/>
        	: null}

        <img
					src={removeIcon} alt="delete"
					onClick={() => props.removeTask(props.id) }
				/>
	</li>

Task.proTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
		compliteTask: PropTypes.func.isRequired,
		removeTask: PropTypes.func.isRequired
}

export default Task;
