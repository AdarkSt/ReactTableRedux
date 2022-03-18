import { createUser, deleteUser, getUsers, getUser, updateUser } from "../../../Services/UserServices"
import { CREATE_USER_FAILED,
         CREATE_USER_START,
         CREATE_USER_SUCCESS, 
         EDIT_USER_FAILED, 
         EDIT_USER_SUCCESS, 
         EDIT_USER_START, 
         FETCH_USERS_START, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILED, 
         GET_USER_START, 
         GET_USER_SUCCESS, 
         GET_USER_FAILED, 
         DELETE_USER_START, 
         DELETE_USER_SUCCESS, 
         DELETE_USER_FAILED} from "./types"

export const create_user_start = () =>{
    return {type: CREATE_USER_START}
}

export const create_user_success = () => {
    return {type: CREATE_USER_SUCCESS}
}

export const create_user_failed = (payload) => {
    return {
        type: CREATE_USER_FAILED,
        payload: payload
    }
}

export const create_user_request = (user, cb) => {
    return async(dispatch) => {
        dispatch(create_user_start())
        try{
            const response = await createUser(user)
            if(response.status === 201){
                dispatch(create_user_success())
                cb?.(null, response)
            }
            if(response.status === 400){
                dispatch(create_user_failed("Validation Error"))
                cb?.("Invalid User")
            }
        }
        catch(error) {
            dispatch(create_user_failed(error))
            cb?.("Connection Failed")
        }
        
    }
}

export const get_user_start = () => {
    return {type: GET_USER_START}
}

export const get_user_success = (payload) => {
    return {
        type: GET_USER_SUCCESS,
        payload: payload,
    }
}

export const get_user_failed = (payload) => {
    return {
        type: GET_USER_FAILED,
        payload: payload,
    }
}

export const edit_user_start = () => {
    return {type: EDIT_USER_START}
}

export const edit_user_success = (payload) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: payload,
    }
}

export const edit_user_failed = (payload) => {
    return {
        type: EDIT_USER_FAILED,
        payload: payload
    }
}

export const get_user_request = (id, cb) => {
    return async(dispatch) => {
        dispatch(get_user_start())
        try{
            const response = await getUser(id)
            if(response.status === 200){
                dispatch(get_user_success(response.data))
                cb?.(null, response)
            }
        }
        catch(error) {
            dispatch(get_user_failed(error))
            cb?.("Connection failed")
        }
    }
}

export const edit_user_request = (user, id, cb) => {
    return async(dispatch) => {
        dispatch(edit_user_start())
        try{
            const response = await updateUser(user, id)
            if(response.status === 200) {
                dispatch(edit_user_success(null))
                cb?.(null, response)
            }
            if(response.status === 400) {
                dispatch(edit_user_failed("Invalid User"))
            }
        }
        catch(error) {
            dispatch(edit_user_failed("Connection failed"))
            cb?.("Connection failed")
        }
    }
}

export const fetch_users_start = () => {
    return {type: FETCH_USERS_START}
}

export const fetch_users_success = (payload) =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload : payload
    }
}

export const fetch_users_failed = (payload) => {
    return {
        type: FETCH_USERS_FAILED,
        paylaod: payload
    }
}

export const fetch_users = (params, cb) => {
    return async(dispatch) => {
        dispatch(fetch_users_start())
        try{
            const response = await getUsers(params)
            if(response.status === 200){
                dispatch(fetch_users_success({
                    list: response.data,
                    count: response.count
                }))
            }
        }
        catch (error) {
            dispatch(fetch_users_failed(error))
            cb?.("Connection failed")
        }
    }
}

export const delete_user_start = () => {
    return {type: DELETE_USER_START}
}

export const delete_user_success = () => {
    return {type: DELETE_USER_SUCCESS}
}

export const delete_user_failed = () => {
    return {type: DELETE_USER_FAILED}
}

export const delete_user_request = (id, cb) => {
    return async(dispatch) => {
        dispatch(delete_user_start())
        try{
            const response = await deleteUser(id)
            if (response.status === 200){
                dispatch(delete_user_success())
                cb?.(null, response)
            }
        }
        catch(error) {
            dispatch(delete_user_failed("Connection failed"))
            cb?.("Connection failed")
        }
    }
}
