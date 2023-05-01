import React, {useState} from "react";
import {PageTitle} from "./PageTitle";

export function UncontrolledAccordion(props:{title:string}) {
        const [collapsed,setCollapsed] = useState(false)
    return  <div onClick={()=>setCollapsed(!collapsed)}>
        <AccordionTitle title={props.title}/>
        {!collapsed && <AccordionBody/>}
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