import React from 'react';
import imgURL from '../images/hero-image.png';
import imgURL2 from '../images/calculator.png';
import imgURL3 from '../images/timer.png';
import '../style/Home.css';
import { Link } from 'react-router-dom';
import Calculator from '../page/Calculator';
import Counter from '../page/Counter';

const Home = () => {
  return (
  <div className="home">
    <div className = "upPart">
      <img src = {imgURL}></img>
      <div className = "layer"></div>
      <p className = "topic">在线实用工具</p>
    </div>
    <div className = "downPart">
      <div className = "left">
        <img src = {imgURL2}></img>
        <Link exact to='/calculator' className="link1">计算器</Link>
      </div>
      <div className = "right">
        <img src = {imgURL3}></img>
        <Link exact to='/counter' className="link2">倒计时器</Link>
      </div>   
    </div>
  </div>);
};

export default Home;