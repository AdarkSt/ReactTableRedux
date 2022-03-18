import { CREATE_USER_START, 
         CREATE_USER_SUCCESS, 
         CREATE_USER_FAILED, 
         EDIT_USER_START, 
         EDIT_USER_SUCCESS, 
         EDIT_USER_FAILED, 
         FETCH_USERS_START, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILED, 
         GET_USER_START, 
         GET_USER_SUCCESS, 
         GET_USER_FAILED, 
         DELETE_USER_START, 
         DELETE_USER_SUCCESS, 
         DELETE_USER_FAILED } from "./actions/types"

const INITIAL_STATE = {
    createUser: {
        loading : false,
        error : null,
    },
    editUser: {
        loading : false,
        error : null,
    },
    deleteUser: {
        loading: false,
        error: null
    },
    user : null,
    users: {
        data:{
            list : [],
            count : 0
        },
        loading : false,
        error : null,
    }
}

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CREATE_USER_START:
            return {...state, createUser:{loading:true, error:null}}
        case CREATE_USER_SUCCESS:
            return {...state, createUser:{ loading:false, error:null}}
        case CREATE_USER_FAILED: 
            return {...state, createUSer:{ loading:false, error:action.payload}}
        case GET_USER_START:
            return {...state, editUser:{loading: true, error:null}}
        case GET_USER_SUCCESS:
            return {...state, editUser:{loading: false, error:null}, user:action.payload}
        case GET_USER_FAILED:
            return {...state, editUser:{loading: false, error:action.payload}, user:null}
        case EDIT_USER_START:
            return {...state, editUser:{loading:true, error:null}}
        case EDIT_USER_SUCCESS:
            return {...state, editUser:{loading:false, error:null}, user:action.payload}
        case EDIT_USER_FAILED:
            return {...state, editUser:{loading:false, error:action.payload}, user:null}
        case DELETE_USER_START:
            return {...state, deleteUser:{loading:true, error:null}}
        case DELETE_USER_SUCCESS:
            return {...state, deleteUser:{loading:false, error:null}}
        case DELETE_USER_FAILED:
            return {...state, deleteUser:{loading:false, error:action.payload}}
        case FETCH_USERS_START:
            return {...state, users:{...state.users, loading:true, error:null}}
        case FETCH_USERS_SUCCESS:
            return {...state, users:{loading:false, data:action.payload , error:null }}
        case FETCH_USERS_FAILED:
            return {...state, users:{loading:false, data:INITIAL_STATE.users.data, error:action.payload }}
        default: 
            return state
    }
}