interface IExclusiveTypeFilterProps {
    checked: boolean;
    onChange(): void;
}

const ExclusiveTypeFilter = ({checked, onChange}: IExclusiveTypeFilterProps) => <div>
    <label>Filter exclusively on Type 1</label><input className="mx-4" type="checkbox" checked={checked} onChange={onChange} />
</div>

export default ExclusiveTypeFilter;