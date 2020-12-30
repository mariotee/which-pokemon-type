import React from 'react';
import axios from "axios";

import './App.css';

import { 
  IPokemon, 
  IPokemonFromType, 
  IPokemonType, 
  IPokemonTypeData, 
  IPokemonTypeDataItem 
} from 'models/Pokemon';

import { filterOutAlternatePokemon, getRegionsForPokemon } from 'util/pokemon';

import TypeSelect from 'components/TypeSelect';
import FetchButton from "components/FetchButton";
import PokemonList from 'components/PokemonList';
import Attribution from 'components/Attribution';
import ExclusiveTypeFilter from 'components/ExclusiveTypeFilter';
import TypeMatchupModal from 'components/TypeMatchupModal';
import RegionFilters from 'components/RegionFilters';

const API_URL = "https://pokeapi.co/api/v2/type";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [exclusiveType, setExclusiveType] = React.useState(false);
  const [typeInput1, setTypeInput1] = React.useState("");
  const [typeInput2, setTypeInput2] = React.useState("");
  
  const [typeData1, setTypeData1] = React.useState({} as IPokemonTypeData);
  const [typeData2, setTypeData2] = React.useState({} as IPokemonTypeData);
  
  const [type1, setType1] = React.useState({} as IPokemonType)
  const [type2, setType2] = React.useState({} as IPokemonType)

  const [pokemon, setPokemon] = React.useState([] as IPokemon[]);
  const [regionFilters, setRegionFilters] = React.useState([] as string[]);

  const changeType1 = async (type: string) => {
    setTypeInput1(type);

    setTypeData1((await axios.get(`${API_URL}/${type}`)).data);
  }

  const changeType2 = async (type: string) => {
    setTypeInput2(type);

    setTypeData2((await axios.get(`${API_URL}/${type}`)).data);
  }

  const pushPokemonData = async (data: IPokemonFromType[]) => {
    const filteredData = filterOutAlternatePokemon(data);
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

      setPokemon([...pokemonDataSet]);
    }
  }

  const fetchPokemon = async () => {
    if (!typeInput1 && !typeInput2 && !typeData1.damage_relations && !typeData2.damage_relations) {
      return;
    }
    
    setPokemon([]);
    setLoading(true);

    if (typeInput1 && typeInput2 && typeData1.damage_relations && typeData2.damage_relations) {      
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

      let intersection = typeData1.pokemon
        .filter((t) => typeData2.pokemon
          .map((p) => p.pokemon.name).includes(t.pokemon.name));
                  
      await pushPokemonData(intersection);
    } else if (typeInput1 && typeData1.damage_relations) {
      let damages = typeData1.damage_relations;

      setType1({
        name: typeData1.name,
        strongAgainst: damages.double_damage_to.map((t) => t.name),
        vulnerableTo: damages.double_damage_from.map((t) => t.name),
        weakAgainst: damages.half_damage_to.map((t) => t.name),
        resistantTo: damages.half_damage_from.map((t) => t.name),
        zeroAgainst: damages.no_damage_to.map((t) => t.name),
        immuneTo: damages.no_damage_from.map((t) => t.name),
      });

      setType2({} as IPokemonType);
      
      await pushPokemonData(typeData1.pokemon);
    } else if (typeInput2 && typeData2.damage_relations) {
      let damages = typeData2.damage_relations;

      setType2({
        name: typeData2.name,
        strongAgainst: damages.double_damage_to.map((t) => t.name),
        vulnerableTo: damages.double_damage_from.map((t) => t.name),
        weakAgainst: damages.half_damage_to.map((t) => t.name),
        resistantTo: damages.half_damage_from.map((t) => t.name),
        zeroAgainst: damages.no_damage_to.map((t) => t.name),
        immuneTo: damages.no_damage_from.map((t) => t.name),
      });

      setType1({} as IPokemonType);
      
      await pushPokemonData(typeData2.pokemon);
    }

    setLoading(false);
  }

  const toggleExclusiveType = () => {
    setExclusiveType(!exclusiveType);
  }
  
  const checkFilters = (data: IPokemon[]) => {    
    let filteredByRegion = regionFilters.length > 0
      ? data.filter((p) => 
        regionFilters.some((r) => 
          getRegionsForPokemon(p).includes(r)))
      : data;

    let filteredByRegionAndType = (!typeInput2 && exclusiveType) 
      ? filteredByRegion.filter((x) => x.type1 === typeInput1 && x.type2 === undefined) 
      : filteredByRegion;
    
    return filteredByRegionAndType
  }

  const changeRegionFilter = (region: string) => {
    if (regionFilters.includes(region)) {
      setRegionFilters(regionFilters.filter((x) => x !== region));
    } else {
      setRegionFilters([...regionFilters, region]);
    }
  }

  return <div className="App my-2 mx-auto">
      <h3>Pokemon Types</h3>
      <TypeSelect title={"Type 1"} value={typeInput1} onChange={changeType1} />
      <ExclusiveTypeFilter checked={exclusiveType && !typeInput2} onChange={toggleExclusiveType} />
      <TypeSelect title={"Type 2"} value={typeInput2} onChange={changeType2} />
      { (pokemon.length > 0) && <button className="btn btn-primary d-block mx-auto my-3" onClick={() => setShowModal(true)}>Show Type Matchups</button>}
      <TypeMatchupModal show={showModal} onHide={() => setShowModal(false)} type1={type1} type2={type2}/>
      <FetchButton disabled={loading} onClick={fetchPokemon} />
      {
        pokemon.length > 0 && <RegionFilters data={regionFilters} onChange={changeRegionFilter} />
      }
      <PokemonList data={checkFilters(pokemon)} />
      <Attribution />
  </div>
}

export default App;
