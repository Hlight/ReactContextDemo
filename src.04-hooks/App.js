import React, { Component, useContext, useState, setState } from 'react';
import logo from './logo.svg';
import './App.css';

// AppContext is a global state.
const AppContext = React.createContext()
// AppProvider contains methods (attached to it's state) which act like actions/reducers; essentially AppProviders state is our global data store.
const AppProvider = props => {
  const [number, setNumber] = useState(4);
  const inc = () => setNumber(number + 1);

  const initialState = { number, inc };
  return (
    <AppContext.Provider value={initialState}>
      {props.children}
    </AppContext.Provider>
  );
};


// Function component
const Green = () => {
  const context = useContext(AppContext);
  return (
    <div className="green">
      {context.number}
    </div>
  )
}
// Another Function (dumb) component
const Blue = () => {
  const context = useContext(AppContext);
  return (
    <div className="blue">
      <button onClick={context.inc}>INC</button>
      <Green />
    </div>
  )
}
 // Class component (what about hooks?)
const Red = () => {
  const context = useContext(AppContext);
  return (
    <div className="red">
      {context.number}
      <Blue />
    </div>
  )

}

const App = () => {
  return (
    <AppProvider>
      <Red />
    </AppProvider>
  )
}

export default App;
