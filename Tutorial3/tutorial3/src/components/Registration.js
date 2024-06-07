import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [fName, setFirstName] = useState('');
  const [lName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const errorList = [];
    if (!/^[A-Za-z]+$/.test(fName)) {
      errorList.push('Invalid Format->Accepting only letters for First Name.');
    }
    if (!/^[A-Za-z]+$/.test(lName)) {
      errorList.push('Invalid Format->Accepting only letters for Last Name.');
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      errorList.push('Invalid Email format.');
    }
    if (!/^[\w@#$%^&+=!]{8,}$/.test(password)) {
      errorList.push('For password minimum 8 characters, a special character, alphanumeric characters are required.');
    }
    if (password !== confirmPassword) {
      errorList.push('Passwords do not match.');
    }

    setErrors(errorList);

    if (errorList.length === 0) {
      navigate('/profile', {
        state: {
          fName,
          lName,
          email,
        },
      });
    }
  };

  return (
    <div>
      <form method="post" onSubmit={handlesubmit}>
        <h4>Fill up the form</h4>
        <p>
          <label><strong>First Name:</strong></label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={fName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </p>
        <p>
          <label><strong>Last Name:</strong></label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </p>
        <p>
          <label><strong>Email ID:</strong></label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label><strong>Password:</strong></label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <label><strong>Confirm Password:</strong></label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </p>
        {errors.length > 0 && (
          <div className="error-message">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div>
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
