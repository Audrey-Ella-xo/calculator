import React from 'react';
import Button from './Button';

const ButtonPannel = () => (
  <div className="ButtonPannel">
    <div className="group1">
      <Button name="AC" color="E0E0E0" />
      <Button name="+/-" color="E0E0E0" />
      <Button name="%" color="E0E0E0" />
      <Button name="÷" />
    </div>

    <div className="group2">
      <Button name="7" color="E0E0E0" />
      <Button name="8" color="E0E0E0" />
      <Button name="9" color="E0E0E0" />
      <Button name="x" />
    </div>

    <div className="group3">
      <Button name="4" color="E0E0E0" />
      <Button name="5" color="E0E0E0" />
      <Button name="6" color="E0E0E0" />
      <Button name="-" />
    </div>

    <div className="group4">
      <Button name="1" color="E0E0E0" />
      <Button name="2" color="E0E0E0" />
      <Button name="3" color="E0E0E0" />
      <Button name="+" />
    </div>

    <div className="group5">
      <Button name="0" wide color="E0E0E0" />
      <Button name="." color="E0E0E0" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPannel;
