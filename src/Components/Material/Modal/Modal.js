import ReactModal from "react-modal"

import "./Modal.css"

export const Modal = props => {

    const {children, className, ...modalProps} = props

    return (
        <ReactModal {...modalProps} className={`Modal ${className}`} overlayClassName="Overlay">
            {children}
        </ReactModal>
    )
}