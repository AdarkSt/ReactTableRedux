import { Row } from "./Row"
import { Cell } from "./Cell"
import { HeaderCell } from "./HeaderCell"

import "./Table.css"

export const Table = props => {

    const {data, colls} = props
    
    return(
        <table className="table Table table-striped table-bordered table-hover">
            <thead>
                <Row Cell={HeaderCell} colls={colls}/>
            </thead>
            <tbody>
                {data.map(item => <Row key={item.id} Cell={Cell} item={item} colls={colls}/>)}
            </tbody>
        </table>
    )
}