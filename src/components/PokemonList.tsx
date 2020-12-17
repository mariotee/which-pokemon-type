import React from "react";

interface IPokemonListProps {
    data: string[];
}

const PokemonList = ({data}: IPokemonListProps) => <React.Fragment>
{
    data.map((name, index) => <p key={"pokemon"+index}>{index+1}: {name}</p>)
}
</React.Fragment>

export default PokemonList;