import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hooc from './Hooc';


export default function App() {

    return (
        <div>
            <Hooc url={`${process.env.REACT_APP_DATA_URL}/data`}/>
            <Hooc url={`${process.env.REACT_APP_DATA_URL}/loading`} />
            <Hooc url={`${process.env.REACT_APP_DATA_URL}/error`} />
        </div>
    );
}