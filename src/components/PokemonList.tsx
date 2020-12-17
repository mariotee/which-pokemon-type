import { IPokemon } from "models/Pokemon";
import { Capitalise } from "Util/string";

interface IPokemonListProps {
    data: IPokemon[];
}

const PokemonList = ({data}: IPokemonListProps) => <ul className="list-group poke-list">
{
    data.map((pokemon) => <li className="list-group-item" key={"pokemon-"+pokemon.number}>
        {pokemon.number}: {Capitalise(pokemon.name)}
        {pokemon.imageUrl ? <img src={pokemon.imageUrl} alt={pokemon.name} /> : <strong> No Image Available</strong>}
    </li>)
}
</ul>

export default PokemonList;