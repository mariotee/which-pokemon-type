export interface IPokemon {        
    id: number;
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

export interface IPokemonType {
    name: string;
    strongAgainst: string[];
    vulnerableTo: string[];
    weakAgainst: string[];
    resistantTo: string[];
    zeroAgainst: string[];
    immuneTo: string[];
}

export interface IPokemonTypeDataItem {
    name: string;
    url: string;
}