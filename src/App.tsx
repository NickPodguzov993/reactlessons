import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>This is App component</div>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

export default App;

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return (
        <div>
            <div>star</div>
        </div>
    );
}


function Accordion() {
    return (
        <div>
          <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    return (
        <div>
            <div>Menu</div>
        </div>
    );
}

function AccordionBody() {
    return (
        <div>
            <div>Menu</div>
        </div>
    );
}

