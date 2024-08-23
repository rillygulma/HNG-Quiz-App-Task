"use client"; // Ensure to include this directive for client-side rendering in Next.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaHtml5, FaCss3, FaJs, FaAccessibleIcon } from 'react-icons/fa';
import ThemeToggle from './themeToggle'; // Adjust the path as necessary

const Page: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-custom-text'
      }`}
    >
      <div className="flex w-full max-w-4xl px-4 items-start justify-between">
        {/* Spacer to push ThemeToggle to the right */}
        <div className="flex-grow"></div>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl px-4 mt-6">
        <div className="flex w-full justify-between items-start">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl text-left">
              Welcome to the
              <br />
              <span className='font-bold'>Frontend Quiz!</span>
            </h1>
            <p className='italic mt-4 text-left'>Pick a subject to get started.</p>
          </div>
          <div className="flex flex-col space-y-2 w-64">
            <button
              onClick={() => handleNavigate('/quiz/html')}
              className={`font-bold py-2 px-4 rounded-lg flex items-center ${
                isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-custom-text hover:bg-blue-700'
              }`}
            >
              <FaHtml5 className='bg-blue-500 mr-3 rounded-sm' />
              HTML
            </button>
            <button
              onClick={() => handleNavigate('/quiz/css')}
              className={`font-bold py-2 px-4 rounded-lg flex items-center ${
                isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-custom-text hover:bg-green-700'
              }`}
            >
              <FaCss3 className='bg-green-500 mr-3 rounded-sm' />
              CSS
            </button>
            <button
              onClick={() => handleNavigate('/quiz/javaScript')}
              className={`font-bold py-2 px-4 rounded-lg flex items-center ${
                isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-custom-text hover:bg-yellow-700'
              }`}
            >
              <FaJs className='bg-yellow-500 mr-3 rounded-sm' />
              JavaScript
            </button>
            <button
              onClick={() => handleNavigate('/quiz/accessibility')}
              className={`font-bold py-2 px-4 rounded-lg flex items-center ${
                isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-custom-text hover:bg-purple-700'
              }`}
            >
              <FaAccessibleIcon className='bg-purple-500 mr-3 rounded-sm' />
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
