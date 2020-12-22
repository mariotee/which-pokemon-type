import React from "react";

interface IFetchButtonProps {
    onClick(): void;
}

const FetchButton = ({onClick}: IFetchButtonProps) => <button className="btn btn-primary d-block m-auto" onClick={onClick}>
    Find Me Pokemon!
</button>

export default FetchButton;