import React from 'react';
import axios from "axios";

import './App.css';

const App = () => {
  const [pokemon, setPokemon] = React.useState([] as any[]);

  const fetchFirePokemon = async () => {
    setPokemon((await axios.get("https://pokeapi.co/api/v2/type/fire")).data.pokemon);
  }

  React.useEffect(() => {
    fetchFirePokemon();
  }, [])

  return <div className="App">
      Pokemon Types (Fire)
      {
        pokemon.map((e, i) => <p>{i+1}: {e.pokemon.name}</p>)
      }
  </div>
}

export default App;
