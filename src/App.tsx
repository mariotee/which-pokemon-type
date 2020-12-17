import React from 'react';
import axios from "axios";

import './App.css';

import TypeSelect from 'components/TypeSelect';
import FetchButton from "components/FetchButton";
import PokemonList from 'components/PokemonList';
import Attribution from 'components/Attribution';

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
      let data1 = selectPokemonData((await axios.get(`${API_URL}/${type1}`)).data.pokemon);
      let data2 = selectPokemonData((await axios.get(`${API_URL}/${type2}`)).data.pokemon);
      
      setPokemon(data1.filter((x: string) => data2.includes(x)));
    } else if (type1.length > 0) {
      let data = selectPokemonData((await axios.get(`${API_URL}/${type1}`)).data.pokemon);

      setPokemon(data);
    } else if (type2.length > 0) {
      let data = selectPokemonData((await axios.get(`${API_URL}/${type2}`)).data.pokemon);

      setPokemon(data);
    }
  }

  return <div className="App">
      <h1>Pokemon Types</h1>      
      <TypeSelect title={"Type 1"} value={type1} onChange={setType1}/>
      <TypeSelect title={"Type 2"} value={type2} onChange={setType2}/>
      <FetchButton onClick={fetchPokemon}/>
      <PokemonList data={pokemon}/>
      <Attribution />
  </div>
}

export default App;
