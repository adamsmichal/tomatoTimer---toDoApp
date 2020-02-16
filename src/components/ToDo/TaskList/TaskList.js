import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} />);
    return (
        <React.Fragment>
            <div>
                <h1>Zadania do zrobienia</h1>
                {tasks}
            </div>
            <div>
                <h1>Zadania zrobione</h1>
            </div>
        </React.Fragment>
    );
}
 
export default TaskList;