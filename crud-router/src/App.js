import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Main';
import CreatePost from './CreatePost';
import ChangePost from './ChangePost';
import Post from './Post';
/*
import NotFoundPage from './NotFoundPage'
import CreatePost from '../src/components/CreatePost'
import DisplayPage from '../src/components/DisplayPage'
import EditPage from '../src/components/EditPage'
*/

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/posts/new" exact component={CreatePost}/>
                <Route path="/posts/:id" exact component={Post} />
                <Route path="/posts/:id/:edit" exact component={ChangePost} />
            </Switch>
        </Router>
    )
}

/*

                <Route path="/posts/:id" exact component={DisplayPage} />

                <Route path="*" exact component={NotFoundPage} />
 */