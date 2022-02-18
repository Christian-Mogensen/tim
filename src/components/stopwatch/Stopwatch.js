import React, { useState } from "react";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import { CircularProgressbar } from "react-circular-progressbar";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  let elapseSec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let elapseMin = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let elapseHour = ("0" + Math.floor((time / 3600000) % 24)).slice(-2);
  return (
    <div className="bg-red-300 ">
      <div className="relative w-72 grid grid-cols-1 place-content-center bg-green-300">
        <CircularProgressbar value={elapseHour} maxValue={24} />

        <div className="w-[95%] h-[95%] absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <CircularProgressbar value={elapseMin} maxValue={60} />
        </div>
        <div className="w-[90%] h-[90%] absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <CircularProgressbar value={elapseSec} maxValue={60} />
        </div>
        <Timer time={time} />
      </div>

      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default StopWatch;
