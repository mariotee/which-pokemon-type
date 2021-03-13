export interface ILegendaryMythicalFiltersProps {
    legendary: boolean;
    mythical: boolean;
    onChange(input: string): void;    
}

export default function LegendaryMythicalFilters ({legendary, mythical, onChange}: ILegendaryMythicalFiltersProps) {    
  return <div className="m-3">
        <div className="m-3">
            <div className="d-inline-block">
                <label>Legendary</label>
                <input className="ml-1 mr-3" value="legendary" type="checkbox" onChange={(e) => onChange(e.target.value)} checked={legendary} />
            </div>
            <div className="d-inline-block">
                <label>Mythical</label>
                <input className="ml-1 mr-3" value="mythical" type="checkbox" onChange={(e) => onChange(e.target.value)} checked={mythical} />
            </div>
        </div>
  </div>
}
