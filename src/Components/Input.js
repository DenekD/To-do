import React, {Component} from 'react';

import PropTypes from 'prop-types';



class Input extends Component {
	state = {
		value: ""
	}

	handleChangeValue = (e) => {
		this.setState({ value: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.value);
		this.setState({ value: ""})
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="input">
				<input
						type="text"
						value={this.state.value}
						onChange={this.handleChangeValue}
						placeholder="add new task"/>
				<button type="submit" >
					<div className="plus"></div>
				</button>
			</form>

		)
	}
}


Input.propTypes = {
	addTask: PropTypes.func.isRequired,

}

export default Input;


