import React from 'react';

const Task = (props) => {

    const {text, id} = props.task;
    return (
        <div>
            <p>
                <strong>{text}</strong>
                <button onClick={() => props.changeTaskStatus(id)}>Zostało zrobione</button>
                <button onClick={() => props.deleteTask(id)}>X</button>
            </p>
        </div>
    );
}
 
export default Task;