import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Green = (props) => (
  <div className="green">{props.number}</div>
)
const Blue = (props) => (
  <div className="blue">
    <Green number={props.number} />
  </div>
)
 
class Red extends Component {
  state = {
    number : 10
  }
  render() {
    return  <div className="red">
      {this.state.number}
      <Blue number={this.state.number} />
    </div>
  }
}

class App extends Component {
  render() {
    return (<Red />)
  }
}

export default App;
