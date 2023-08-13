import React from 'react';
import NavBar from './components/NavBar';
import Sundial from './components/Sundial';
import Recipe from "./components/Recipe";
import './App.css'

function App() {
  

  return (
    <div>
      <header>
        <NavBar />
        <br />
        <hr />
      </header>
      <Sundial />
      <br />
      <hr />
      <Recipe />
      <hr />
    </div>
  )
}

export default App
