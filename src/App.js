import React from 'react';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
