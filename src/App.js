import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './Components/Main/Main.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </div>
  );
}

export default App;
