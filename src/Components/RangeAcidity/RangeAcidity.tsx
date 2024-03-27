import "./DropdownFilter.scss"

const RangeAcidity = ({min = 1, max = 5, id, onChange, value}) => {
    return(
        <div className="range-acidity">
            <input 
            id={id}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onchange} />
        </div>
    )
}