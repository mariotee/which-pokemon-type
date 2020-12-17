export interface IPokemon {        
    name: string;
    number: number;
    imageUrl: string;
}

export interface IPokemonFromType {
    pokemon: {
        name: string;
        url: string;
    }
}