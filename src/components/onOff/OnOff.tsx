import React, {useState} from 'react';
import './OnOff.css';

type PropsType = {

}


export const OnOff = (props:PropsType) => {

    const [on,setOn] = useState(false)

    const changeOnColor = ()=> {
        setOn(!on)
    }

    return (
        <div>
            <div onClick={changeOnColor} className={on ? 'on' : ''}>on</div>
            <div onClick={changeOnColor} className={!on ? 'off' : ''}>off</div>
            <div className={on ? 'on' : 'off'}>round</div>
        </div>
    );
};

export default OnOff;