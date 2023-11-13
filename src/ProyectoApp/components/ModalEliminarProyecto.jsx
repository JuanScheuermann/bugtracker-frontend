import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ModalEliminarProyecto = ({ pId, eliminarP, mensajeError }) => {


    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = () => {
        console.log(pId);
        eliminarP(pId);

        if (mensajeError !== undefined) {
            handleClose();
            Swal.fire("Error", mensajeError, 'error');
            return;
        }

        handleClose();
        navigate('/proyectos', { replace: true });
    }
    return (
        <>
            <button className='btn-custom shadow mx-1' onClick={handleShow}>
                <i className="bi bi-pencil-square me-1"></i>
                Eliminar
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Eliminar Proyecto
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿ Esta seguro de eliminar el proyecto ?
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
