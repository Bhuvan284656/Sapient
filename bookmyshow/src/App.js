import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Route path="/">
      </Route>
      <Route path="/Movies">
      </Route>
      <Route path="/Theaters">
      </Route>
      <Route path="/MovieTime">
      </Route>
      <Route path="/SelectedSeat">
      </Route>
    </BrowserRouter>
  );
}

export default App;
