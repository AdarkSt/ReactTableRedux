import React, { useState } from "react";
import _isEmpty from "lodash/isEmpty";

import {Input} from "../../Material/Inputs/Input"
import {Button} from "../../Material/Inputs/Button"

import defaultPhoto from "../../../Assets/Images/userPhoto.png"
import { validateForm } from "./Utils/Validation";

import "./Form.css"

export const Form = props =>{
    const {onSubmit, buttonName} = props
    const initialValue = {...{first_name:"", last_name:"", age:"", photo: ""}, ...props.initialValue}
    const initialPhoto = initialValue.photo !== "" ?initialValue.photo : defaultPhoto

    const [user, setUser] = useState(initialValue)    
    const [photo, setPhoto] = useState(initialPhoto)
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value
        setUser(prevUser => ({...prevUser, [inputName]:inputValue}))
        setErrors({})
    }

    const handleFileChange = e =>{
        const name = e.target.name;
        const file = e.target.files[0]

        const img = URL.createObjectURL(file)
        
        setPhoto(img)
        setUser(prevUser => ({...prevUser, [name]:file}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let hasError = false;
        const errors = validateForm(user)
        
        if(!_isEmpty(errors)) {
            hasError = true;
            setErrors(errors)
        }
        if(!hasError){ 
            onSubmit(user, (errors) => {
                if(!_isEmpty(errors)){
                    setErrors(errors);
                }
            });
        }
    }

    const handleReset = () => {
        setPhoto(initialPhoto)
        setUser(initialValue);
    }

    return (
        <div className="form">
            <img src={photo} alt="User" className="userPhoto"/>
            <form onSubmit={handleSubmit} onReset={handleReset} className="row g-3 needs-validation" noValidate>
                <Input className="col-md-12" error={errors.first_name} type="text" label="First Name*" name="first_name" onChange={handleChange}  value={user.first_name}/>
                <Input className="col-md-12" error={errors.last_name} type="text" label="Last Name*" name="last_name" onChange={handleChange}  value={user.last_name}/>
                <Input className="col-md-12" error={errors.age} type="number" label="Age*" name="age" onChange={handleChange}  value={user.age}/>
                <Input className="col-md-12" type="file" label="Photo" name="photo" onChange={handleFileChange}/> 
                <div className="col-12">
                    <Button className="btn btn-primary" type="submit" title={buttonName}/>
                    <Button className="btn btn-secondary btn-sm" type="reset" title="Reset"/>
                </div>
            </form>
        </div>
    )
}