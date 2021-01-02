import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import './../App.css';


import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import history from './history';


export default class Routes extends Component {
  render() {
    return (      
       <Router history={history}>
            <Switch>
             <Route path="/" exact component={Home} /> |
             <Route path="/About" component={About}/> |
             <Route path="/Contact" component={Contact}/> |
             <Route component={Error}/>
           </Switch>
      </Router>
    );
  }
}
