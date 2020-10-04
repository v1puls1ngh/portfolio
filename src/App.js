import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

import './App.css';


class App extends Component {
    render(){
        return(
            <Router>
                <div className='main-container'>
                    <Header />

                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path='/work'>
                            <Work />
                        </Route>
                        <Route path='/'>
                            <Home/>
                        </Route>
                    </Switch>    
                </div>
                
            </Router>
        )
    }
}

export default App;