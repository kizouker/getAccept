import React from 'react'
import './Frame.css'
import { useSelector } from 'react-redux';
import BowlingSlice from './BowlingSlice.js';

const Frame = (props) => {

    const frames = useSelector((state) => state.bowling.frames);
    const currentFrame = useSelector((state) => state.bowling.currentFrame);
    const currentRoll = useSelector((state) => state.bowling.currentRoll);
 
const currentFrame2 = useSelector((state) => state.bowling.frames[props.frame]);
console.log(currentFrame2);;

let roll1;
if (currentFrame2 !== null && currentFrame2 !== undefined && currentFrame2[0] !== null) {
  roll1 = currentFrame2[0];
} else {
  roll1 = "-"; // or whatever you want the default value to be
}

let roll2;
if (currentFrame2 !== null && currentFrame2 !== undefined && currentFrame2[1] !== null) {
  roll2 = currentFrame2[1];
} else {
  roll2 = "-"; // or whatever you want the default value to be
}


let previousRoll;

    if (currentRoll === 0 && currentFrame !== 0) {
        previousRoll = frames[currentFrame - 1][1];
    } else if (currentRoll === 1) {
        previousRoll = frames[currentFrame][0];
    } else {
        previousRoll = null;
    }
    return (
        <div className="container">
            <div className="box" id="header">{props.frame+1}</div>
            <div className="box" id="rollOne">{roll1}</div>
            <div className="box" id="rollTwo">{roll2}</div>
            <div className="box" id="sum">sum</div>
        </div>
    )
}

export default Frame;


/***
 * 
 * GOOD work: from the frontend course at udacotuy last authum - it paid off!
 */