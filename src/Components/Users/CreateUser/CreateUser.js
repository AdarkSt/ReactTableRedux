import { Helmet } from "react-helmet-async"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Form } from "../Form"
import { manipulateUser } from "../Utils/manipulateUser"
import { PageLayout } from "../../../Layoutes"
import { toastService } from "../../../Services/ToastServices"
import * as userActions from  "../../../Store/users/actions/actions"
import { Loading } from "../../Loading"

import "./CreateUser.css"

const createUserSelector = state => state.users.createUser

export const CreateUser = props => {
    const history = useHistory()
    
    const dispatch = useDispatch()
    const state = useSelector(createUserSelector)

    const handleCreate = async (user, cb) => {
        
        const _user = await manipulateUser(user)

        dispatch(userActions.create_user_request( _user, (error, response) => {
            response && toastService.succes()
            error && toastService.error(error)
            response && history.replace('/')
            cb(state.error)
        }))

    }

    return (
    <>
        <Helmet>
            <title>Table | Create User</title>
        </Helmet>
        <PageLayout>
            <div className="create">
                <h1 className="title">User Information</h1>
                {state.loading && <Loading/>}
                <Form onSubmit={handleCreate} buttonName="Create"/>
            </div>
        </PageLayout>
    </>          
    )
}
