// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Redirect to Admin Dashboard
    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
