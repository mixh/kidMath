import React, { useState, useEffect } from "react";

const AdditionModule = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    generateProblem();
  }, []); // Run this effect when the component mounts

  const generateProblem = () => {
    const newNum1 = Math.floor(Math.random() * 100); // Generate random number between 0 and 9
    const newNum2 = Math.floor(Math.random() * 100);
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer("");
  };

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
    generateProblem();
  };

  return (
    <div>
      <h1>Addition Module</h1>
      <p>
        Solve the addition problem: {num1} + {num2} =
      </p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Check Answer</button>
      {isCorrect !== null && (
        <p>
          {isCorrect ? "Correct!" : "Wrong!"} Total correct: {correctAnswers}/
          {totalQuestions}
        </p>
      )}
    </div>
  );
};

export default AdditionModule;
