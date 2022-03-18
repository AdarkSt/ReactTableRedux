import { PageInationItem } from "./PageInationItem"
import "./PageInation.css"

export const PageInation = props => {

    const {count, handleSelect, active} = props

    const elements = []
    for(let page = 1; page <= count; ++page){
        elements.push(
            <PageInationItem active = {page === +active} key={page} page={page} handleSelect={handleSelect}/>
        )
    }

    return (
        <nav className="pageInation bg-dark">
            <ul className="pagination justify-content-center pageInationUl">
                   {elements}
            </ul>
        </nav>
    )
}