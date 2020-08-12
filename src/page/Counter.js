import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Counter.css';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>在线倒计时器</h1>
        <div className = "main">
          <div className="left">
            <label htmlFor="time" className="time">设置时间</label>
            <input type="text" className="timeText"></input>
            <button value="Start">Start</button>
          </div>
          <div className="right">
            <input type="text" className="countText" disabled="false" placeholder="Start"></input>
          </div>
        </div>
        <Link to = "/" className="back">回到主页</Link> 
      </div>
    );
  }
}

export default Counter;