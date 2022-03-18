import { Modal } from "../../Modal";
import { Button } from "../../../Inputs/Button";
import questionIcon from "../../../../../Assets/Images/questionIcon.png"

import "./ConfirmationModal.css"
import { Loading } from "../../../../Loading";

export const ConfirmationModal = props => {
    const {title, acceptBtn, dennyBtn, handleAccept, handleDenny, loading, ...modalProps} = props
    return (
        <Modal className="confirmModal" {...modalProps}>
            <h3 className="modalTitle">{title}</h3>
            <img className="icon" src={questionIcon} alt=""></img>
                {loading && <Loading/>}
                <Button onClick={handleAccept} className="btn btn-primary modalBtn" type="button" title={acceptBtn}/>
                <Button onClick={handleDenny} className="btn btn-secondary" type="button" title={dennyBtn}/>
        </Modal>
    )
}