import "./Row.css"

export const Row = props => {

    const {Cell, item, colls} = props

    return( 
        <tr>
            {colls.map((coll, index) => <Cell key={index} item={item} coll={coll}/>)}
        </tr>
    )
}