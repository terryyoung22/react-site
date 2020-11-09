import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <Router>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
           </Switch>
        </div> 
      </Router>
    );
  }
}

export default App;
