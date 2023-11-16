import React, { useState } from "react";
import AdditionModule from "./AdditionModule";
import SubtractionModule from "./SubtractionModule";
import MultiplicationModule from "./MultiplicationModule";
import DivisionModule from "./DivisionModule";
import StatusBar from "./StatusBar";

const HomePage = () => {
  const [progress, setProgress] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
  });

  const updateProgress = (isCorrect) => {
    setProgress((prevProgress) => ({
      totalQuestions: prevProgress.totalQuestions + 1,
      correctAnswers: isCorrect
        ? prevProgress.correctAnswers + 1
        : prevProgress.correctAnswers,
    }));
  };

  return (
    <div>
      <StatusBar
        correctAnswers={progress.correctAnswers}
        totalQuestions={progress.totalQuestions}
      />
      <div className="flex justify-around mt-4">
        <AdditionModule updateProgress={updateProgress} />
        <SubtractionModule updateProgress={updateProgress} />
        <MultiplicationModule updateProgress={updateProgress} />
        <DivisionModule updateProgress={updateProgress} />
      </div>
    </div>
  );
};

export default HomePage;
