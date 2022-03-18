import { Loader } from "../Material/Loader";

import "./Loading.css"

export const Loading = props => {
    return (
        <div className="loading">
            <Loader className="loader" contentClassName="lds-dual-ring-loading"/>
        </div>
    )
}