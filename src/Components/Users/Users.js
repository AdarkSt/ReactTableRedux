import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useHistory, useLocation,} from "react-router-dom"
import queryString from "query-string"
import { useDispatch, useSelector } from "react-redux"

import { NotFound } from "../NotFound"
import { ConfirmationModal } from "../Material/Modal"
import { View } from "./View/View"

import { toastService } from "../../Services/ToastServices"
import { createUrl } from "../../Utils/AppBasedUtils/createUrl"
import * as userActions from "../../Store/users/actions/actions"

import "./Users.css"

const userSelector = state => state.users.users
const deleteStateSelector = state => state.users.deleteUser

export const Users = props => {

    const location = useLocation()
    const history = useHistory()

    const dispatch = useDispatch()
    const state = useSelector(userSelector)
    const deleteState = useSelector(deleteStateSelector)

    const search =  queryString.parse(location.search)

    const tableData = state.data.list
    const dataCount = state.data.count
    const error = state.error
    const loading = state.loading
    
    const [params, setParams] = useState({
        page: search.page,
        limit: 20, 
        sort: {field: search.sort, order:search.order}, 
        search: {field:"", value:""}
    })
    const [modalState, setModalState] = useState({isOpen:false, data: ""});
    const [searchData, setSearchData] = useState({field:"", value:""})

    useEffect(()=>{
        dispatch(userActions.fetch_users(params, (error)=> {
            error && toastService.error(error)
        }))
    }, [dispatch, params])

    const handleSelect = (page) => {
        setParams(prevParams => ({...prevParams, page:page}))
        const Url = createUrl({...params, page:page})
        history.push({pathname:"/users", search:Url})
    }

    const handleEdit = (id) => {
        history.push(`/user/${id}/edit`)
    }

    const handleOpenDeleteModal = async (id) => {
        setModalState({isOpen: true, data: id})
    }

    const handleCloseDeleteModal = () => {
        setModalState({isOpen:false, data:null})
    }

    const handleDelete = async() => {
        dispatch(userActions.delete_user_request(modalState.data, (error, response)=>{
            handleCloseDeleteModal()
            if(!error){
                dispatch(userActions.fetch_users(params, (error)=> {
                    error && toastService.error(error)
                }))
                response && toastService.succes("Successfuly deleted")
            }
            error && toastService.error(error)
        }))
    }

    const handleSort = (field, order) => {
        const _order = order === "asc" ? "desc" : "asc"
        setParams(prevParams => ({...prevParams, sort:{field:field, order:_order}}))
        const Url = createUrl({...params, sort:{field:field, order:order}})
        history.replace({pathname:"/users", search:Url})
    }

    const handleSearchFieldSelect = (field) => {
        setSearchData(prevSearchData => ({...prevSearchData, field:field}))
    }

    const handleSearchInputChange = (value) => {
        setSearchData(prevSearchData => ({...prevSearchData, value:value}))
    }

    const handleSearch = () => {
        setParams(prevParams => ({...prevParams, search:searchData}))
        const Url = createUrl({...params, search:{field:searchData.field, value:searchData.value}})
        history.replace({pathname:"/users", search:Url})
    }

    const page = <View
                    handleSearch={handleSearch}
                    handleSearchFieldSelect={handleSearchFieldSelect}
                    handleOpenDeleteModal={handleOpenDeleteModal}
                    dataCount={dataCount}
                    searchData={searchData}
                    params={params}
                    handleSort={handleSort}
                    handleSearchInputChange={handleSearchInputChange}
                    tableData={tableData}
                    handleEdit={handleEdit}
                    handleSelect={handleSelect}
                    loading = {loading}
                />

    return(
        <>
            <Helmet>
                <title>Table | Users</title>
            </Helmet>
            {(!error ? page : <NotFound/>)}
            <ConfirmationModal 
                title = "Do you realy want to delete this user?"
                acceptBtn = "Delete"
                dennyBtn = "Cancel" 
                isOpen = {modalState.isOpen}
                handleAccept = {handleDelete}
                handleDenny = {handleCloseDeleteModal}
                ariaHideApp = {false}
                loading = {deleteState.loading}
            >
            </ConfirmationModal>
        </>
    )
}