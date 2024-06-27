import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://express-t4.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password: password }),
    });

    if (response.ok) {
      navigate('/profile');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit}>
          <label><strong>Email:</strong></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label><strong>Password:</strong></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
