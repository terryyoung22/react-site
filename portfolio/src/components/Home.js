import React, { Component } from "react";
import logo from '../logo.svg';
// import history from './history';
// import { Button } from 'react-bootstrap';

export default class Home extends Component {
render() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Terry's Portfolio Directory</code><br></br>
          <br></br>
          <code>More then just a DevOps Engineer! 🧑🏾‍💻</code><br></br>
          <code> -- Deployed Through Docker on ECS --</code>
        </p>
        </header>
        <body className="App-body">
        <p>
          <h1><u>My Other Sites</u></h1>
          <h3><a href="http://portfolio.typrojects.io">My Old Portfolio <br></br>(will be EOL once this is fully functional)</a></h3>
          <h3><a href="https://github.com/terryyoung22">My Github Page</a></h3>
          <h3><a href="https://www.linkedin.com/in/terry-young/">Lets get Linked here!</a></h3>
        </p>
        <p>
        <form>
        <h2><u>Details On Me</u></h2>
        <a href="./About" onclick="window.history.go(-1); return false;"> About Me! </a><br></br>
        <a href="./Skills" onclick="window.history.go(-1); return false;"> How Skilled Am I? </a><br></br>
        <a href="./Projects" onclick="window.history.go(-1); return false;"> Built Projects </a><br></br>
        <a href="./Contact" onclick="window.history.go(-1); return false;"> Contact Me </a>
          </form>
          </p>
          <p>
          🚀  MORE COMING SOON! ALWAYS UNDER CONTRUCTION! 🚀 <li>Built By Terry!</li>
          </p>
      </body>
    </div>
    );
  }
}