import React from 'react';
import './OnOff.css';

type PropsType = {
    color:boolean
}


export const OnOff = (props:PropsType) => {
    return (
        <div>
            <div className={props.color ? 'on' : ''}>on</div>
            <div className={!props.color ? 'off' : ''}>off</div>
            <div className={props.color ? 'on' : 'off'}>round</div>
        </div>
    );
};

export default OnOff;