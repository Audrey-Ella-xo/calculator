import Display from './Display';
import ButtonPannel from './ButtonPannel';
// import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <>
        <div className="calc-container">
          <Display />
          <ButtonPannel />
        </div>
      </>
    </div>
  );
}

export default App;
