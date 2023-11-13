import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const ModalEliminarMiembro = ({ eliminarMiembro, miembroId, proyectoId }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = () => {
        eliminarMiembro(proyectoId, miembroId);

        /* if (mensajeError !== undefined) {
            handleClose();
            Swal.fire("Error", mensajeError, 'error');
            return;
        } */

        handleClose();
    }

    return (
        <>
            <button className='btn-custom shadow mx-1' onClick={handleShow}>
                <i className="bi bi-trash me-2"></i>
                Eliminar
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Eliminar Miembro
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿ Esta seguro de eliminar a este miembro ?
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn btn-primary' onClick={submit}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
