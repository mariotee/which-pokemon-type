import React from "react";
import PokeballSpinner from "components/PokeballSpinner";

interface IFetchButtonProps {
    onClick(): void;
    disabled: boolean;
    loading: boolean;
}

const FetchButton = ({onClick, disabled, loading}: IFetchButtonProps) => <button className="btn btn-info mx-2 py-3" onClick={onClick} disabled={disabled}>
    {
        loading 
            ? <div className="d-flex align-items-center">Loading... <PokeballSpinner /></div>
            : "Find Pokemon!" 
    }
</button>

export default FetchButton;