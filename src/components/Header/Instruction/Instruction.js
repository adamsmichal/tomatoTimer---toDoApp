import React from 'react';

const Instruction = (props) => {

    let content = (
        <div className={'instruction'}>
            <ul className={'instruction__list'}>
                <h2 className={'instruction__title'}>Instruction</h2>
                <li>To add task you can either press the button or hit enter</li>
                <hr/>
                <li>To add the priority task, check fire icon next to the text field</li>
                <hr/>
                <li>You will get an extra minute to break time for each completed priority task</li>
                <hr/>
                <li>Next to tasks you will find a timer that shows you when the task has been added or finished</li>
            </ul>
            <button className={'functional-btn instruction__btn'} onClick={props.closeInstructionPopup}>Close</button>
        </div>
    )

    if (!props.isOpen) {
        content = null;
    }

    return (
        <div>{content}</div>
    );
}
 
export default Instruction;