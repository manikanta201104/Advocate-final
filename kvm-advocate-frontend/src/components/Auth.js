import { useState } from 'react';
import axios from 'axios';

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const url = isSignup
        ? 'http://localhost:5000/api/auth/signup'
        : 'http://localhost:5000/api/auth/login';
      const data = isSignup ? { email, password, role: 'client' } : { email, password };
      const response = await axios.post(url, data);

      if (isSignup) {
        setMessage('Account created successfully! Please log in.');
        setIsSignup(false);
      } else {
        localStorage.setItem('token', response.data.token);
        setMessage('Logged in successfully!');
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.errors?.[0]?.msg || 'An error occurred');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          {isSignup ? 'Sign Up' : 'Log In'}
        </h1>
        <div className="flex mb-4">
          <button
            onClick={() => setIsSignup(true)}
            className={`flex-1 py-2 ${isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-lg`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignup(false)}
            className={`flex-1 py-2 ${!isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-r-lg`}
          >
            Log In
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 text-lg font-semibold mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-700 text-lg font-semibold mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
          >
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;