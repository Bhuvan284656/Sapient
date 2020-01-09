import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Movies from './components/movies';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          
        </header>
        <Movies></Movies>
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
