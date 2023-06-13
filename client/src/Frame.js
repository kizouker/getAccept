import React from 'react'
import './Frame.css'
import { useSelector } from 'react-redux';
import BowlingSlice from './BowlingSlice.js';

const Frame = (props) => {

    const frames = useSelector((state) => state.bowling.frames);
    const currentFrame = useSelector((state) => state.bowling.currentFrame);
    const currentRoll = useSelector((state) => state.bowling.currentRoll);
 

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
            <div className="box" id="header">{props.frame}</div>
            <div className="box" id="rollOne">{props.roll1}</div>
            <div className="box" id="rollTwo">{previousRoll}</div>
            <div className="box" id="sum">sum</div>
        </div>
    )
}

export default Frame;


/***
 * 
 * GOOD work: from the frontend course at udacotuy last authum - it paid off!
 */