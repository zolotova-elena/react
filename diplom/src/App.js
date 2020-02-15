import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './css/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import About from './components/About';
import Contacts from './components/Contacts';
import PageNotFound from './components/PageNotFound';
import Item from './components/Item';
import Main from './components/Main';
import Cart from './components/Cart';
import CartSuccess from './components/CartSuccess';
/*

!!! осталась корзина

*/

export default function App () {

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/catalog' exact component={Catalog} />
                <Route path='/about' component={About} />
                <Route path='/contacts' component={Contacts} replace/>
                <Route path='/cart' exact component={Cart} />
                <Route path='/cart/success' exact component={CartSuccess} />
                <Route path='/catalog/:id' exact component={Item} />
                <Route path='*' component={PageNotFound} />
            </Switch>
            <Footer/>
        </Router>
    );
}

