import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email || !newPassword || !confirmPassword) {
      return setError('Please fill all fields');
    }

    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match');
    }

    // Simulate success
    alert('Password has been reset successfully!');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-[#2F5249]">Reset Password</h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97B067]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97B067]"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97B067]"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2F5249] text-white py-2 rounded-lg hover:bg-[#3b6b5c] transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordComponent;
