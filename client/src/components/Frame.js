import '../css/Frame.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Frame = (props) => {
  const frames = useSelector((state) => state.bowling.frames);
  const { frame } = props.frame;

  const currentFrame = frames[frame];

  let roll1, roll2, roll3;

  if (currentFrame !== null && currentFrame !== undefined && currentFrame[0] !== null) {
    roll1 = currentFrame[0];
    if (isStrike(roll1)) {
      roll2 = 'X';
    } else if (currentFrame[1] !== null) {
      roll2 = currentFrame[1];

      if (isSpare(roll1, roll2)) {
        roll2 = '/';
      }
    } else {
      roll2 = '-';
    }
  } else {
    roll1 = '-';
  }

  // if (currentFrame !== null && currentFrame !== undefined && currentFrame[1] !== null) {
  //   roll2 = currentFrame[1];
  // } else {
  //   roll2 = "-";
  // }

  if (currentFrame !== null && currentFrame !== undefined && currentFrame[1] !== null) {
    roll3 = currentFrame[1];
  } else {
    roll3 = '-';
  }
  // spare roll1+roll2 === 10 "/"
  // strike roll1 ===10 "X"

  return (
    <div className="container">
      <div className="box" id="frame">
        {props.frame + 1}
      </div>
      <div className="box" id="rollOne">
        {roll1}
      </div>
      <div className="box" id="rollTwo">
        {roll2}
      </div>
      <div className="box" id="rollThree">
        {roll3}
      </div>
      <div className="box" id="sum">
        sum
      </div>
    </div>
  );
};

/**
 * special case roll3 for the last frame
 */

export default Frame;

function isSpare(roll1, roll2) {
  return roll1 + roll2 === 10;
}

function isStrike(roll1) {
  return roll1 === 10;
}
/***
 *
 * GOOD work: from the frontend course at udacotuy last authum - it paid off!
 */

Frame.propTypes = {
  frame: PropTypes.string.isRequired
};
