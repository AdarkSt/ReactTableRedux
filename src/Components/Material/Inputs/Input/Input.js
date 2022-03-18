import cx from "classnames"
import { useId } from "../../../../Utils/GlobalUtils/useId.js";
import "./Input.css"

export const Input = props => {

    const {error, label, className, ...inputProps} = props;
    
    const id = useId()
    
    return(
        <div className={className + " input"}>
            <label htmlFor={id} className="form-label label">{label}</label>
            <input
                className={cx(
                    "form-control",
                    {
                        "invalid_input": error
                    }
                )}
                id={id}
                {...inputProps}
             />
            {error && <div className="validation_div">
                {error}
            </div>}
        </div>
    )
}