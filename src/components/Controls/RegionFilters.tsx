import React from "react";
import { Collapse } from "react-bootstrap";
import { Regions } from "util/pokemon";

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
            {
                Regions.map((e) => <div id={"region-cb-"+e} className="d-inline-block">
                    <label>{e}</label>
                    <input className="ml-1 mr-3" type="checkbox" value={e} onChange={(e) => onChange(e.target.value)} checked={data.includes(e)} />
                </div>)
            }
        </div>
    </Collapse>
  </div>
}
