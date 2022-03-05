interface IProps {
    disabled: boolean;
    onClick(): void;
}

const FetchButton = ({disabled, onClick}: IProps) => <button className="btn btn-info mx-2 py-3" disabled={disabled} onClick={onClick}>Cancel Search</button>

export default FetchButton;