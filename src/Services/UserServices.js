import { http_GetRequest, http_PostRequest, http_PatchRequest, http_DeleteRequest } from "../Utils/AppBasedUtils/http_Request";

export const createUser = async(user) => {
    const body = JSON.stringify(user)
    const response = await http_PostRequest(`/users`,body)
    return response
}

export const getUsers = async({page = 1, limit = 20, sort, search}) => {
    
    const response = await http_GetRequest(`/users?_page=${page}&_limit=${limit}&_sort=${sort.field}&_order=${sort.order}&${search.field}=${search.value}`)
    return {
        data: response.data,
        count: response.headers.get("X-Total-Count"),
        status: response.status
    }
}

export const getUser = async(id) => {
    const response = await http_GetRequest(`/users/${id}`)
    return response
}

export const updateUser = async(user, id) => {
    const body = JSON.stringify(user)
    const response = await http_PatchRequest(`/users/${id}`, body)
    return response
}

export const deleteUser = async(id) =>{
    const response = await http_DeleteRequest(`/users/${id}`)
    return response
}