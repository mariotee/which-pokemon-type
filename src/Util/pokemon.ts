import { IPokemon, IPokemonFromType } from "models/Pokemon";

export const TYPES = [
    "normal",
    "grass",
    "fire",
    "water",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
]

export const getRegionsForPokemon = (pokemon: IPokemon): string[] => {
    const regions: string[] = [];

    if (pokemon.number >= 1 && pokemon.number <= 151) {
      regions.push("Kanto");
    }

    if (pokemon.number >= 152 && pokemon.number <= 251) {
      regions.push("Johto");
    }

    if (pokemon.number >= 252 && pokemon.number <= 386) {
      regions.push("Hoenn");
    }

    if (pokemon.number >= 387 && pokemon.number <= 493) {
      regions.push("Sinnoh");
    }

    if (pokemon.number >= 494 && pokemon.number <= 649) {
      regions.push("Unova");
    }

    if (pokemon.number >= 650 && pokemon.number <= 721) {
      regions.push("Kalos");
    }

    if ((pokemon.number >= 722 && pokemon.number <= 809) || pokemon.name.includes("-alola")) {
      regions.push("Alola");
    }

    if ((pokemon.number >= 810 && pokemon.number <= 898) || pokemon.name.includes("-galar")) {
      regions.push("Galar");
    }

    return regions;
}

export const filterOutAlternatePokemon = (data: IPokemonFromType[]) => {
  return data.filter((pt) => {
    const x = pt.pokemon.name;

    return !x.includes("-totem")     
  });
}