
import React, { useState, useEffect, useRef } from "react";
import ControlButtons from "../ControlButton";
import Timer from "../Timer";
  
function StopWatch() {
  const [isActived, setIsActived] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState<number>(0);
  let interval = useRef<number | null>(null);
  
  useEffect(() => {
    if (isActived && isPaused === false) {
      interval.current = window.setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      if(interval.current)
      {
        window.clearInterval(interval.current);
        setTime(0);
        interval.current = null;
      }
    }
    return () => {
      if(interval.current) {
        window.clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [isActived, isPaused]);
  
  const handleStart = () => {
    setIsActived(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActived(false);
    setTime(0);
  };
  
  return (
    <div>
      <Timer time={time} />
      <ControlButtons
        isActived={isActived}
        isPaused={isPaused}
        onHandleStart={handleStart}
        onHandlePauseResume={handlePauseResume}
        onHandleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;