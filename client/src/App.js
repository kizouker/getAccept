import logo from './logo.svg';
import './App.css';
import BowlingGame from './BowlingGame.js';
import { useState } from 'react';

const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning((prevState) => !prevState);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${isSpinning ? 'spin' : ''}`}
          alt="logo"
        />
        <button onClick={toggleSpin}>Toggle Spin</button>
      </header>

      <div className="App-body">
        <BowlingGame></BowlingGame>
      </div>


      <footer className="App-footer">
        footer: Rickard Åberg
      </footer>
    
    
    </div>
  );
};

export default App;