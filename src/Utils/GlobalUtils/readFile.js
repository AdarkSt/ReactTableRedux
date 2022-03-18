export const toBase64 = (file) =>{
    return new Promise((resolve, reject)=>{
        const reader = new FileReader()

        file.constructor.prototype === File.prototype ? reader.readAsDataURL(file) : resolve("")

        reader.onload = () =>{
            resolve(reader.result)
        }
        reader.onerror = (error) => {
            reject(error)
        }
    })
}
