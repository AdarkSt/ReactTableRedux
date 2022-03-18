export const http_Request = async (URL, method, body="") => {
    const url = "http://localhost:3000" + URL
    const options = {}
    options.method = method;
    options.headers = {
        "Content-Type":"application/json",
        "Content-Length": "true"
    }
    
    if(body) {
        options.body = body
    }
    
    const response = await fetch(url, options)
    return response
}

export const http_GetRequest = async (URL) =>{
    const response = await http_Request(URL, "GET");
    const data = await response.json()
    return {
        data: data,
        status: response.status,
        headers: response.headers
    }
}

export const http_PostRequest = async (URL, body) => {
    const response = await http_Request(URL, "POST", body)
    const data = await response.json()
    return {
        data: data,
        status: response.status, 
        headers: response.headers
    }
}

export const http_PatchRequest = async (URL, body) => {
    const response = await http_Request(URL, "PATCH", body);
    const data = await response.json()
    return {
        data: data,
        status: response.status,
        headers: response.headers
    }
}

export const http_DeleteRequest = async (URL) => {
    const response = await http_Request(URL, "DELETE")
    const data = await response.json()
    return {
        data: data,
        status: response.status,
        headers: response.headers
    }
}

