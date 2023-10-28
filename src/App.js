import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter,
        Routes,
        Route
} from "react-router-dom";

function App() {
  return (
    // BEM
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={
        <div>
        <Header />
        <Home />
        </div>
        }/>
        <Route path="checkout/*" element={
        <div>
        <Header />
        <h1>This is the checkout page</h1>
        </div>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
