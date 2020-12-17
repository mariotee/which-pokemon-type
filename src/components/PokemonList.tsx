import React from "react";

interface IPokemonListProps {
    data: string[];
}

const PokemonList = ({data}: IPokemonListProps) => <div className="poke-list">
{
    data.map((name, index) => <p key={"pokemon"+index}>{index+1}: {name}</p>)
}
</div>

export default PokemonList;