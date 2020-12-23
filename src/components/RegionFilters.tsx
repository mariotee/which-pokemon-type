import React from "react";
import { Collapse } from "react-bootstrap";

export interface IRegionFiltersProps {
    data: string[];
    onChange(input: string): void;    
}

export default function RegionFilters ({data, onChange}: IRegionFiltersProps) {    
  const [open, setOpen] = React.useState(false);

  return <div className="m-3">
    <span className="border p-1" onClick={() => setOpen(!open)}>
        Filter by Region <span className={open ? "text-secondary":"text-primary"}>{open ? "▲" : "▼"}</span>
    </span>
    <Collapse in={open}>
        <div className="m-3">
            <div className="d-inline-block">
                <label>Kanto</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Kanto"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Kanto")} />
            </div>
            <div className="d-inline-block">
                <label>Johto</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Johto"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Johto")} />
            </div>
            <div className="d-inline-block">
                <label>Hoenn</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Hoenn"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Hoenn")} />
            </div>
            <div className="d-inline-block">
                <label>Sinnoh</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Sinnoh"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Sinnoh")} />
            </div>
            <div className="d-inline-block">
                <label>Unova</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Unova"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Unova")} />
            </div>
            <div className="d-inline-block">
                <label>Kalos</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Kalos"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Kalos")} />
            </div>
            <div className="d-inline-block">
                <label>Alola</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Alola"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Alola")} />
            </div>
            <div className="d-inline-block">
                <label>Galar</label>
                <input className="ml-1 mr-3" type="checkbox" value={"Galar"} onChange={(e) => onChange(e.target.value)} checked={data.includes("Galar")} />
            </div>
        </div>
    </Collapse>
  </div>
}
