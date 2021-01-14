import React from 'react';
import Button from './Button';

const ButtonPannel = () => (
  <div className="ButtonPannel">
    <div className="group1">
      <Button name="AC" color="e0e0e0" />
      <Button name="+/-" color="e0e0e0" />
      <Button name="%" color="e0e0e0" />
      <Button name="÷" />
    </div>

    <div className="group2">
      <Button name="7" color="e0e0e0" />
      <Button name="8" color="e0e0e0" />
      <Button name="9" color="e0e0e0" />
      <Button name="x" />
    </div>

    <div className="group3">
      <Button name="4" color="e0e0e0" />
      <Button name="5" color="e0e0e0" />
      <Button name="6" color="e0e0e0" />
      <Button name="-" />
    </div>

    <div className="group4">
      <Button name="1" color="e0e0e0" />
      <Button name="2" color="e0e0e0" />
      <Button name="3" color="e0e0e0" />
      <Button name="+" />
    </div>

    <div className="group5">
      <Button name="0" wide color="e0e0e0" />
      <Button name="." color="e0e0e0" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPannel;
