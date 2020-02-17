import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    //sort done tasks list
    done.sort((a, b) => b.time - a.time);

    const activeTasks = active.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} />);
    
    const doneTasks = done.map(task => <Task key={task.id} task={task} deleteTask={props.deleteTask} changeTaskStatus={props.changeTaskStatus} />);
    return (
        <React.Fragment>
            <div>
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
            </div>
            <div>
                <h1>Zadania zrobione</h1>
                {doneTasks.length > 4 && <span>4 ostatnie zadania</span>}
                {doneTasks.slice(0, 4)}
            </div>
        </React.Fragment>
    );
}
 
export default TaskList;