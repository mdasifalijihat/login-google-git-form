import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then(() => {
        alert("Password reset emil sent")
    }).catch((error) => {
        console.log(error);
        alert("error this email")
    })
        
    setEmail(""); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Forgot Your Password?</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Enter your email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400"
          >
            Send Reset Link
          </button>
        </form>
        

        <div className="mt-6 text-center">
          <a href="/login" className="text-indigo-500 hover:text-indigo-700 text-sm">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
