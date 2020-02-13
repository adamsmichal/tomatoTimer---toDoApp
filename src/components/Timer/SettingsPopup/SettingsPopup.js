import React from 'react';

const SettingsPopup = (props) => {

    let content = (
        <React.Fragment>
            <div>
                <button onClick={props.subHr}>-</button>Hours: {props.hr}<button onClick={props.addHr}>+</button>
            </div>
            <div>
                <button onClick={props.subMin}>-</button>Minute: {props.min}<button onClick={props.addMin}>+</button>
            </div>
            <div>
                <button onClick={props.subShortBreak}>-</button>Short break: {props.shortBreak} min<button onClick={props.addShortBreak}>+</button>
            </div>
            <div>
                <button onClick={props.subLongBreak}>-</button>Long break: {props.longBreak} min<button onClick={props.addLongBreak}>+</button>
            </div>
        </React.Fragment>
    )

    if (!props.isOpen) {
        content = null;
    } else if (!props.breakTime) {
        content = (
            <p>It's time to rest!</p>
        )
    }

    return(
        <div>{content}</div>
    );
}
 
export default SettingsPopup;