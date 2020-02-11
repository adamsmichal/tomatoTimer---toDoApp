import React from 'react';

const StartButton = (props) => {
    return (
        <button onClick={props.startCounting}>{props.active ? "Stop" : "Start"}</button>
    );
}
 
export default StartButton;