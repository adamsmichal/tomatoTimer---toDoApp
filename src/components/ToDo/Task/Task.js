import React from 'react';

const Task = (props) => {

    const importantStyle = {
        color: 'red',
    }

    const {text, id, active, important, time} = props.task;
    if (active) { 
        const addTime = new Date(time).toLocaleTimeString(); 
        return (
            <div>
                <p>
                    <strong style={important ? importantStyle : null}>{text}</strong> - <span>dodano o {addTime}</span>
                    <button onClick={() => props.changeTaskStatus(id, important)}>Zostało zrobione</button>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const endTime = new Date(time).toLocaleTimeString();  
        return (
            <div>
                <p>
                    <strong>{text}</strong> - <span>wykonano o {endTime}</span>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div>
        )
    }
}
 
export default Task;