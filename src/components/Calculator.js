import './Calculator.css';

function Calculator() {
  return (
    <div className="main-wrapper">
      <table>
        <tr>
          <th colSpan="4" className="inputHead">
            {' '}
            <input placeholder="0" className="input_output_textBox" />
          </th>
        </tr>
        <tr>
          <th>AC</th>
          <th>+/-</th>
          <th>%</th>
          <th className="orange">÷</th>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="orange">x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="orange">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="orange">+</td>
        </tr>
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td className="orange">=</td>
        </tr>
      </table>
    </div>
  );
}

export default Calculator;
