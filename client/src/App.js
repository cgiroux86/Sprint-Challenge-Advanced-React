import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoccerPlayers from './components/SoccerPlayers'
import FunctionalSoccer from './components/FunctionalSoccer';
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
     <SoccerPlayers/>
     <FunctionalSoccer/>

    </div>
  );
}

export default App;
