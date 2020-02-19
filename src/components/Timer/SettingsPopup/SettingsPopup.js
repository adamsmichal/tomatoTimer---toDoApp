import React from 'react';

const SettingsPopup = (props) => {

    let content = (
        <div className={'settings-popup'}>
            <div className={'settings-popup__item'}>
                <button onClick={props.subHr}>-</button>Hours: {props.hr}<button onClick={props.addHr}>+</button>
            </div>
            <div className={'settings-popup__item'}>
                <button onClick={props.subMin}>-</button>Minute: {props.min}<button onClick={props.addMin}>+</button>
            </div>
            <div className={'settings-popup__item'}>
                <button onClick={props.subShortBreak}>-</button>Short break: {props.shortBreak} min<button onClick={props.addShortBreak}>+</button>
            </div>
            <div className={'settings-popup__item'}>
                <button onClick={props.subLongBreak}>-</button>Long break: {props.longBreak} min<button onClick={props.addLongBreak}>+</button>
            </div>
        </div>
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