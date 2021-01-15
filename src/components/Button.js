/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    color,
    wide,
    onClick,
  } = props;

  const handleClick = () => {
    onClick(name);
  };
  return (
    <button onClick={handleClick} type="button" className="btn" style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}>{name}</button>
  );
};

Button.defaultProps = {
  color: '#F5913E',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
