import React from 'react';

import './App.css';

import {
    IPokemon,
    IPokemonType,
    IPokemonTypeData,
} from 'models/Pokemon';

import { getRegionsForPokemon } from 'util/pokemon';
import { getPokemonTypeData } from 'api';

import TypeSelect from 'components/Controls/TypeSelect';
import FetchButton from "components/Controls/FetchButton";
import PokemonList from 'components/PokemonList';
import Attribution from 'components/Attribution';
import ExclusiveTypeFilter from 'components/Controls/ExclusiveTypeFilter';
import TypeMatchupModal from 'components/TypeMatchupModal';
import RegionFilters from 'components/Controls/RegionFilters';
import NoPokemonPrompt from 'components/NoPokemonPrompt';
import LegendaryMythicalFilters from 'components/Controls/LegendaryMythicalFilters';
import CancelButton from 'components/Controls/CancelButton';
import { fetchPokemon } from 'util/app';

const App = () => {
    const [loadingPokes, setLoadingPokes] = React.useState(false);
    const [loadingTypeData1, setLoadingTypeData1] = React.useState(false);
    const [loadingTypeData2, setLoadingTypeData2] = React.useState(false);
    const [noPokes, setNoPokes] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [exclusiveType, setExclusiveType] = React.useState(false);
    const [typeSelect1, setTypeSelect1] = React.useState("");
    const [typeSelect2, setTypeSelect2] = React.useState("");

    const [typeData1, setTypeData1] = React.useState({} as IPokemonTypeData);
    const [typeData2, setTypeData2] = React.useState({} as IPokemonTypeData);

    const [type1, setType1] = React.useState({} as IPokemonType)
    const [type2, setType2] = React.useState({} as IPokemonType)

    const [pokemon, setPokemon] = React.useState([] as IPokemon[]);
    const [regionFilters, setRegionFilters] = React.useState([] as string[]);
    const [legendaryFilter, setLegendaryFilter] = React.useState(false);
    const [mythicalFilter, setMythicalFilter] = React.useState(false);

    const cancelled = React.useRef(false);

    React.useEffect(() => {
        if (loadingTypeData1 && !loadingTypeData2 && typeData1.damage_relations) {
            setLoadingTypeData1(false);
        } else if (loadingTypeData2 && !loadingTypeData1 && typeData2.damage_relations) {
            setLoadingTypeData2(false);
        } else if (loadingTypeData1 && loadingTypeData2
            && typeData1.damage_relations && typeData2.damage_relations) {
            setLoadingTypeData1(false);
            setLoadingTypeData2(false);
        }

    }, [loadingTypeData1, loadingTypeData2, typeData1, typeData2, typeSelect1, typeSelect2])

    const changeType1 = async (type: string) => {
        if (type === "") {
            setTypeData1({} as IPokemonTypeData);
            setTypeSelect1(type);

            return;
        }

        setLoadingTypeData1(true);
        setTypeData1({} as IPokemonTypeData);
        setTypeSelect1(type);

        setTypeData1(await getPokemonTypeData(type));
    }

    const changeType2 = async (type: string) => {
        if (type === "") {
            setTypeData2({} as IPokemonTypeData);
            setTypeSelect2(type);

            return;
        }

        setLoadingTypeData2(true);
        setTypeData2({} as IPokemonTypeData);
        setTypeSelect2(type);

        setTypeData2(await getPokemonTypeData(type));
    }

    const toggleExclusiveType = () => {
        setExclusiveType(!exclusiveType);
    }

    const checkFilters = (data: IPokemon[]) => {
        let filteredByRegion = regionFilters.length > 0
            ? data.filter((p) =>
                regionFilters.some((r) =>
                    getRegionsForPokemon(p).includes(r)))
            : data;

        let filteredByRegionAndType = (!typeSelect2 && exclusiveType)
            ? filteredByRegion.filter((x) => x.type1 === typeSelect1 && x.type2 === undefined)
            : filteredByRegion;

        if (legendaryFilter && mythicalFilter) {
            return filteredByRegionAndType.filter((x) => x.isLegendary || x.isMythical)
        } else if (legendaryFilter) {
            return filteredByRegionAndType.filter((x) => x.isLegendary)
        } else if (mythicalFilter) {
            return filteredByRegionAndType.filter((x) => x.isMythical)
        }

        return filteredByRegionAndType;
    }

    const changeRegionFilter = (region: string) => {
        if (regionFilters.includes(region)) {
            setRegionFilters(regionFilters.filter((x) => x !== region));
        } else {
            setRegionFilters([...regionFilters, region]);
        }
    }

    const changeLegendaryOrMythicalFilter = (input: string) => {
        if (input === "legendary") {
            setLegendaryFilter((prev) => !prev);
        }

        if (input === "mythical") {
            setMythicalFilter((prev) => !prev);
        }
    }

    const handleFetchPokemon = async () => {
        await fetchPokemon({
            loadingTypeData1, loadingTypeData2,
            typeSelect1, typeSelect2,
            setPokemon, setLoadingPokes,
            setType1, setType2,
            typeData1, typeData2,
            setNoPokes, cancelled
        })
    }

    return <div className="App my-2 mx-auto">
        <h3>Pokemon Types</h3>
        <TypeSelect title={"Type 1"} value={typeSelect1} onChange={changeType1} />
        <ExclusiveTypeFilter checked={exclusiveType && !typeSelect2} onChange={toggleExclusiveType} />
        <TypeSelect title={"Type 2"} value={typeSelect2} onChange={changeType2} />
        {(pokemon.length > 0) && <button className="btn btn-primary d-block mx-auto my-3" onClick={() => setShowModal(true)}>Show Type Matchups</button>}
        <TypeMatchupModal show={showModal} onHide={() => setShowModal(false)} type1={type1} type2={type2} />
        <FetchButton disabled={loadingPokes || loadingTypeData1 || loadingTypeData2} loading={loadingPokes} onClick={handleFetchPokemon} />
        <CancelButton disabled={!loadingPokes} onClick={() => { cancelled.current = true }} />
        {
            pokemon.length > 0 && <RegionFilters data={regionFilters} onChange={changeRegionFilter} />
        }
        {
            pokemon.length > 0 && <LegendaryMythicalFilters legendary={legendaryFilter} mythical={mythicalFilter} onChange={changeLegendaryOrMythicalFilter} />
        }
        {noPokes && <NoPokemonPrompt />}
        <PokemonList data={checkFilters(pokemon)} />
        <Attribution />
    </div>
}

export default App;
