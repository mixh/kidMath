import React, { useState, useEffect } from "react";
import StatusBar from "./StatusBar";

const generateAdditionProblem = () => {
  const newNum1 = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
  const newNum2 = Math.floor(Math.random() * 100);
  return { num1: newNum1, num2: newNum2 };
};

const AdditionModule = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const { num1: newNum1, num2: newNum2 } = generateAdditionProblem();
    setNum1(newNum1);
    setNum2(newNum2);
  }, []);

  const checkAnswer = () => {
    const answer = num1 + num2;
    const userEnteredAnswer = parseInt(userAnswer, 10);

    if (userEnteredAnswer === answer) {
      setIsCorrect(true);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIsCorrect(false);
    }

    setTotalQuestions(totalQuestions + 1);

    const { num1: newNum1, num2: newNum2 } = generateAdditionProblem();
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
  };

  return (
    <div className="p-4 bg-purple-100 rounded-lg">
      <h1 className="text-2xl font-bold text-purple-800 mb-4">
        Addition Module
      </h1>
      <p className="text-lg font-semibold text-purple-800">
        Solve the addition problem: {num1} + {num2} =
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
          {isCorrect ? "Correct!" : "Wrong!"} Total correct: {correctAnswers}/
          {totalQuestions}
        </p>
      )}
      <StatusBar
        correctAnswers={correctAnswers}
        totalQuestions={totalQuestions}
      />
    </div>
  );
};

export default AdditionModule;
