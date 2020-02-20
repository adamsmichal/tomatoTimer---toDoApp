import React from 'react';

const Task = (props) => {

    const importantStyle = {
        color: 'red',
    }

    const {text, id, active, important, time} = props.task;
    if (active) { 
        const addTime = new Date(time).toLocaleTimeString(); 
        return (
            <div className={'to-do-tasks'}>
                <p className={'to-do-tasks__task'}>
                    <div>
                        <strong className={'to-do-tasks__title'} style={important ? importantStyle : null}>{text}</strong>
                    </div>
                    <div className={'to-do-tasks__item'}>
                        <span className={'to-do-tasks__information'}>({addTime})</span>
                        <div>
                            <button className={'to-do-tasks__btn functional-btn'} onClick={() => props.changeTaskStatus(id, important)}>Done</button>
                            <button className={'to-do-tasks__btn functional-btn'} onClick={() => props.deleteTask(id)}>X</button>
                        </div>
                    </div>
                </p>
            </div>
        );
    } else {
        const endTime = new Date(time).toLocaleTimeString();  
        return (
            <div className={'done-tasks'}>
                <p className={'done-tasks__task'}>
                    <strong className={'done-tasks__text'}>{text}</strong> 
                    <div className={'done-tasks__item'}>
                        <span className={'done-tasks__information'}>{endTime}</span>
                        <button className={'functional-btn done-tasks__btn'} onClick={() => props.deleteTask(id)}>X</button>
                    </div>
                </p>
            </div>
        )
    }
}
 
export default Task;