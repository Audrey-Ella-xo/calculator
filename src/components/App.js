import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
// import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <>
          <div className="calc-container">
            <Display result={result} />
            <ButtonPannel />
          </div>
        </>
      </div>
    );
  }
}

export default App;
