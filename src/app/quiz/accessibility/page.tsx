"use client";

import React, { useState, useEffect } from 'react';
import QuizResult from './QuizResult'; // Import the QuizResult component
import { FaAccessibleIcon } from 'react-icons/fa';
import Question from '../../../components/Questions';
import ThemeToggle from '../../themeToggle'; // Import the ThemeToggle component

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [clickedAnswer, setClickedAnswer] = useState<string | null>(null); // State to track clicked answer
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Dark mode state

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/data/questions.json');
        const data = await response.json();
        setQuestions(data.quizzes[3].questions);
        setQuizTitle(data.quizzes[3].title);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (answer: string) => {
    setSelectedAnswers([...selectedAnswers.slice(0, currentQuestion), answer]);
    setClickedAnswer(answer); // Update clickedAnswer
    setErrorMessage('');
  };

  const handleSubmit = () => {
    if (selectedAnswers[currentQuestion]) {
      setIsSubmitted(true);
      setTimeout(() => {
        const correctAnswer = questions[currentQuestion]?.answer;
        const isCorrect = selectedAnswers[currentQuestion] === correctAnswer;

        if (isCorrect) {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setIsCompleted(true);
          }
        } else {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setIsCompleted(true);
          }
        }

        setIsSubmitted(false);
        setClickedAnswer(null); // Reset clickedAnswer for next question
      }, 500);
    } else {
      setErrorMessage('Please select an answer before proceeding.');
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    const score = calculateScore();
    return <QuizResult score={score} totalQuestions={questions.length} />;
  }

  const current = questions[currentQuestion] || {};
  const { question = '', options = [], answer = '' } = current;

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-4 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-custom-text'
      }`}
    >
      <div
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <div className="flex items-center mb-4 justify-between">
          <div className="flex items-center">
            <FaAccessibleIcon className="text-4xl mr-2" />
            <span className="text-xl font-semibold">{quizTitle}</span>
          </div>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        </div>
        <p className="italic mb-4 text-center">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="mb-8">
          <Question
            question={question}
            options={options}
            selectedAnswer={selectedAnswers[currentQuestion] || null}
            correctAnswer={answer}
            isSubmitted={isSubmitted}
            clickedAnswer={clickedAnswer} // Pass clickedAnswer
            onAnswerChange={handleAnswerChange}
            isDarkMode={isDarkMode} // Pass isDarkMode
          />

          <div className="relative pt-1 mt-6">
            <div className="flex mb-2 items-center justify-between">
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${
                  isDarkMode ? 'text-blue-300 bg-blue-800' : 'text-blue-600 bg-blue-200'
                } uppercase`}
              >
                Progress
              </span>
            </div>
            <div className="flex">
              <div
                className={`relative flex-1 rounded-full h-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-blue-200'
                }`}
                style={{ width: '100%' }}
              >
                <div
                  className={`absolute top-0 left-0 h-2 ${
                    isDarkMode ? 'bg-custom-purple' : 'bg-custom-purple'
                  } rounded-full`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`font-bold py-2 px-10 rounded-lg ${
              isDarkMode ? 'bg-custom-purple text-white hover:bg-purple-700' : 'bg-custom-purple text-white hover:bg-purple-700'
            }`}
            onClick={handleSubmit}
          >
            {currentQuestion < questions.length - 1 ? 'Submit Answer' : 'Finish Quiz'}
          </button>
        </div>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
