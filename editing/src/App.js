import React from 'react';
//import logo from './logo.svg';
import './App.css';

import ServiceSearch from './components/ServiceSearch';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';

export default function App() {
    return (
        <div className='App'>
            <ServiceSearch/>
            <ServiceAdd />
            <ServiceList />
        </div>
    );
}