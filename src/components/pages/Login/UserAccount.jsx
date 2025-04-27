import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';

const UserAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        alert('Logout success')
        setUser(null); // Clear user data after logging out
      })
      .catch((error) => {
        console.log("Error signing out:", error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {user ? (
          <div>
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Account</h2>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-24 h-24 rounded-full border border-gray-300"
              />
              <h3 className="text-xl font-medium text-gray-800">{user.displayName || "No Name"}</h3>
              <p className="text-gray-600">{user.email}</p>

              <div className="mt-6">
                <button
                  onClick={handleLogout}
                  className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">No User Logged In</h2>
            <p className="text-gray-600 text-center">Please log in to view your account information.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAccount;
