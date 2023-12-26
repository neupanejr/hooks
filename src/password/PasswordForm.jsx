import React, { useState } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const isValid = isStrongPassword(newPassword);
    setIsValidPassword(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidPassword) {
      
      console.log('Password is valid:', password);
    } else {
      console.log('Password is not valid. Please fix the issues.');
    }
  };

  const isStrongPassword = (password) => {
    
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasMinLength && hasUppercase && hasNumber && hasSpecialChar;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
      {!isValidPassword && <p>Password must have 8 characters, at least one uppercase letter, one number, and one special character.</p>}
    </form>
  );
};

export default PasswordForm;