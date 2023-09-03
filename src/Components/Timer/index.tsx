
import React from "react";
import { timeFormat } from "../../Common/TimeFormat";
import "./Timer.css";
  
export default function Timer(props:TimerProps) {
  return (
    <div className="timer">
      <div>
        <span className="digits">
          {timeFormat((props.time / 1000) % 60)}
        </span>
        <span className="digits-second">s</span>
      </div>
      <span className="mili-sec">
        {timeFormat((props.time / 10) % 100)}
      </span>
    </div>
  );
}

export declare interface TimerProps {
    time: number;
}