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
        <div className={'task-list'}>
            <div className={'task-list__to-do-list'}>
                <h3 className={'task-list__title'}>To do</h3>
                {activeTasks.length > 0 ? activeTasks : <p className={'task-list__comments'}>(No tasks)</p>}
            </div>
            <div className={'task-list__done-list'}>
                <h3 className={'task-list__title'}>Done</h3>
                {doneTasks.length > 4 && <p className={'task-list__comments'}>(Last 4 tasks)</p>}
                {doneTasks.slice(0, 4)}
            </div>
        </div>
    );
}
 
export default TaskList;