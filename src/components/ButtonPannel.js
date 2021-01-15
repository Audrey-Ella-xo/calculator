import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPannel = ({ clickHandler }) => (
  <div className="ButtonPannel">
    <div className="group1">
      <Button onClick={clickHandler} name="AC" color="e0e0e0" />
      <Button onClick={clickHandler} name="+/-" color="e0e0e0" />
      <Button onClick={clickHandler} name="%" color="e0e0e0" />
      <Button onClick={clickHandler} name="÷" />
    </div>

    <div className="group2">
      <Button onClick={clickHandler} name="7" color="e0e0e0" />
      <Button onClick={clickHandler} name="8" color="e0e0e0" />
      <Button onClick={clickHandler} name="9" color="e0e0e0" />
      <Button onClick={clickHandler} name="x" />
    </div>

    <div className="group3">
      <Button onClick={clickHandler} name="4" color="e0e0e0" />
      <Button onClick={clickHandler} name="5" color="e0e0e0" />
      <Button onClick={clickHandler} name="6" color="e0e0e0" />
      <Button onClick={clickHandler} name="-" />
    </div>

    <div className="group4">
      <Button onClick={clickHandler} name="1" color="e0e0e0" />
      <Button onClick={clickHandler} name="2" color="e0e0e0" />
      <Button onClick={clickHandler} name="3" color="e0e0e0" />
      <Button onClick={clickHandler} name="+" />
    </div>

    <div className="group5">
      <Button onClick={clickHandler} name="0" wide color="e0e0e0" />
      <Button onClick={clickHandler} name="." color="e0e0e0" />
      <Button onClick={clickHandler} name="=" />
    </div>
  </div>
);

ButtonPannel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPannel;
