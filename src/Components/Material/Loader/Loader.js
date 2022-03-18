import "./Loader.css"

export const Loader = (props) => {
    const {className, contentClassName} = props
    return (
        <div className={className} style={{display: "flex", justifyContent: "center"}}>
            <div className={contentClassName}></div>
        </div>
    )
}
    
