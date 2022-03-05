import { getPokemonData, getSpeciesData } from "api";
import { IPokemon, IPokemonFromType, IPokemonType, IPokemonTypeData, IPokemonTypeDataItem } from "models/Pokemon";
import React from "react";
import { filterOutAlternatePokemon } from "util/pokemon";

interface IParams {
    loadingTypeData1: boolean; 
    loadingTypeData2: boolean;
    typeSelect1: string; 
    typeSelect2: string;
    setPokemon: React.Dispatch<React.SetStateAction<IPokemon[]>>;
    setLoadingPokes: React.Dispatch<React.SetStateAction<boolean>>;
    setType1: React.Dispatch<React.SetStateAction<IPokemonType>>;
    setType2: React.Dispatch<React.SetStateAction<IPokemonType>>;
    typeData1: IPokemonTypeData;
    typeData2: IPokemonTypeData;
    setNoPokes: React.Dispatch<React.SetStateAction<boolean>>;
    cancelled: React.MutableRefObject<boolean>;
}

export const fetchPokemon = async ({loadingTypeData1,
    loadingTypeData2,
    typeSelect1,
    typeSelect2,
    setPokemon,
    setLoadingPokes,
    setType1,
    setType2,
    typeData1,
    typeData2,
    setNoPokes,
    cancelled
}: IParams) => {
    if (loadingTypeData1 || loadingTypeData2) {
        setPokemon([]);

        return;
    }

    if (!typeSelect1 && !typeSelect2) {
        return;
    }

    setPokemon([]);
    setLoadingPokes(true);

    if (typeData1.damage_relations && typeData2.damage_relations) {
        let damages1 = typeData1.damage_relations;

        setType1({
            name: typeData1.name,
            strongAgainst: damages1.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            vulnerableTo: damages1.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
            weakAgainst: damages1.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            resistantTo: damages1.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
            zeroAgainst: damages1.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            immuneTo: damages1.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        });

        let damages2 = typeData2.damage_relations;

        setType2({
            name: typeData2.name,
            strongAgainst: damages2.double_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            vulnerableTo: damages2.double_damage_from.map((t: IPokemonTypeDataItem) => t.name),
            weakAgainst: damages2.half_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            resistantTo: damages2.half_damage_from.map((t: IPokemonTypeDataItem) => t.name),
            zeroAgainst: damages2.no_damage_to.map((t: IPokemonTypeDataItem) => t.name),
            immuneTo: damages1.no_damage_from.map((t: IPokemonTypeDataItem) => t.name),
        });

        let intersection = typeData1.pokemon
            .filter((t) => typeData2.pokemon
                .map((p) => p.pokemon.name).includes(t.pokemon.name));

        await pushPokemonData({data: intersection, setNoPokes, setLoadingPokes, setPokemon, cancelled});
    } else if (typeData1.damage_relations) {
        let damages = typeData1.damage_relations;

        setType1({
            name: typeData1.name,
            strongAgainst: damages.double_damage_to.map((t) => t.name),
            vulnerableTo: damages.double_damage_from.map((t) => t.name),
            weakAgainst: damages.half_damage_to.map((t) => t.name),
            resistantTo: damages.half_damage_from.map((t) => t.name),
            zeroAgainst: damages.no_damage_to.map((t) => t.name),
            immuneTo: damages.no_damage_from.map((t) => t.name),
        });

        setType2({} as IPokemonType);

        await pushPokemonData({data: typeData1.pokemon, setNoPokes, setLoadingPokes, setPokemon, cancelled});
    } else if (typeData2.damage_relations) {
        let damages = typeData2.damage_relations;

        setType2({
            name: typeData2.name,
            strongAgainst: damages.double_damage_to.map((t) => t.name),
            vulnerableTo: damages.double_damage_from.map((t) => t.name),
            weakAgainst: damages.half_damage_to.map((t) => t.name),
            resistantTo: damages.half_damage_from.map((t) => t.name),
            zeroAgainst: damages.no_damage_to.map((t) => t.name),
            immuneTo: damages.no_damage_from.map((t) => t.name),
        });

        setType1({} as IPokemonType);

        await pushPokemonData({data: typeData2.pokemon, setNoPokes, setLoadingPokes, setPokemon, cancelled});
    }

    setLoadingPokes(false);
}

interface IPushPokemonDataParams {
    data: IPokemonFromType[],
    setNoPokes: React.Dispatch<React.SetStateAction<boolean>>;
    setLoadingPokes: React.Dispatch<React.SetStateAction<boolean>>;
    setPokemon: React.Dispatch<React.SetStateAction<IPokemon[]>>;
    cancelled: React.MutableRefObject<boolean>;
}

const pushPokemonData = async ({data, setNoPokes, setLoadingPokes, setPokemon, cancelled}: IPushPokemonDataParams) => {
    if (data.length === 0) {
        setNoPokes(true);

        setTimeout(() => setNoPokes(false), 10000);

        return;
    }

    setNoPokes(false);

    const filteredData = filterOutAlternatePokemon(data);
    const pokemonDataSet: IPokemon[] = [];

    for (const pokemonType of filteredData) {
        if (cancelled.current) {
            setLoadingPokes(false);
            cancelled.current = false;
            return;
        }
        let pokemonData = await getPokemonData(pokemonType);

        const speciesData = await getSpeciesData(pokemonData.data);

        pokemonDataSet.push({
            id: pokemonData.data.id,
            name: pokemonData.data.name,
            number: speciesData.data.id,
            imageUrl: pokemonData.data.sprites.front_default,
            type1: pokemonData.data.types[0].type.name,
            type2: pokemonData.data.types[1]?.type.name,
            isLegendary: speciesData.data.is_legendary,
            isMythical: speciesData.data.is_mythical,
        })

        setPokemon([...pokemonDataSet]);
    }
}