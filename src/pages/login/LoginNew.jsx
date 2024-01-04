import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const LoginNew = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
   
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    toast.success('Logged out successfully!');
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default LoginNew;
