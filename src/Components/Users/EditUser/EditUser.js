import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { PageLayout } from "../../../Layoutes"
import { Form } from "../Form"
import { NotFound } from "../../NotFound"
import { Loading } from "../../Loading"

import { toastService } from "../../../Services/ToastServices"
import { manipulateUser } from "../Utils/manipulateUser"
import * as userActions from "../../../Store/users/actions/actions"

import "./EditUser.css"

const editUserSelector = state => state.users.editUser
const userSelector = state => state.users.user

export const EditUser = props => {

    const history = useHistory()
    const {id} = useParams()

    const dispatch = useDispatch()
    const state = useSelector(editUserSelector)
    const user = useSelector(userSelector)

    const loading = state.loading

    useEffect(()=>{
        dispatch(userActions.get_user_request(id, (error, response)=>{
            error && toastService("Connection failed")
        }))
    },[dispatch, id])

    const handleUpdate = async(user, cb) => {
        const _user = await manipulateUser(user)
        
        dispatch(userActions.edit_user_request(_user, id, (error, response)=>{
            response && toastService.succes("Successfully Updated")
            response && history.replace("/")
            error && toastService.error(error)
            cb(state.error)
        }))
    }

    const page =<PageLayout>
                    <div className="update">
                        <h1 className="title">User Information</h1>
                        <Form initialValue = {user} buttonName="Update" onSubmit={handleUpdate}/> 
                    </div>
                </PageLayout>

    const content = (!state.error ? page : <NotFound/>)

    return (
    <>
        <Helmet>
            <title>Table | Edit User</title>
        </Helmet>
        {loading ? <Loading/> : content}
    </>
    )
}