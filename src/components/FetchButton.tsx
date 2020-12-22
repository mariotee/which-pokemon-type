interface IFetchButtonProps {
    onClick(): void;
    disabled: boolean;
}

const FetchButton = ({onClick, disabled}: IFetchButtonProps) => <button className="btn btn-info d-block m-auto" onClick={onClick} disabled={disabled}>
    { disabled ? "Loading..." : "Find Me Pokemon!" }
</button>

export default FetchButton;