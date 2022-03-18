import { toast } from "react-toastify";

class Toast {
    succes(text="Successfuly created"){
        toast.success(text);
    }
    
    error(text="Something wents wrong"){
        toast.error(text)
    }
}

export const toastService = new Toast()
