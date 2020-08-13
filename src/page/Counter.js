import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Counter.css';

class Counter extends Component {
  state = {
    time : 0,
    show : "seconds",
  };

  setTimer = (event) => {
    this.setState({
      time : event.target.value,
    })
  };

  start = () =>{
      var timer = window.setInterval( () =>{
      this.setState({
        time : parseInt(this.state.time-1),
      })
    },1000);
  };
  check = () => {
    if(this.state.time < 0){
      clearInterval(this.start.timer);
      return "End"
    }
    return this.state.time+this.state.show
  }
  input = () => {
    if(this.state.time < 0){
      return 0;
    }
    return this.state.time;
  }
  

  render() {
    return (
      <div className="Counter">
        <h1>在线倒计时器</h1>
        <div className = "main">
          <div className="left">
            <label htmlFor="time" className="time">设置时间</label>
            <input type="text" className="timeText" value={this.input()} onChange={this.setTimer}></input>
            <input type="submit" value="Start" onClick={this.start}></input>
          </div>
          <div className="right">
            <input type="text" className="countText" disabled="false" placeholder="Start" 
            value={this.check()}></input>
          </div>
        </div>
        <Link to = "/" className="back">回到主页</Link> 
      </div>
    );
  }
}

export default Counter;