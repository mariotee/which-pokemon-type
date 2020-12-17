import React from 'react';
import axios from "axios";

import './App.css';

import TypeSelect from 'components/TypeSelect';
import FetchButton from "components/FetchButton";
import PokemonList from 'components/PokemonList';
import Attribution from 'components/Attribution';
import { IPokemon, IPokemonFromType } from 'models/Pokemon';
import PokeballSpinner from 'components/PokeballSpinner';

const API_URL = "https://pokeapi.co/api/v2/type";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [type1, setType1] = React.useState("" as string);
  const [type2, setType2] = React.useState("" as string);  

  const [pokemon, setPokemon] = React.useState([] as IPokemon[]);

  const selectPokemonData = async (data: IPokemonFromType[]): Promise<IPokemon[]> => {    
    const filteredData = data.filter((x) => !x.pokemon.name.endsWith("-totem") && !x.pokemon.name.endsWith("-gmax"));
    const pokemonDataSet: IPokemon[] = [];

    for (const pokemonType of filteredData) {
      let pokemonData = await axios.get(pokemonType.pokemon.url);

      pokemonDataSet.push({
        name: pokemonData.data.name,
        number: pokemonData.data.id,
        imageUrl: pokemonData.data.sprites.front_default,
      })
    }

    return pokemonDataSet;
  }

  const fetchPokemon = async () => {
    setPokemon([]);
    setLoading(true);    

    if (type1.length > 0 && type2.length > 0) {
      let data1 = await selectPokemonData((await axios.get(`${API_URL}/${type1}`)).data.pokemon);
      let data2 = await selectPokemonData((await axios.get(`${API_URL}/${type2}`)).data.pokemon);
            
      setPokemon(data1.filter((x: IPokemon) => data2.map((x) => x.number).includes(x.number)));
    } else if (type1.length > 0) {
      let data = await selectPokemonData((await axios.get(`${API_URL}/${type1}`)).data.pokemon);

      setPokemon(data);
    } else if (type2.length > 0) {
      let data = await selectPokemonData((await axios.get(`${API_URL}/${type2}`)).data.pokemon);

      setPokemon(data);
    }

    setLoading(false);
  }

  return <div className="App">
      <h1>Pokemon Types</h1>
      <TypeSelect title={"Type 1"} value={type1} onChange={setType1} />
      <TypeSelect title={"Type 2"} value={type2} onChange={setType2} />
      <FetchButton onClick={fetchPokemon} />
      { loading && <PokeballSpinner /> }
      <PokemonList data={pokemon} />
      <Attribution />
  </div>
}

export default App;
