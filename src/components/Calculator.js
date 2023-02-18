import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operator: null,
  });

  const onClickHandler = (event) => {
    const result = (calculate(state, event.target.textContent));
    setState(result);
  };

  const displayResults = (event) => {
    setState({ total: event.target.textContent });
  };

  const { total, next, operation } = state;
  return (
    <div className="main-wrapper">
      <table>
        <tbody>
          <tr>
            <th colSpan="4" className="inputHead">
              {' '}
              <div className="input_output_textBox" onChange={displayResults}>
                {total}
                {operation}
                {next}
              </div>
            </th>
          </tr>
          <tr>
            <th onClick={onClickHandler}>AC</th>
            <th onClick={onClickHandler}>+/-</th>
            <th onClick={onClickHandler}>%</th>
            <th className="orange" onClick={onClickHandler}>÷</th>
          </tr>
          <tr>
            <th onClick={onClickHandler}>7</th>
            <th onClick={onClickHandler}>8</th>
            <th onClick={onClickHandler}>9</th>
            <th className="orange" onClick={onClickHandler}>x</th>
          </tr>
          <tr>
            <th onClick={onClickHandler}>4</th>
            <th onClick={onClickHandler}>5</th>
            <th onClick={onClickHandler}>6</th>
            <th className="orange" onClick={onClickHandler}>-</th>
          </tr>
          <tr>
            <th onClick={onClickHandler}>1</th>
            <th onClick={onClickHandler}>2</th>
            <th onClick={onClickHandler}>3</th>
            <th className="orange" onClick={onClickHandler}>+</th>
          </tr>
          <tr>
            <th colSpan="2" onClick={onClickHandler}>0</th>
            <th onClick={onClickHandler}>.</th>
            <th className="orange" onClick={onClickHandler}>=</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
