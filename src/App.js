import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// AppContext is a global state.
const AppContext = React.createContext()
// AppProvider contains methods (attached to it's state) which act like actions/reducers; essentially AppProviders state is our global data store.
class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    },
    activeIndex: null,
    // action
    setActiveIndex: (index) => {
      this.setState({
        activeIndex: index
      })
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

 // Class component (what about hooks?)
class Red extends Component {
  //The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context. You can reference this in any of the lifecycle methods including the render function.
  static contextType = AppContext;
  componentDidMount() {
    console.log(this.context);
  }
  // end

  render() {
    console.log(this.context.activeIndex);// because of static contextType = AppContext
    return (
      <AppContext.Consumer>
        {context => {
          const isVisible = context.activeIndex === this.props.index;
          // console.log(`${this.context.activeIndex} === ${this.props.index}`);
          return (
            <div
              className="red"
              onClick={() => {
                context.setActiveIndex(this.props.index);
              }}
            >
              <div onClick={context.inc}>{context.number}</div>
              <br />
              {isVisible ? "VISIBLE" : "NOT"}
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Red index={1} />
        <Red index={2} />
        <Red index={3} />
      </AppProvider>
    )
  }
}

export default App;
