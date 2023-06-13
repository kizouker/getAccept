
import React from 'react';
import PinsDownFrame from './PinsDownFrame.js';

const PinsDown = () => {
  return (
    <div>
      {Array.from({ length: 1 }).map((_, index) => (
        <PinsDownFrame key={index} frameIndex={index} />
      ))}
    </div>
  );
};

export default PinsDown;