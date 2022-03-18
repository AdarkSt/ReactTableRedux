import { useId } from "../../../../Utils/GlobalUtils/useId"
import "./Dropdown.css"

export const Dropdown = props => {

    const {title, selected, fields, handleClick} = props
    
    const active = fields.find(item => item.key === selected)
    
    const id = useId()

    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle dropBtn" type="button" id={id} data-bs-toggle="dropdown">
                {!active ? title : active.label}
            </button>
            <ul className="dropdown-menu dropItem" aria-labelledby={id}>
                {fields.map((field, index) => <li onClick={()=>{handleClick(field.key)}} key={index} className="dropdown-item">{field.label}</li>)}
            </ul>
        </div>
    )
}