import React from "react";

export function Rating(props:{value:number}) {

          return  <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
        }


type StarType = {
    selected:boolean
}

function Star(props:StarType) {

    if (props.selected === true){ return <span><b>star </b></span>}
    else{ return <span>star </span>}
}