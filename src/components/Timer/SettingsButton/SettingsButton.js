import React from 'react';

const SettingsButton = (props) => {
    return (
        <button className={'functional-btn settings-btn'} onClick={props.openSettings}>Settings</button>
    );
}
 
export default SettingsButton;