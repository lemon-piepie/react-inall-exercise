import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Calculator.css';

class Calculator extends Component {
  state = {
    number:0,
    firstNum:0,
    mark:null,
  };
  addNum = (event) => {
    this.setState({
      number: parseInt(this.state.number + event.target.value),
    })
  };
  chooseMark = (event) => {
    this.setState({
      firstNum:this.state.number,
      number:0,
      mark:event.target.value,
    })
  }
  calculator = () => {
    if(this.state.mark === '+'){
      this.setState({
      number: parseInt(this.state.number)+this.state.firstNum,
      });
    }else if(this.state.mark === '-'){
      this.setState({
        number: this.state.firstNum-parseInt(this.state.number),
      });
    }else{
      this.setState({
        number: parseInt(this.state.number)*this.state.firstNum,
      });
    }
    
  }
  clearNum = () => {
    this.setState({
      number: 0,
    })
  }
  render() {
    return (
      <div className="Calculator">
        <h1>在线计算器</h1>
        <div className = "main">
          <input type="text" name="result" className="result" value={this.state.number}></input>
          <table>
            <tr>
              <td><button value="+" className="mark" onClick={this.chooseMark}>+</button></td>
              <td><button value="-" className="mark" onClick={this.chooseMark}>-</button></td>
              <td><button value="*" className="mark" onClick={this.chooseMark}>*</button></td>
            </tr>
            <tr>
              <td><button value="7" className="num" onClick={this.addNum}>7</button></td>
              <td><button value="8" className="num" onClick={this.addNum}>8</button></td>
              <td><button value="9" className="num" onClick={this.addNum}>9</button></td>
            </tr>
            <tr>
              <td><button value="4" className="num" onClick={this.addNum}>4</button></td>
              <td><button value="5" className="num" onClick={this.addNum}>5</button></td>
              <td><button value="6" className="num" onClick={this.addNum}>6</button></td>
            </tr>
            <tr>
              <td><button value="1" className="num" onClick={this.addNum}>1</button></td>
              <td><button value="2" className="num" onClick={this.addNum}>2</button></td>
              <td><button value="3" className="num" onClick={this.addNum}>3</button></td>
            </tr>
            <tr>
              <td><button value="0" className="num" onClick={this.addNum}>0</button></td>
              <td><button value="clear" className="clear" onClick={this.clearNum}>clear</button></td>
              <td><button value="=" className="equal" onClick={this.calculator}>=</button></td>
            </tr>
          </table>
        </div>
        <Link to = "/" className="back">回到主页</Link>
      </div>
    );
  }
}

export default Calculator;