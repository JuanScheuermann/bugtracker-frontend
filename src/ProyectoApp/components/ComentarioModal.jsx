import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export const ComentarioModal = (props) => {

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type="text" className='form-control' />
                </Modal.Body>

                <Modal.Footer>
                    <div className='d-flex justify-content-between'>

                        <button
                            className='btn btn-outline-primary'
                            onClick={props.onHide}
                        >
                            Cerrar
                        </button>

                        <button
                            className='btn btn-outline-primary'
                            onClick={props.onHide}
                        >
                            Aceptar
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
