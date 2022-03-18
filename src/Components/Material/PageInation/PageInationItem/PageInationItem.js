import cx from "classnames"
import "./PageInationItem.css"

export const PageInationItem = props => {

    const {handleSelect, page, active} = props

    return <li
             onClick={()=> handleSelect(page)} 
             className= {cx("page-item", {
                            "active": active
                        })}
            >
                <span className="page-link PageInationItem">{page}</span>
            </li>
}