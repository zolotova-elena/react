import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage';
import Menu from './Menu';

export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/drift" component={DriftPage} />
                    <Route path="/timeattack" component={TimeAttackPage} />
                    <Route path="/forza" component={ForzaPage} />
                </div>
            </div>
        </Router>
    );
}

