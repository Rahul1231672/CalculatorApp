import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  // Handle button click and update input
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle clear button click
  const handleClear = () => {
    setInput('');
  };

  // Handle square root calculation
  const handleSquareRoot = () => {
    setInput(Math.sqrt(parseFloat(input)).toString());
  };

  // Handle the calculation when the equals button is clicked
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="clear">
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
