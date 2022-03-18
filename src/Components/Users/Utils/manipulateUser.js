import { toBase64 } from "../../../Utils/GlobalUtils/readFile"

export const manipulateUser = async user => {
    let photo
    if(user.photo.constructor.prototype === File.prototype){
        photo = await toBase64(user.photo)
    }
    return {...user, ...{photo:photo}}
}