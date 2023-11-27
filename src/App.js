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
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51OGH9jSDLuezvdQHKEEcLOovcyeWcrGHNgFmK90bDh1CKsrLlsJHWsj3xQD7yrGBYZvsJyIkXpPCy6vvKzioqwi600SdAAVK5E");

function App() {
  const [{}, dispatch] = useStateValue();
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
        <Route path="orders/*" element={
        <div>
        <Header />
        <Orders />
        </div>
        }/>
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
        <Route path="payment/*" element={
        <div>
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
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
