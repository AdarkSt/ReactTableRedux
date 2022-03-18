import { BrowserRouter, Route } from "react-router-dom"

import { EditUser } from "../Components/Users/EditUser"
import { Users } from "../Components/Users"
import { Dashboard } from "../Components/Dashboard"
import { CreateUser } from "../Components/Users/CreateUser"

export const Routes = props => {
    return (
        <BrowserRouter> 
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/user/create" component={CreateUser}/>
            <Route exact path="/user/:id/edit" component={EditUser}/>
            <Route path="/users" component={Users}/>
        </BrowserRouter>
    )
}