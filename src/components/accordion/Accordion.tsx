import React from "react";
import {PageTitle} from "./PageTitle";

export function Accordion(props:{title:string, collapsed:boolean}) {

        return  <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
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