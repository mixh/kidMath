/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const MultiplicationModule = ({ updateProgress }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [localCorrectAnswers, setLocalCorrectAnswers] = useState(0);
  const [localTotalQuestions, setLocalTotalQuestions] = useState(0);

  useEffect(() => {
    generateProblem();
  }, []);

  const generateProblem = () => {
    const newNum1 = Math.floor(Math.random() * 25);
    const newNum2 = Math.floor(Math.random() * 25);
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
  };

  const checkAnswer = () => {
    const answer = num1 * num2;
    const userEnteredAnswer = parseFloat(userAnswer);

    const correct = userEnteredAnswer === answer;
    setIsCorrect(correct);
    updateProgress(correct);

    // Update local module progress
    setLocalTotalQuestions(localTotalQuestions + 1);
    if (correct) {
      setLocalCorrectAnswers(localCorrectAnswers + 1);
    }

    generateProblem();
  };

  return (
    <div className="p-4 bg-purple-100 rounded-lg">
      <h1 className="text-2xl font-bold text-purple-800 mb-4">
        Multiplication Module
      </h1>
      <p className="text-lg font-semibold text-purple-800">
        Solve the multiplication problem: {num1} × {num2} =
      </p>
      <input
        className="p-2 mt-2 border-2 border-purple-300 rounded"
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        onClick={checkAnswer}
      >
        Check Answer
      </button>
      {isCorrect !== null && (
        <p className="mt-4 text-lg font-semibold text-purple-800">
          {isCorrect ? "Correct!" : "Wrong!"}
        </p>
      )}
      {/* Individual module progress */}
      <p className="mt-2 text-lg font-semibold text-purple-800">
        Module Progress: {localCorrectAnswers}/{localTotalQuestions}
      </p>
    </div>
  );
};

export default MultiplicationModule;
