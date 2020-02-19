import React from 'react';

const StartButton = (props) => {
    return (
        <button className={'functional-btn start-btn'} onClick={props.startCounting}>{props.active ? "Stop" : "Start"}</button>
    );
}
 
export default StartButton;