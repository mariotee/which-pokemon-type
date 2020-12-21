import React from 'react';
import axios from "axios";

import './App.css';

import { IPokemon, IPokemonFromType, IPokemonType, IPokemonTypeDataItem } from 'models/Pokemon';

import TypeSelect from 'components/TypeSelect';
import FetchButton from "components/FetchButton";
import PokemonList from 'components/PokemonList';
import Attribution from 'components/Attribution';
import PokeballSpinner from 'components/PokeballSpinner';
import ExclusiveTypeFilter from 'components/ExclusiveTypeFilter';
import TypeMatchupModal from 'components/TypeMatchupModal';

const API_URL = "https://pokeapi.co/api/v2/type";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [exclusiveType, setExclusiveType] = React.useState(false);
  const [typeInput1, setTypeInput1] = React.useState("" as string);
  const [typeInput2, setTypeInput2] = React.useState("" as string);  
  
  const [type1, setType1] = React.useState(null as unknown as IPokemonType)
  const [type2, setType2] = React.useState(null as unknown as IPokemonType)
  const [pokemon, setPokemon] = React.useState([] as IPokemon[]);

  const selectPokemonData = async (data: IPokemonFromType[]): Promise<IPokemon[]> => {    
    const filteredData = data.filter((x) => !x.pokemon.name.includes("-totem") && !x.pokemon.name.includes("-gmax"));
    const pokemonDataSet: IPokemon[] = [];

    for (const pokemonType of filteredData) {
      let pokemonData = await axios.get(pokemonType.pokemon.url);

      pokemonDataSet.push({
        id: pokemonData.data.id,
        name: pokemonData.data.name,
        number: pokemonData.data.species.url.split("/")[6],
        imageUrl: pokemonData.data.sprites.front_default,
        type1: pokemonData.data.types[0].type.name,
        type2: pokemonData.data.types[1] && pokemonData.data.types[1].type.name,
      })
    }

    return pokemonDataSet;
  }

  const fetchPokemon = async () => {
    setPokemon([]);
    setLoading(true);

    if (typeInput1.length > 0 && typeInput2.length > 0) {
      let typeData1 = (await axios.get(`${API_URL}/${typeInput1}`)).data;
      let damages1 = typeData1.damage_relations;

      setType1({
        name: typeData1.name,
        strongAgainst: damages1.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        vulnerableTo: damages1.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        weakAgainst: damages1.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        resistantTo: damages1.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        zeroAgainst: damages1.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        immuneTo: damages1.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
      });
      
      let typeData2 = (await axios.get(`${API_URL}/${typeInput2}`)).data;
      let damages2 = typeData2.damage_relations;

      setType2({
        name: typeData2.name,
        strongAgainst: damages2.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        vulnerableTo: damages2.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        weakAgainst: damages2.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        resistantTo: damages2.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        zeroAgainst: damages2.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        immuneTo: damages1.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
      });

      let pokemonData1 = await selectPokemonData(typeData1.pokemon);
      let pokemonData2 = await selectPokemonData(typeData2.pokemon);
                  
      setPokemon(pokemonData1.filter((x: IPokemon) => pokemonData2.map((x) => x.id).includes(x.id)));
    } else if (typeInput1.length > 0) {
      let typeData = (await axios.get(`${API_URL}/${typeInput1}`)).data;
      let damages = typeData.damage_relations;

      setType1({
        name: typeData.name,
        strongAgainst: damages.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        vulnerableTo: damages.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        weakAgainst: damages.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        resistantTo: damages.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        zeroAgainst: damages.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        immuneTo: damages.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
      });

      setType2(null as unknown as IPokemonType);
      
      let pokemonData = await selectPokemonData(typeData.pokemon);

      setPokemon(pokemonData);
    } else if (typeInput2.length > 0) {
      let typeData = (await axios.get(`${API_URL}/${typeInput2}`)).data;
      let damages = typeData.damage_relations;

      setType2({
        name: typeData.name,
        strongAgainst: damages.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        vulnerableTo: damages.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        weakAgainst: damages.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        resistantTo: damages.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        zeroAgainst: damages.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
        immuneTo: damages.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
      });

      setType1(null as unknown as IPokemonType);
      
      let pokemonData = await selectPokemonData(typeData.pokemon);

      setPokemon(pokemonData);
    }

    setLoading(false);
  }

  const toggleExclusiveType = () => {
    setExclusiveType(!exclusiveType);
  }
  
  const checkFiltered = (data: IPokemon[]) => {
    return (!typeInput2 && exclusiveType) 
      ? data.filter((x) => x.type1 === typeInput1 && x.type2 === undefined) 
      : data;
  }

  return <div className="App">
      <h1>Pokemon Types</h1>
      <TypeSelect title={"Type 1"} value={typeInput1} onChange={setTypeInput1} />
      <ExclusiveTypeFilter checked={exclusiveType && !typeInput2} onChange={toggleExclusiveType} />
      <TypeSelect title={"Type 2"} value={typeInput2} onChange={setTypeInput2} />
      { (typeInput1 || typeInput2) && <button className="btn d-block mx-auto my-3" onClick={() => setShowModal(true)}>Show Type Matchups</button>}
      <TypeMatchupModal show={showModal} onHide={() => setShowModal(false)} type1={type1} type2={type2}/>
      <FetchButton onClick={fetchPokemon} />
      { loading && <PokeballSpinner /> }
      <PokemonList data={checkFiltered(pokemon)} />
      <Attribution />
  </div>
}

export default App;
