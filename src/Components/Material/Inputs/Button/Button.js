import "./Button.css"
import cx from "classnames"

export const Button = (props) => {

    const {title, className, ...buttonProps} = props

    return (
        <button
            {...buttonProps}
            className = {cx(className, {
                " button" : true
            })}
        >
            {title}
        </button>
    )
}