export interface IPokemon {        
    name: string;
    number: number;
    imageUrl: string;
    type1: string;
    type2: string;
}

export interface IPokemonFromType {
    pokemon: {
        name: string;
        url: string;
    }
}