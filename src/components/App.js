import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (btnName){
    const result = calculate(this.state, btnName);
    this.setState(result)
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <>
          <div className="calc-container">
            <Display result={(next === null ? total : next) || '0'} />
            <ButtonPannel clickHandler={ e => this.handleClick(e)}/>
          </div>
        </>
      </div>
    );
  }
}

export default App;
