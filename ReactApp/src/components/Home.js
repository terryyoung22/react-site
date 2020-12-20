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
          <code>Welcome To My React App!</code><br></br>
          <code> -- Deployed through Docker on EKS --</code>
        </p>
        <p>
          <h1 align="left">Purpose</h1>
          This is just a portfolio of small react apps functions I created.<br></br>
          Always looking for new ideas so please let me know / suggest projects!
        </p>
        <p>
          <h1 align="left">Fun Stuff!</h1>
          Click one of the links below to be taken to the page to see the feature!:
          <h1> ** 🚀 UNDER CONTRUCTION! 🚀 ** </h1>
        </p>
        <form>
            <Button onClick={() => history.push('./About')}>Click test</Button><br></br>
            <Button onClick={() => history.push('./wonderful')}>Click another</Button>
          </form>

      </header>
      <body>

      <div id="wonderful"></div>

      </body>
    </div>
  );
}
}