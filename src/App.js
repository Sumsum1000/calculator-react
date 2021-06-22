import './App.css';
import { useState, useEffect } from 'react';
import Screen from './Components/Screen/Screen.js'
import BtnNum from './Components/BtnNum/BtnNum.js'
import BtnBase from './Components/BtnBase/BtnBase';

function App() {

  const btnValues = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'c', 0, '=', '/'];
  const [screenData, setScreenData] = useState('');


  const showOnScreen = (val) => {
    if (val === '=') {
      const regex = /[+-/*]/g;
      const operator = screenData.match(regex);
      console.log(screenData);
      console.log(operator.join(''));
      const numsStr = screenData.split(operator);
      const num1 = parseInt(numsStr[0]);
      const num2 = parseInt(numsStr[1]);

      setScreenData(operator);
    }


    else{
      setScreenData(screenData + val);
    }
  
}

  return (
    <div className="App">
      <div className='calc-body'>
        <Screen btnFigure={screenData}/>
        <div className='btns-container'>
          {btnValues.map(element => <BtnBase displayVal={showOnScreen} valBase={element}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
