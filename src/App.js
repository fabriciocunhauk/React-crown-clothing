import React from 'react';
import HomePage from './pages/homepage/HomePage';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function HatsPage() {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
