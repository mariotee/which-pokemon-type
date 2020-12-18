import { IPokemon } from "models/Pokemon";

import PokemonListItem from "components/PokemonListItem";

interface IPokemonListProps {
    data: IPokemon[];
}

const PokemonList = ({data}: IPokemonListProps) => <ul className="list-group poke-list">
{
    data.map((pokemon) => <PokemonListItem pokemon={pokemon} />)
}
</ul>

export default PokemonList;