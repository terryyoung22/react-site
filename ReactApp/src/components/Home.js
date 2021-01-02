import React, { Component } from "react";
import logo from '../logo.svg';
import history from './history';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Terry's Portfolio Directory!</code><br></br>
          <code> -- Deployed Through Docker on ECS --</code>
        </p>
        <p>
          <h1 align="left"><u>Paths</u></h1>
          <h3><a href="http://portfolio.typrojects.io">Visit my actual portfolio</a></h3>
          <h3><a href="https://github.com/terryyoung22">My Github Page</a></h3>
          <h3><a href="https://www.linkedin.com/in/terry-young/">Lets get Linked here!</a></h3>
          <h1> ** 🚀 UNDER CONTRUCTION! 🚀 ** </h1>
          More links to come!
        </p>

        {/* <form>
            <Button onClick={() => history.push('./About')}>Click test</Button><br></br>
            <Button onClick={() => history.push('./wonderful')}>Click another</Button>
          </form> */}

      </header>
    </div>
  );
}
}