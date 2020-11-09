import React from 'react';
import logo from '../logo.svg';

const home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome To My Page!</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/terryyoung22"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github!
        </a>
        <p>
          <h1 align="left">Purpose</h1>
          This is just a portfolio of small react apps functions I created.<br></br>
          Always looking for new ideas so please let me know / suggest projects!
        </p>
        <p>
          <h1 align="left">Fun Stuff!</h1>
          Click one of the links below to be taken to the page to see the feature!:
        </p>

      </header>
    </div>
  );
}

export default home;