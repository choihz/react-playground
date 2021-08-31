import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => {
  return <FaStar color={selected ? 'red' : 'grey'} id="star" />;
};

Star.propTypes = {
  selected: PropTypes.bool,
};

export default Star;
