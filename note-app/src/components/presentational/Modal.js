
import { Modal, Button } from "react-bootstrap"

const MyModal = ({onAccept=() => {}, showable=[false, () => {}], content={body: '', title: ''}, config={
    acceptText: 'Aceptar',
    closeText: 'Cerrar',
    onClose : () => showable[1]({
        onAccept,showable: [false, showable[1]],content,config
    })
}}) => {
    // content = {text, title}
    const getAcceptButton = () => <Button variant="primary" onClick={onAccept}>{config.acceptText}</Button>
    
    return (
        <Modal show={showable[0]} onHide={config.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{content.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{content.body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={config.onClose}>
                    {config.closeText}
                </Button>
                {onAccept && getAcceptButton()}
            </Modal.Footer>
      </Modal>
    )
}

export default MyModal