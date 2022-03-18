import { useId } from "../../../../Utils/GlobalUtils/useId"

import "./Search.css"

export const Search = props => {

    const {...inputProps} = props
    const id = useId()

    return (
        <input 
            className="bg-dark search"
            {...inputProps}
            id={id}
        />
    )
}