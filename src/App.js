import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './Components/Main/Main.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main}/>
        <Route path='/participationform' component={() => { 
                window.location.href = 'https://tripetto.app/run/MKFAENRMQ8'; 
                return null;
           }}/>
      </Switch>
    </div>
  );
}

export default App;
