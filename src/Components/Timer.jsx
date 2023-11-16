import { useState, useRef } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        if (newSeconds === 60) {
          const newMinutes = prevTime.minutes + 1;
          return { hours: prevTime.hours, minutes: newMinutes, seconds: 0 };
        } else if (newSeconds > 60) {
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          return {
            hours: prevTime.hours,
            minutes: newMinutes,
            seconds: newSeconds % 60,
          };
        }
        return { ...prevTime, seconds: newSeconds };
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div className="text-center py-4">
      <h2 className="text-4xl font-bold mb-4">
        {formatTimeUnit(time.hours)}:{formatTimeUnit(time.minutes)}:
        {formatTimeUnit(time.seconds)}
      </h2>
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={isRunning ? stopTimer : startTimer}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
