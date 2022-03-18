import "./Cell.css"

export const Cell = props => {

    const {item, coll} = props
    
    return (
        <td>{item[coll.key]}</td>
    )
}