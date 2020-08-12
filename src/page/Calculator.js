import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <h1>在线计算器</h1>
        <div className = "main">
          <input type="text" name="result" className="result"></input>
          <table>
            <tr>
              <td><button value="+" className="mark">+</button></td>
              <td><button value="-" className="mark">-</button></td>
              <td><button value="*" className="mark">*</button></td>
            </tr>
            <tr>
              <td><button value="7" className="num">7</button></td>
              <td><button value="8" className="num">8</button></td>
              <td><button value="9" className="num">9</button></td>
            </tr>
            <tr>
              <td><button value="4" className="num">4</button></td>
              <td><button value="5" className="num">5</button></td>
              <td><button value="6" className="num">6</button></td>
            </tr>
            <tr>
              <td><button value="1" className="num">1</button></td>
              <td><button value="2" className="num">2</button></td>
              <td><button value="3" className="num">3</button></td>
            </tr>
            <tr>
              <td><button value="0" className="num">0</button></td>
              <td><button value="clear" className="clear">clear</button></td>
              <td><button value="=" className="equal">=</button></td>
            </tr>
          </table>
        </div>
        <Link to = "/" className="back">回到主页</Link>
      </div>
    );
  }
}

export default Calculator;