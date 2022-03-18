import { useHistory } from "react-router-dom"

import { Button } from "../Material/Inputs/Button/Button"
import notFoundPhoto from "../../Assets/Images/notFound.png"

import "./NotFound.css"

export const NotFound = props => {
    const history = useHistory()

    const handleClick = () => {
        history.replace("/")
    }

    return(
        <div className="notFound">
            <h1 className="notFoundContent">Error</h1>
            <img className="notFoundPhoto" src={notFoundPhoto} alt=""></img>
            <h1 className="notFoundContent">Page is Not Found</h1>
            <Button onClick={handleClick} className="btn btn-primary notFoundBtn" type="button" title="Go Home"/>
        </div>
    )
}