import { Modal } from 'react-bootstrap';

import { IPokemonType } from 'models/Pokemon';

import { TYPES } from 'Util/pokemonTypes';
import { Capitalise as C } from "Util/string";

export interface ITypeMatchupModalProps {
    show: boolean;
    onHide(): void;
    type1: IPokemonType;
    type2: IPokemonType;
}

const TypeMatchupModal = ({show, onHide, type1, type2}: ITypeMatchupModalProps) => {
    const getOffensiveMultiplier1 = (typeName: string) => {        
        let multiplier = 1;

        if (!type1) {
            return "";
        }

        multiplier *= type1.strongAgainst.includes(typeName) ? 2 : 1;
        multiplier *= type1.weakAgainst.includes(typeName) ? 0.5 : 1;
        multiplier *= type1.zeroAgainst.includes(typeName) ? 0 : 1;

        return "x"+multiplier;
    }

    const getOffensiveMultiplier2 = (typeName: string) => {
        if (!type2) {
            return "";
        }

        let multiplier = 1;

        multiplier *= type2.strongAgainst.includes(typeName) ? 2 : 1;
        multiplier *= type2.weakAgainst.includes(typeName) ? 0.5 : 1;
        multiplier *= type2.zeroAgainst.includes(typeName) ? 0 : 1;

        return "x"+multiplier;
    }

    const getDefensiveMultiplier = (typeName: string) => {
        if (!type1 && !type2) {
            return "";
        }

        let multiplier = 1;

        if (type1) {
            multiplier *= type1.vulnerableTo.includes(typeName) ? 2 : 1;
            multiplier *= type1.resistantTo.includes(typeName) ? 0.5 : 1;
            multiplier *= type1.immuneTo.includes(typeName) ? 0 : 1;
        }

        if (type2) {
            multiplier *= type2.vulnerableTo.includes(typeName) ? 2 : 1;
            multiplier *= type2.resistantTo.includes(typeName) ? 0.5 : 1;
            multiplier *= type2.immuneTo.includes(typeName) ? 0 : 1;
        }

        return "x"+multiplier;
    }

    return <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton={true}><h3>Type Matchups</h3></Modal.Header>
        <Modal.Body>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <td className="table-primary">Opponent Type</td>
                    <td className="table-primary">{type1 && "Offense "+C(type1.name)}</td>
                    <td className="table-primary">{type2 && "Offense "+C(type2.name)}</td>
                    <td className="table-primary">{(type1 || type2) && "Defense "}</td>
                </tr>
            </thead>
            <tbody>
            {
                TYPES.map((type) => <tr key={"tr-"+type}>
                    <td>{C(type)}</td>
                    <td>{getOffensiveMultiplier1(type)}</td>
                    <td>{getOffensiveMultiplier2(type)}</td>
                    <td>{getDefensiveMultiplier(type)}</td>
                </tr>)
            }
            </tbody>
        </table>
        </Modal.Body>
    </Modal>
}

export default TypeMatchupModal;
