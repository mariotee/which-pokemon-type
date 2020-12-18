import { IPokemon } from "models/Pokemon";
import { Capitalise as C } from "Util/string";

import styles from "./style.module.css";

export interface IPokemonListItemProps {
    pokemon: IPokemon;
}

const PokemonListItem = ({pokemon}: IPokemonListItemProps) => {
  return <li className="list-group-item" key={"pokemon-" + pokemon.id}>
      <span className={styles.pokeNumber}>#{pokemon.number}</span>
      {C(pokemon.name)}
        {pokemon.imageUrl ? <img src={pokemon.imageUrl} alt={pokemon.name} /> : <strong> No Image Available</strong>}
        <p>Types: {C(pokemon.type1)}{pokemon.type2 && `, ${C(pokemon.type2)}`}</p>
  </li>
}

export default PokemonListItem;