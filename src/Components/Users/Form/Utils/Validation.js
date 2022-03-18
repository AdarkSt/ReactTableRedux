export const validateForm = user => {
    const errors = {}
    if (user.first_name === '') {
        errors.first_name = 'Field is required'
    }
    if(user.last_name === ""){
        errors.last_name = 'Field is required'
    }
    if(user.age === ""){
        errors.age = 'Field is required'
    }
    return errors
}
