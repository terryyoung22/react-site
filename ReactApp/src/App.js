import logo from './logo.svg';
import './App.css';
import greeting from '@terryyoung22/npmcode';

greeting();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>-Terry React Site-</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/terryyoung22"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github!
        </a>
      </header>
    </div>
  );
}

export default App;
