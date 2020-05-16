import React, {Component} from 'react';

import Input from './Components/Input';
import './App.css';
import ToDoList from './Components/ToDoList';
import CompletedList from './Components/CompletedList';


class App extends Component {

  state = {
    tasks: [
      {
        text: "kup głosnik",
        id: 0,
        completed: false
      },
      {
        text: "wyrzuć śmieci",
        id: 1,
        completed: false
      },
      {
        text: "zrób obiad",
        id: 2,
        completed: true
      },
    ]
  }

  compliteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map( task => {
        if( id === task.id) {
          return {
            ...task,
            completed: true
          }
        }
        return task;
      })
    })
  }

  removeTask = (id) =>
    this.setState({
      tasks: this.state.tasks.filter( task => id !== task.id)
  });

  id = 4;

  addTask = text => {
    this.setState({
      tasks: [
        {
          text,
          id: this.id += 1,
          completed: false
        },
        ...this.state.tasks
      ]
    })
  }

  render () {
    return (
      <div className="wrapper">
        <Input addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          compliteTask={this.compliteTask}
          removeTask={this.removeTask}
        />
        <CompletedList
          tasks={this.state.tasks}
          removeTask={this.removeTask}
        />
    </div>
    );
  }
}


export default App;
