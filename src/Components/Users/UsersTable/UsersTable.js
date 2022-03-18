import { Table } from "../../Material/DataDisplay/Table"
import { Button } from "../../Material/Inputs/Button"
import { SortLabel } from "../../Material/DataDisplay/Table/SortLabel"

import "./UsersTable.css"

export const UsersTable = props => {

    const {data, handleDelete, handleEdit, sort, handleSort} = props

    const tableData = data.map(item => ({
        id: item.id,
        first_name: item.first_name,
        last_name: item.last_name,
        age: item.age,
        photo: <img width={"40px"} height={"50px"} src={item.photo} alt=""></img>,
        action: <div>
                    <Button onClick={()=>handleEdit(item.id)} className="btn btn-secondary" title="Edit"  type="button"/>
                    <Button onClick = {()=>handleDelete(item.id)} className="btn btn-secondary" title="Delete"  type="button"/>
                </div>
    }))

    const colls = [
        {
            key: "first_name",
            label: <SortLabel
                    handleClick={()=> {handleSort("first_name", sort.order)}} 
                    active={sort.field === "first_name"} 
                    labelName="First Name" 
                    order={sort.order}
                    />
        },
        {
            key: "last_name",
            label: <SortLabel 
                    handleClick={()=> {handleSort("last_name", sort.order)}} 
                    active={sort.field === "last_name"} 
                    labelName="Last Name" 
                    order={sort.order}
                    />
        },
        {
            key: "age",
            label: <SortLabel 
                    handleClick={()=> handleSort("age", sort.order)} 
                    active={sort.field === "age"} 
                    labelName="Age" 
                    order={sort.order}
                    />
        },
        {
            key: "photo",
            label: "Photo"
        },
        {
            key:"action",
            label: "Action"
        }
    ]

    return (
        <Table colls={colls} data={tableData}/>
    )
}