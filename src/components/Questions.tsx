import React from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  isSubmitted: boolean;
  clickedAnswer: string | null;
  onAnswerChange: (answer: string) => void;
  isDarkMode: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  isSubmitted,
  clickedAnswer,
  onAnswerChange,
  isDarkMode
}) => {
  // Define the base button class
  const buttonClassBase = `
    py-2 px-4 font-semibold rounded-lg border ${isDarkMode ? 'border-gray-700 text-white bg-gray-900' : 'border-gray-300 text-custom-text bg-white'}
    flex w-full h-12
  `;

  return (
    <div>
      <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-custom-text'}`}>{question}</h2>
      <ul className="mt-4">
        <div className={`flex flex-col gap-2 ${isDarkMode ? 'text-white' : 'text-custom-text'}`}>
          {options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === correctAnswer;
            const isClicked = clickedAnswer === option;

            // Determine button border color based on submission, correctness, and selection
            const borderColor = isSubmitted
              ? (isCorrect && isSelected ? 'border-green-500' : (isSelected ? 'border-red-500' : ''))
              : (isClicked ? 'border-custom-purple' : '');

            // Determine button letter color based on submission
            const letterColor = isSubmitted
              ? (isCorrect && isSelected ? 'bg-green-500 text-white' : (isSelected && !isCorrect ? 'bg-red-500 text-white' : ''))
              : (isClicked ? 'bg-custom-purple text-white' : '');

            const buttonClass = `
              ${buttonClassBase} 
              ${borderColor}
            `;

            return (
              <li key={index} className="w-full">
                <button
                  className={buttonClass}
                  onClick={() => onAnswerChange(option)}
                >
                  <span className={`inline-block rounded-full px-2 py-1 mr-2 ${letterColor}`}>
                    {option[0]}
                  </span>
                  {option.slice(1)}
                </button>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Question;
