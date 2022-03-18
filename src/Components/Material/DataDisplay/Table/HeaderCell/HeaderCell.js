import "./HeaderCell.css"

export const HeaderCell = props => {

    const {coll} = props

    return (
        <td>{coll.label}</td>
    )
}