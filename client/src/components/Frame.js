import '../css/Frame.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Frame = ({ frame }) => {
  const frames = useSelector((state) => state.bowling.frames);
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

  return (
    <div className="container">
      <div className="box" id="frame">
        {frame + 1}
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

export default Frame;

function isSpare(roll1, roll2) {
  return roll1 + roll2 === 10;
}

function isStrike(roll1) {
  return roll1 === 10;
}

Frame.propTypes = {
  frame: PropTypes.number.isRequired
};
