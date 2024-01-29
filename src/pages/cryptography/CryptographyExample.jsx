import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function CryptographyExample() {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const encrypt = () => {
    const key = 'mySecretKey123'; // Replace with a strong, secure key
    const ciphertext = CryptoJS.AES.encrypt(text, key).toString();
    setEncryptedText(ciphertext);
  };

  const decrypt = () => {
    const key = 'mySecretKey123'; // Use the same key as in encryption
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    setDecryptedText(plaintext);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encrypt"
      />
      <button onClick={encrypt}>Encrypt</button>
      <p>Encrypted Text: {encryptedText}</p>

      <p>Decrypted Text: {decryptedText}</p>
      <button onClick={decrypt}>Decrypt</button>
    </div>
  );
}

export default CryptographyExample;
