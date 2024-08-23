import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

interface QuizResultProps {
  score: number;
  totalQuestions: number;
}

const QuizResult = ({ score, totalQuestions }: QuizResultProps) => {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const handlePlayAgain = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      {/* Top icon and title */}
      <div className="flex items-center mb-4">
        <FaHtml5 className="bg-custom-purple text-4xl mr-2" />
        <span className="text-custom-text text-xl font-semibold">HTML</span>
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Title and description */}
        <div className="text-center text-custom-text mb-6">
          <h2 className="text-2xl font-bold">Quiz Completed</h2>
          <p className="text-xl mt-2">You scored...</p>
        </div>

        {/* Results card */}
        <div className="bg-white text-custom-text p-20 rounded-lg shadow-lg flex flex-col items-center">
          <div className="flex items-center mb-4">
            <FaHtml5 className="bg-custom-purple text-4xl mr-2" />
            <span className="text-xl font-semibold">HTML</span>
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
            className="bg-custom-purple text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
