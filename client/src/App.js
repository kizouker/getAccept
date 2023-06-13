import logo from './logo.svg';
import './App.css';
import BowlingGame from './BowlingGame.js';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from './Store.js';

const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning((prevState) => !prevState);
  };


  return (
    <Provider store={Store}>
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
    </Provider>
  );
};

export default App;