import React, { useState, useEffect } from 'react';

const RandomNumberGame = () => {
 
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [resultMessage, setResultMessage] = useState('Guess a number between 1 and 100');

  useEffect(() => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setResultMessage('Guess a number between 1 and 100');
  }, []);

  const checkGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setResultMessage('Please enter a valid number');
    } else if (guess === targetNumber) {
      setResultMessage('Congratulations! You guessed the correct number!');
    } else if (guess < targetNumber) {
      setResultMessage('Try a higher number');
    } else {
      setResultMessage('Try a lower number');
    }
  };

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p>{resultMessage}</p>
      <input
        type="number"
        placeholder="Your Guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <br />
      <button onClick={checkGuess}>Submit Guess</button>
      <br />
      <button onClick={() => window.location.reload()}>Start New Game</button>
    </div>
  );
}

export default RandomNumberGame;
