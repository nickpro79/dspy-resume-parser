import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/form.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/auth/register', form);
      alert('Registration successful');
      navigate('/home');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Username" value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })} />
          <input type="password" placeholder="Password" value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">Register</button>
        </form>
        <div className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
