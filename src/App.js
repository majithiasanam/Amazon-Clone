import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{user} , action] = useStateValue();

  //Piece of code that works on 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        // user logged in
        action({
          type: 'SET_USER',
          user: authuser
        })
      } else {
        // user logged out
        action({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // Cleanup
      unsubscribe();
    }
  }, []);

  console.log('User is >>>>>>>>\n' + JSON.stringify(user));

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
