import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// AppContext is a global state.
const AppContext = React.createContext()
// AppProvider contains methods (attached to it's state) which act like actions/reducers; essentially AppProviders state is our global data store.
class AppProvider extends Component {
  state = {
    number: 10,
    // action
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

// Function component
const Green = (props) => (
  <div className="green">
    <AppContext.Consumer>
      {context => context.number}
    </AppContext.Consumer>
  </div>
)
// Another Function (dumb) component
const Blue = (props) => (
  <div className="blue">
    <AppContext.Consumer>
      {context => <button onClick={context.inc}>INC</button>}
    </AppContext.Consumer>
    <Green />
  </div>
)
 // Class component (what about hooks?)
class Red extends Component {
  render() {
    return (
      <div className="red">
        <AppContext.Consumer>
          {context => context.number}
        </AppContext.Consumer>
        <Blue />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Red />
      </AppProvider>
    )
  }
}

export default App;
