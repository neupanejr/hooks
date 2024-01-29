import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Hash = () => {
  const [inputText, setInputText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleHash = () => {
    if (inputText.trim() !== '') {
      // Hash the input using SHA-256
      const hashedValue = CryptoJS.SHA256(inputText).toString(CryptoJS.enc.Hex);
      setHashedText(hashedValue);
    }
  };

  return (
    <div>
      <label>
        Input Text:
        <input type="text" value={inputText} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleHash}>Hash Text</button>
      <br />
      {hashedText && (
        <div>
          <strong>Hashed Text:</strong>
          <p>{hashedText}</p>
        </div>
      )}
    </div>
  );
};

export default Hash;
