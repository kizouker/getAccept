import logo from './logo.svg';
import './css/App.css';
import BowlingGame from './components/BowlingGame.js';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const App = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning((prevState) => !prevState);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${isSpinning ? 'spin' : ''}`} alt="logo" />
          <button onClick={toggleSpin}>Toggle Spin</button>
        </header>

        <div className="App-body">
          <BowlingGame></BowlingGame>
        </div>
      </div>
    </Provider>
  );
};

export default App;
