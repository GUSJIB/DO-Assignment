import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './layout/TopBar';
import { Body } from './layout/Body';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div>
        <TopBar /> 
        <Body />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Footer />
    </div>
  ); 
}

export default App;
