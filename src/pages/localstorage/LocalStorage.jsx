import React, { useState, useEffect } from 'react';

const App = () => {
  const [myData, setMyData] = useState('');
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    const storedToken = localStorage.getItem('authToken');

    if (storedData) {
      setMyData(storedData);
    }

    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  const handleInputChange = (event) => {
    const newData = event.target.value;
    setMyData(newData);
    localStorage.setItem('myData', newData);
  };

  const handleLogin = () => {
    const fakeAuthToken = 'exampleToken';
    setAuthToken(fakeAuthToken);
    localStorage.setItem('authToken', fakeAuthToken);
  };

  const handleLogout = () => {
    setAuthToken('');
    localStorage.removeItem('authToken');
  };

  return (
    <div>
      <label>
        Enter Data:
        <input type="text" value={myData} onChange={handleInputChange} />
      </label>

      {authToken ? (
        <div>
          <p>
            <strong>Data stored in local storage:</strong> {myData}
          </p>
          <p>
            <strong>Authentication Token:</strong> {authToken}
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default App;
