import React from 'react'
import { Modal } from 'react-bootstrap'

export const ComentarioModal = () => {
    return (
        <>
            <Modal>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type="text" className='form-controller' />
                </Modal.Body>
            </Modal>
        </>
    )
}
