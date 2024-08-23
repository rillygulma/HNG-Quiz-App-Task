import React from 'react';
import { ImSwitch } from "react-icons/im";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`py-2 px-4 rounded-lg transition-colors duration-300 flex items-center ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-custom-bg text-custom-text'
      }`}
    >
      <span className="flex items-center">
        {isDarkMode ? (
          <>
            <span className="mr-2">🌙</span>
            <span className="bg-gray-900 px-2 py-1 rounded text-white">
              <ImSwitch />
            </span>
          </>
        ) : (
          <>
            <span className="mr-2">☀️</span>
            <span className="bg-custom-purple px-2 py-1 rounded">
              <ImSwitch className="text-white" />
            </span>
          </>
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
