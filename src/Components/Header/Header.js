import { Navbar } from "./Navbar"
import { Button } from "../Material/Inputs/Button/Button"
import { useId } from "../../Utils/GlobalUtils/useId"

import "./Header.css"

export const Header = props => {

    const id =  "a" + useId()

    return(
        <div className="header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#" + id} 
                    title={<span className="navbar-toggler-icon"></span>}
                    />
                </div>
            </nav> 
            <div className="collapse" id={id}> 
                <Navbar/>
            </div>
        </div>
    )
}