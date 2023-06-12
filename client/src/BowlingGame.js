import React from 'react';
import Frame from './Frame.js';
import Score from './Score.js';


class BowlingGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: Array(10).fill({ first: null, second: null, score: null }),
      handicap: 0,
      maxScore: 300,
    };
  }

  handleChange = (event, frameIndex, rollIndex) => {
    const { frames } = this.state;
    const { value } = event.target;
    const newFrames = [...frames];
    newFrames[frameIndex][rollIndex] = parseInt(value) || null;
    this.setState({ frames: newFrames });
  };

  render() {
    const { frames, handicap, maxScore } = this.state;

    return (<div>


      <div className="container1">
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
        <Frame></Frame>
      </div>
      <div className="container2">
        <Score></Score>
        <Score></Score>
      </div>

      {/* <div className="box"> Frame 1</div>
        <div className="box"> Frame 2</div>
        <div className="box"> Frame 3</div>
        <div className="box"> Frame 4</div>
        <div className="box"> Frame 5</div>
        <div className="box"> Frame 6</div>
        <div className="box"> Frame 7</div>
        <div className="box"> Frame 8</div>
        <div className="box"> Frame 9</div>
        <div className="box"> Frame 10</div> */}

    </div>

    );
  }
}
export default BowlingGame;
