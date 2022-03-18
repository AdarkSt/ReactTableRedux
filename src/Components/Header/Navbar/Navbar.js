import {NavLink} from "react-router-dom"

import "./Navbar.css"

export const Navbar = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light navBarStyle">
             <div className="collapse navbar-collapse navBarDiv">
                <ul className="navbar-nav navBarUl">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="nav-link active">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={{pathname: "/users", search:"?page=1&sort=first_name&order=asc"}} className="nav-link" activeClassName="nav-link active">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user/create" className="nav-link" activeClassName="nav-link active">Create</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}