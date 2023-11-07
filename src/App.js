import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{basket}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is:', authUser);
      if (authUser) {
        // The user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="login/*" element={
        <div>
        <Login />
        </div>
        }/>
        <Route path="checkout/*" element={
        <div>
        <Header />
        <Checkout />
        </div>
        }/>
        <Route path="/" element={
        <div>
        <Header />
        <Home />
        </div>
        }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
