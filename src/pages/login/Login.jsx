import React, { useState } from "react";
import zxcvbn from "zxcvbn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordScore, setPasswordScore] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordResult = zxcvbn(password);

    if (email && passwordResult.score >= 3) {
      alert("Login successful!");
    } else {
      alert("Please enter a valid email and a stronger password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setPassword(e.target.value);
              const result = zxcvbn(e.target.value);
              setPasswordScore(result.score);
            }}
            required
          />
        </label>
        {passwordScore !== null && (
          <p style={{ color: passwordScore >= 3 ? "green" : "red" }}>
            Password Strength: {passwordScore}/4
          </p>
        )}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
