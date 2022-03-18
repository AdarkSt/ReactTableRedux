import { Dropdown } from "../../Material/Inputs/Dropdown"
import { Search } from "../../Material/Inputs/Search"

import searchIcon from "../../../Assets/Images/search.png"

import "./SearchArea.css"

export const SearchArea = props => {

    const {handleSearch, handleSearchFieldSelect, searchData, params, handleSearchInputChange} = props

    return(
        <div className="searchArea bg-dark">
            <img onClick={handleSearch} className="searchIcon" src={searchIcon} alt=""></img>
            <Dropdown
                handleClick={handleSearchFieldSelect} 
                selected={searchData.field} 
                title = "Choose field"
                fields={[
                    {key:"first_name", label:"First Name"},
                    {key: "last_name", label:"Last Name"},
                    {key:"age", label:"Age"},
                ]}
            />
            <Search value={params.search.param} onChange={(e)=>{handleSearchInputChange(e.target.value)}}  placeholder = "...Search"/>
        </div>
    )
}