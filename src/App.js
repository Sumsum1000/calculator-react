import './App.css';
import { useState, useEffect } from 'react';
import Screen from './Components/Screen/Screen.js'
import BtnDigit from './Components/BtnDigit/BtnDigit.js'
import BtnBase from './Components/BtnBase/BtnBase';
import BtnOperator from './Components/BtnOperator/BtnOperator.js';

function App() {

  const btnValues = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'c', 0, '=', '/'];
  const [screenData, setScreenData] = useState('');
  const [tempVal, setTempVal] = useState('');



  let onClick = (val) => {
    setScreenData(screenData + val); 

    if (screenData.length > 0 && val === '='){
      setTempVal('=');
      // const numbersStrArr = screenData.split(screenData.match(/[+-/*]/g));
      // const num1 = parseInt(numbersStrArr[0]);
      // const num2 = parseInt(numbersStrArr[1]);
      // console.log(operateVal);

    }
    else {
      
    }
  }

  useEffect(() => {
    if ( tempVal === '='){
        const numbersStrArr = screenData.split(screenData.match(/[+-/*]/g));
        const num1 = parseInt(numbersStrArr[0]);
        const num2 = parseInt(numbersStrArr[1]);
        setScreenData(num1 * num2);
    }
  }, [tempVal])

  useEffect(() => {
      
    setTempVal(67);
  }, [])

  let temp = '';
  

  return (
    <div className="App">
      <div className='calc-body'>
        <Screen btnFigure={screenData}/>
        <div className='btns-container'>
          <BtnDigit onClick={onClick} val={1}/>
          <BtnDigit onClick={onClick} val={2}/>
          <BtnDigit onClick={onClick} val={3}/>
          <BtnOperator onClick={onClick} val={'+'}/>
          <BtnDigit onClick={onClick} val={4}/>
          <BtnDigit onClick={onClick} val={5}/>
          <BtnDigit onClick={onClick} val={6}/>
          <BtnOperator onClick={onClick} val={'-'}/>
          <BtnDigit onClick={onClick} val={7}/>
          <BtnDigit onClick={onClick} val={8}/>
          <BtnDigit onClick={onClick} val={9}/>
          <BtnOperator onClick={onClick} val={'*'}/>
          <BtnDigit onClick={onClick} val={'c'}/>
          <BtnDigit onClick={onClick} val={0}/>
          <BtnOperator onClick={onClick} val={'='}/>
          <BtnOperator onClick={onClick} val={'/'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
