import React from 'react';
import BaseComponent from './BaseHttpPostComponent.js';
import PropTypes from 'prop-types';

const CurrentScore = ({ url, additionalProp }) => {
  BaseComponent(url);
  return (
    <div>
      <h4>CurrentScore</h4>
      {/* Render the derived component's content */}
      {/* You can add additional functionality or customize the rendering here */}
      <p>{additionalProp}</p>
    </div>
  );
};

export default CurrentScore;

CurrentScore.propTypes = {
  url: PropTypes.string.isRequired,
  additionalProp: PropTypes.string.isRequired
};
