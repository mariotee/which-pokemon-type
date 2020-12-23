import React from "react";
import PokeballSpinner from "./PokeballSpinner";

interface IFetchButtonProps {
    onClick(): void;
    disabled: boolean;
}

const FetchButton = ({onClick, disabled}: IFetchButtonProps) => <button className="btn btn-info d-block m-auto py-3" onClick={onClick} disabled={disabled}>
    {
        disabled 
            ? <div className="d-flex align-items-center">Loading... <PokeballSpinner /></div>
            : "Find Pokemon!" 
    }
</button>

export default FetchButton;