"use client";

import React, { useState, useEffect } from 'react';
import { FaJs } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import ThemeToggle from '../../themeToggle'; // Import the ThemeToggle component

interface QuizResultProps {
  score: number;
  totalQuestions: number;
}

const QuizResult = ({ score, totalQuestions }: QuizResultProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Dark mode state
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Set the data-theme attribute on the HTML element to control theme
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Function to handle navigation
  const handlePlayAgain = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div
      className={`flex flex-col min-h-screen p-4 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-custom-text'
      }`}
    >
      {/* Top bar with icon and theme toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaJs className="bg-custom-purple text-4xl mr-2" />
          <span className="text-xl font-semibold">JavaScript</span>
        </div>
        <ThemeToggle
          isDarkMode={isDarkMode}
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Title and description */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Quiz Completed</h2>
          <p className="text-xl mt-2">You scored...</p>
        </div>

        {/* Results card */}
        <div
          className={`${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-custom-text'
          } p-20 rounded-lg shadow-lg flex flex-col items-center`}
        >
          <div className="flex items-center mb-4">
            <FaJs className="bg-custom-purple text-4xl mr-2" />
            <span className="text-xl font-semibold">JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-center h-24 mt-4">
            <span className="font-bold text-5xl">{score}</span>
            <span className="text-sm font-semibold mt-2">out of {totalQuestions}</span>
          </div>
        </div>

        {/* Play Again button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePlayAgain} // Attach click handler
            className={`${
              isDarkMode ? 'bg-custom-purple text-white hover:bg-purple-700' : 'bg-custom-purple text-white hover:bg-purple-700'
            } px-6 py-3 rounded-md font-medium transition duration-200`}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
