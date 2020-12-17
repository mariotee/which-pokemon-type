import React from 'react';
import axios from "axios";

import './App.css';

const types = [
  "normal",
  "grass",
  "fire",
  "water",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
]

const App = () => {
  const [type1, setType1] = React.useState("" as string);
  const [type2, setType2] = React.useState("" as string);  

  const fetchPokemon = async () => {
    
  }

  return <div className="App">
      Pokemon Types
      <label>Type1</label>
      <select value={type1} onChange={(e) => {setType1(e.target.value)}}>
      <option>""</option>
      {
        types.map((e) => <option key={"type1-o-"+{e}}>{e}</option>)
      }
      </select>
      <label>Type2</label>
      <select value={type2} onChange={(e) => {setType2(e.target.value)}}>
      <option>""</option>
      {
        types.map((e) => <option key={"type2-o-"+{e}}>{e}</option>)
      }
      </select>
      <button onClick={fetchPokemon}>Find Me Pokemon!</button>
  </div>
}

export default App;
