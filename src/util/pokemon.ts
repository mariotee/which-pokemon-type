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

export const Regions = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
  "Hisui",
  "Paldea",
]

export const NumberStarts = {
  Kanto: 1,
  Johto: 152,
  Hoenn: 252,
  Sinnoh: 387,
  Unova: 494,
  Kalos: 650,
  Alola: 722,
  Galar: 810,
  Hisui: 899,
  Paldea: 906,
}

export const getRegionsForPokemon = (pokemon: IPokemon): string[] => {
    const regions: string[] = [];

    if (pokemon.number >= NumberStarts.Kanto && pokemon.number < NumberStarts.Johto) {
      regions.push("Kanto");
    }

    if (pokemon.number >= NumberStarts.Johto && pokemon.number < NumberStarts.Hoenn) {
      regions.push("Johto");
    }

    if (pokemon.number >= NumberStarts.Hoenn && pokemon.number < NumberStarts.Sinnoh) {
      regions.push("Hoenn");
    }

    if (pokemon.number >= NumberStarts.Sinnoh && pokemon.number < NumberStarts.Unova) {
      regions.push("Sinnoh");
    }

    if (pokemon.number >= NumberStarts.Unova && pokemon.number < NumberStarts.Kalos) {
      regions.push("Unova");
    }

    if (pokemon.number >= NumberStarts.Kalos && pokemon.number < NumberStarts.Alola) {
      regions.push("Kalos");
    }

    if ((pokemon.number >= NumberStarts.Alola && pokemon.number < NumberStarts.Galar) || pokemon.name.includes("-alola")) {
      regions.push("Alola");
    }

    if ((pokemon.number >= NumberStarts.Galar && pokemon.number < NumberStarts.Hisui) || pokemon.name.includes("-galar")) {
      regions.push("Galar");
    }

    if ((pokemon.number >= NumberStarts.Hisui && pokemon.number < NumberStarts.Paldea) || pokemon.name.includes("-hisui")) {
      regions.push("Hisui");
    }

    if ((pokemon.number >= NumberStarts.Paldea /*&& pokemon.number <= 1010 //walking wake*/) || pokemon.name.includes("-paldea")) {
      regions.push("Paldea");
    }

    return regions;
}

export const filterOutAlternatePokemon = (data: IPokemonFromType[]) => {
  return data.filter((pt) => {
    const x = pt.pokemon.name;

    return !x.includes("-totem")     
  });
}