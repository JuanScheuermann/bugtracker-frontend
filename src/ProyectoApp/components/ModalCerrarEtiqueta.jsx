import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ModalCerrarEtiqueta = ({ eId, cerrarE, mensajeError, pid }) => {


    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = () => {
        console.log(eId);
        cerrarE(eId);
        handleClose();
        navigate(`/proyecto/${pid}`)
    }

    useEffect(() => {
        if (mensajeError !== undefined) {
            handleClose();
            Swal.fire("Error", mensajeError, 'error');
            return;
        }
    }, [mensajeError])

    return (
        <>
            <button className='btn-custom mx-1' onClick={handleShow}>
                <i className="bi bi-pencil-square me-1"></i>
                Cerrar
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Cerrar Etiqueta
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿ Esta seguro de Cerrar la etiqueta ?
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