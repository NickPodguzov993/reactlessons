import React from "react";
import {PageTitle} from "./PageTitle";

export function Accordion(props:{title:string, collapsed:boolean}) {
    if(props.collapsed === true){
        return  <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    } else {
        return   <div>
            <AccordionTitle title={props.title}/>
        </div>
    }
}

function AccordionTitle(props: {title:string}) {
    return (
        <div>
           <PageTitle title={props.title}/>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
}