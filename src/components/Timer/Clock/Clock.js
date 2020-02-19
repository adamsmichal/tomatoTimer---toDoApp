import React from 'react';

const Clock = (props) => {
    return (
        <div className={'clock'}>
            {props.hr > 9 ? props.hr : `0${props.hr}`} : {props.min > 9 ? props.min : `0${props.min}`} : {props.sec > 9 ? props.sec : `0${props.sec}`}
        </div>
    );
}
 
export default Clock;