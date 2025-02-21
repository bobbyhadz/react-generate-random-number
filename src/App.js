import './App.css';

import {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
  };

  return (
    <div>
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>
        Generate random number
      </button>
    </div>
  );
};

export default App;
