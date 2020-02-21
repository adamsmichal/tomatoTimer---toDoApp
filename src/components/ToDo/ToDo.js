import React, { Component } from 'react';
import AddTask from './AddTask/AddTask';
import TaskList from './TaskList/TaskList';

class ToDo extends Component {
    counter = 0
    state = {
        tasks: []
    }

    handleDoneButtonClick = (id, important) => {
        let tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id){
                task.active = false;
                task.time = new Date().getTime();
            }

            if (task.important) {
                this.props.addDoneTasks();
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

    addTask = (text, ifImportant) => {
        console.log("dodany obiekt");
        const task = {
            id: this.counter,
            text: text,
            important: ifImportant,
            active: true,
            time: new Date().getTime(),
        }
        this.counter++
        
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
        return true;
    }

    render() { 
        return (
            <div className={'to-do-app center-wrapper'}>
                <AddTask addTask={this.addTask}/>
                <TaskList 
                    tasks={this.state.tasks} 
                    changeTaskStatus={this.handleDoneButtonClick} 
                    deleteTask={this.handleDeleteButtonClick}
                />
            </div>
        );
    }
}
 
export default ToDo;