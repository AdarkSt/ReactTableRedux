import cx from "classnames"

import downArrow from "../../../../../Assets/Images/labelDownArrow.png"
import upArrow from "../../../../../Assets/Images/labelUpArrow.png"

import "./SortLabel.css"

export const SortLabel = props => {

    const {labelName, order, handleClick, active} = props

    const activated = <>
        {order === "asc" && <img className="arrow" src={upArrow} alt=""></img>}
        {order === "desc" && <img className="arrow" src={downArrow} alt=""></img>}
    </>

    return (
        <div 
            className={cx("sortLabel",
                {"active" : active}
            )} 
            onClick={handleClick}
        >
            
            {labelName}
            {active && activated}
        </div>
    )
}