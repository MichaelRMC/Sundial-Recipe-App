import React from 'react'
import Sundial from './Sundial'
import Recipe from './Recipe';

function NavBar() {
  return (
    <div>
      <nav>
        <a href="#">Home</a>
		|
        <a href="./Sundial.jsx">Sundial</a>
		|
        <a href="./Recipe.jsx">Recipe</a>
      </nav>
    </div>
  );
}

export default NavBar