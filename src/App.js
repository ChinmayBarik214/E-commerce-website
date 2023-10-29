import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
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
