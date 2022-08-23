
const Modal = ({onAccept, onClose, content, config={
    acceptText: 'Aceptar',
    closeText: 'Cerrar',
    hasSmallClose: true,
    isVerticallyCentred: false,
}}) => {
    // content = {text, title}
    const getAcceptButton = () => <button type="button" onClick={onAccept} className="btn btn-primary">{config.acceptText}</button>
    const getSmallClose = () => (
        <button onClick={onClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
    return (
    <div className="modal" tabindex="-1" role="dialog">
        <div className={config.isVerticallyCentred ? "modal-dialog modal-dialog-centered" : "modal-dialog"} role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{content.title}</h5>
                {config.hasSmallClose && getSmallClose()}
            </div>
            <div className="modal-body">
                <p>{content.text}</p>
            </div>
            <div className="modal-footer">
                {onAccept && getAcceptButton()}
                <button type="button" onClick={onClose} className="btn btn-secondary" data-dismiss="modal">{config.acceptText}</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Modal