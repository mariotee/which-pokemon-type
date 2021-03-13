import axios from "axios";
import { IPokemonFromType } from "models/Pokemon";

const API_URL = "https://pokeapi.co/api/v2/type";

export const getPokemonTypeData = async (type: string) => {
    return (await axios.get(`${API_URL}/${type}`)).data;
}
//trim is temprary until API gets patched
export const getPokemonData = async (pokemonType: IPokemonFromType) => {
    return axios.get(pokemonType.pokemon.url.replace(/\/$/,''));
}

export const getSpeciesData = async (pokemonData: any) => {
    return axios.get(pokemonData.species.url);
}