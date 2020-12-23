import { IPokemon } from "models/Pokemon";
import { Capitalise as C } from "util/string";

import styles from "./style.module.css";

export interface IPokemonListItemProps {
    pokemon: IPokemon;
}

const PokemonListItem = ({pokemon}: IPokemonListItemProps) => {
  return <li className="list-group-item" key={"pokemon-" + pokemon.id}>
      <div className={styles.pokeNumber}>#{pokemon.number}</div>
      <div>
        {C(pokemon.name)}
        {pokemon.imageUrl ? <img src={pokemon.imageUrl} alt={pokemon.name} /> : <strong className="d-block"> No Image Available</strong>}
      </div>
      <p>Types: {C(pokemon.type1)}{pokemon.type2 && `, ${C(pokemon.type2)}`}</p>
  </li>
}

export default PokemonListItem;