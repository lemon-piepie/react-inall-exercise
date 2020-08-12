import React, {Component} from 'react';
import './app.less';
import '../style/App.css';
import {Route, BrowserRouter, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from '../page/Calculator';
import Counter from '../page/Counter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div className = "nav">
          <NavLink to = "/" exact className = "home">HOME</NavLink>
          <NavLink to = "/calculator" className = "calculator">在线计算器</NavLink>
          <NavLink to = "/counter" className = "counter">在线倒计时器</NavLink>
        </div>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/counter' component={Counter}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
