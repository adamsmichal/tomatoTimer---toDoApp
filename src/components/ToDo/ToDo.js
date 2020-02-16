import React, { Component } from 'react';
import AddTask from './AddTask/AddTask';
import TaskList from './TaskList/TaskList';

class ToDo extends Component {
    state = {
        tasks: [
            {
                id: 0,
                text: 'Treść zadania',
                important: false,
                active: true,
            }
        ]
    }

    handleDoneButtonClick = (id) => {
        console.log('Done' + id);
        let tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id){
                task.active = false;
            }
        });
        this.setState({
            tasks
        })
    }

    handleDeleteButtonClick = (id) => {
        console.log('Delete' + id);
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        this.setState({
            tasks
        })
    }

    render() { 
        return (
            <React.Fragment>
                <AddTask />
                <TaskList 
                    tasks={this.state.tasks} 
                    changeTaskStatus={this.handleDoneButtonClick} 
                    deleteTask={this.handleDeleteButtonClick}
                />
            </React.Fragment>
        );
    }
}
 
export default ToDo;