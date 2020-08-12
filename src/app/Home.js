import React from 'react';
import imgURL from '../images/hero-image.png';
import imgURL2 from '../images/calculator.png';
import imgURL3 from '../images/timer.png';
import '../style/Home.css';
import { Link } from 'react-router-dom';

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
        <Link to='/calculate' className="link">计算器</Link>
      </div>
      <div className = "right">
        <img src = {imgURL3}></img>
        <Link to='/counter' className="link">倒计时器</Link>
      </div>    
    </div>
  </div>);
};

export default Home;