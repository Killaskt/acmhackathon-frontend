import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import logo from './logo.svg';

import Main from './Components/Main/Main'
import Nav from './Components/Nav/Nav'
import CodeOfConduct from './Components/Code_of_Conduct/Code_of_Conduct'

// import './App.css';

function App() {
  return (
    <div 
        className="App" 
        style={{
          minHeight:"100vh"
        }}>
      <Nav />
      <Switch>
        <Route path='/' component={Main}/>
        <Route path='/codeofconduct' component={CodeOfConduct}/>
      </Switch>
    </div>
  );
}

export default App;
