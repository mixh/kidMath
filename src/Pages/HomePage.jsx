import { useState } from "react";
import AdditionModule from "../Components/AdditionModule";
import SubtractionModule from "../Components/SubtractionModule";
import MultiplicationModule from "../Components/MultiplicationModule";
import DivisionModule from "../Components/DivisionModule";
import StatusBar from "../Components/StatusBar";
import Timer from "../Components/Timer";

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
    <div className="container mx-auto p-4">
      <Timer />
      <StatusBar
        correctAnswers={progress.correctAnswers}
        totalQuestions={progress.totalQuestions}
      />

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <AdditionModule updateProgress={updateProgress} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <SubtractionModule updateProgress={updateProgress} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <MultiplicationModule updateProgress={updateProgress} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <DivisionModule updateProgress={updateProgress} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
