import './App.css';
import { useState, useEffect } from 'react';
import Screen from './Components/Screen/Screen.js'
import BtnNum from './Components/BtnNum/BtnNum.js'
import BtnBase from './Components/BtnBase/BtnBase';

function App() {

  const btnValues = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'c', 0, '=', '/'];
  const [screenData, setScreenData] = useState('');

  const figure = 1;

  const showOnScreen = (val) => {
    setScreenData(screenData + val);
}

  return (
    <div className="App">
      <div className='calc-body'>
        <Screen btnFigure={screenData}/>
        <div className='btns-container'>
          {btnValues.map(element => <BtnBase displayVal={showOnScreen} valBase={element}
                                    valOp={element}/>)}
        </div>
     
        {/* <BtnNum printNum={print} val={figure}/> */}
      </div>
    </div>
  );
}

export default App;
