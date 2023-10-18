const StatusBar = ({ correctAnswers, totalQuestions }) => (
  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
    <p className="text-lg font-semibold text-blue-800">
      Correct: {correctAnswers} / {totalQuestions}
    </p>
  </div>
);

export default StatusBar;
