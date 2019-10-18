import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { TopBar } from './layout/TopBar';
import { Footer } from './layout/Footer';
import { XYZ } from './pages/XYZ';
import { BangsueRestaurant } from './pages/BangsueRestaurant'
import { Me } from './pages/Me'

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div>
        <TopBar />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <Me />
              </Route>
              <Route path="/me">
                <Me />
              </Route>
              <Route path="/xyz">
                <XYZ />
              </Route>
              <Route path="/bangsue-restaurant">
                <BangsueRestaurant />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  ); 
}

export default App;
