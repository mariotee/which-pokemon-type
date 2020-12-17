import React from 'react';
import axios from "axios";

import { Capitalise } from 'Util/string';

import './App.css';

const TYPES = [
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

const API_URL = "https://pokeapi.co/api/v2/type";

const App = () => {
  const [type1, setType1] = React.useState("" as string);
  const [type2, setType2] = React.useState("" as string);  

  const [pokemon, setPokemon] = React.useState([] as string[]);

  const selectPokemonData = (data: any) => {
    return data.map((x: any) => x.pokemon.name)
  }

  const fetchPokemon = async () => {
    if (type1.length > 0 && type2.length > 0) {
      let data1 = selectPokemonData((await axios.get(`${API_URL}/${type1.toLowerCase()}`)).data.pokemon);
      let data2 = selectPokemonData((await axios.get(`${API_URL}/${type2.toLowerCase()}`)).data.pokemon);
      
      setPokemon(data1.filter((x: string) => data2.includes(x)));

    } else if (type1.length > 0) {
      let data = selectPokemonData((await axios.get(`${API_URL}/${type1.toLowerCase()}`)).data.pokemon);
      setPokemon(data);
    } else if (type2.length > 0) {
      let data = selectPokemonData((await axios.get(`${API_URL}/${type2.toLowerCase()}`)).data.pokemon);
      setPokemon(data);
    }
  }

  return <div className="App">
      <h1>Pokemon Types</h1>
      <label>Type1</label>
      <select value={type1} onChange={(e) => {setType1(e.target.value)}}>
      <option></option>
      {
        TYPES.map((type) => <option key={"type1-o-"+type}>{Capitalise(type)}</option>)
      }
      </select>
      <label>Type2</label>
      <select value={type2} onChange={(e) => {setType2(e.target.value)}}>
      <option></option>
      {
        TYPES.map((type) => <option key={"type2-o-"+type}>{Capitalise(type)}</option>)
      }
      </select>
      <button className="btn btn-primary mx-4" onClick={fetchPokemon}>Find Me Pokemon!</button>
      <div>
      {
        pokemon.map((data, index) => <p key={"pokemon"+index}>{index+1}: {data}</p>)
      }
      </div>
  </div>
}

export default App;
