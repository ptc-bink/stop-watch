
import React from "react";
import "./ControlButton.css";
  
export default function ControlButtons(props:ControlButtonsProps) {
  const startButton = (
    <button className="btn btn-one btn-start"
         onClick={props.onHandleStart}>
      Start
    </button>
  );
  
  const activeButtons = (
    <div className="d-flex">
      <button className="btn btn-two" 
           onClick={props.onHandleReset}>
        Reset
      </button>
      <button className="btn btn-one" 
           onClick={props.onHandlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
  
  return (
    <div className="control-buttons">
      <div className="btn-grp">
        <div>{props.isActived ? activeButtons : startButton}</div>
      </div>
    </div>
  );
}


export declare interface ControlButtonsProps {
  onHandleStart : () => void;
  onHandleReset : () => void;
  onHandlePauseResume : () => void;
  isPaused : boolean;
  isActived: boolean;
}