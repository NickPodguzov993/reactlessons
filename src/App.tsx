import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {PageTitle} from "./components/accordion/PageTitle";

function App() {
    return (
        <div className="App">
          <PageTitle title={'This is App component'} />
          <PageTitle title={'This is App cnt'} />

            <Rating value={2}/>
            <Accordion title={'Accordion1111111'} collapsed={true}/>
            <Accordion title={'Accordion2222222'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;


