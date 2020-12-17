import React from "react";

import { Capitalise } from "Util/string";

import NormalSymbol from "res/normal.png";
import GrassSymbol from "res/grass.png";
import FireSymbol from "res/fire.png";
import WaterSymbol from "res/water.png";
import ElectricSymbol from "res/electric.png";
import IceSymbol from "res/ice.png";
import FightingSymbol from "res/fighting.png";
import PoisonSymbol from "res/poison.png";
import GroundSymbol from "res/ground.png";
import FlyingSymbol from "res/flying.png";
import PsychicSymbol from "res/psychic.png";
import BugSymbol from "res/bug.png";
import RockSymbol from "res/rock.png";
import GhostSymbol from "res/ghost.png";
import DarkSymbol from "res/dark.png";
import DragonSymbol from "res/dragon.png";
import SteelSymbol from "res/steel.png";
import FairySymbol from "res/fairy.png";

const TYPES = [
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

interface ITypeSelectProps {
    title: string;
    value: string;
    onChange(input: string): void;
}

const getSymbol = (pokemonType: string) => {
    switch (pokemonType)
    {
        case "normal": return NormalSymbol;
        case "grass": return GrassSymbol;
        case "fire": return FireSymbol;
        case "water": return WaterSymbol;
        case "electric": return ElectricSymbol;
        case "ice": return IceSymbol;
        case "fighting": return FightingSymbol;
        case "poison": return PoisonSymbol;
        case "ground": return GroundSymbol;
        case "flying": return FlyingSymbol;
        case "psychic": return PsychicSymbol;
        case "bug": return BugSymbol;
        case "rock": return RockSymbol;
        case "ghost": return GhostSymbol;
        case "dark": return DarkSymbol;
        case "dragon": return DragonSymbol;
        case "steel": return SteelSymbol;
        case "fairy": return FairySymbol;
    }
}

const TypeSelect = ({title, value, onChange}: ITypeSelectProps) => {
    return <React.Fragment>
        <label className="d-block">{title}</label>
        <select className="form-control" value={value} onChange={(e) => {onChange(e.target.value)}}>
        <option></option>
        {
            TYPES.map((type) => <option key={"type1-o-"+type} value={type}>{Capitalise(type)}</option>)
        }
        </select>
        {value && <img src={getSymbol(value)} alt={"Type: " + value} />}
    </React.Fragment>
}

export default TypeSelect;