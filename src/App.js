import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import {Provider} from 'react-redux';
//import {createStore ,applyMiddleware } from 'redux'
import store from './store';
  
function App() {
  
  return (
    <Provider store = {store}>
    <div className="App">     
      <Todos></Todos>
    </div>
    </Provider>
  );
}

export default App;
