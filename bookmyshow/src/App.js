import React from 'react';
import Header from "./components/header"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from './components/movies';
import Theaters from "./components/theaters"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="app-body">
          <Switch>
            <Route path="/" exact component={Movies}>
            </Route>
            <Route path="/Theaters/:id" component={Theaters}>
            </Route>
            <Route path="/MovieTime">
            </Route>
            <Route path="/SelectedSeat">
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
