import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import logo from './logo.svg';

import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'

// import './App.css';

function App() {
  return (
    <div 
        className="App" 
        style={{
          minHeight:"100vh"
        }}>
      <Nav />
      <video width="640" height="480" controls>
        <source src="./Assets/first.h264" />
      </video>
      <Switch>
        <Route path='/' component={Main}/>
      </Switch>
    </div>
  );
}

export default App;
