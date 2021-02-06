import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
     <div className="App">
        <header className="App-topline">
        <p align="left">
          <NavLink to="/">Home</NavLink> | 
          <NavLink to="/about">About</NavLink> | 
          <NavLink to="/contact">Contact</NavLink> |
          <a
          className="App-link"
          href="https://github.com/terryyoung22"
          target="_blank"
          rel="noopener noreferrer"
          >
          My Github!
          </a>
          </p>
          </header>
       </div>
    );
}
 
export default Navigation;