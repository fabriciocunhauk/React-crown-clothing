import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SignInSignOut from './pages/sign-In-Sign-Out/SignInSignOut';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sigin" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
