import React from 'react';
import './App.css'; // eslint-disable-next-line
import Routes from './components/Routes';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
}
export default App;
