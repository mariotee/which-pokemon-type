import axios from "axios";
import { IPokemonFromType } from "models/Pokemon";

const API_URL = "https://pokeapi.co/api/v2/type";

export const getPokemonTypeData = async (type: string) => {
    return (await axios.get(`${API_URL}/${type}`)).data;
}

export const getPokemonData = async (pokemonType: IPokemonFromType) => {
    return await axios.get(pokemonType.pokemon.url);
}