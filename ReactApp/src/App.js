import React, { Component } from 'react';
import './App.css'; // eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import history from './components/history';

class App extends Component {
  render() {
    return (      
       <Router history={history}>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/> |
             <Route path="/about" component={About}/> |
             <Route path="/contact" component={Contact}/> |
            <Route component={Error}/>
           </Switch>
        </div> 
      </Router>
    );
  }
}

export default App;
