import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalProyecto = ({ titulo, descripcion }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <i className="bi bi-trash3-fill me-2"></i>
                Editar
            </Button>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs>
                        <Tab title='Detalles' eventKey='detalles'>
                            <form action="">
                                <div className='form-group'>
                                    <label>Titulo</label>
                                    <input type="text" value={titulo} className='form-control' />
                                </div>

                                <div className='form-group'>
                                    <label>Descripcion</label>
                                    <textarea className='form-control' value={descripcion}>
                                    </textarea>
                                </div>

                                <div className='form-group'>
                                    <label>Estado</label>
                                    <select className='m-3'>
                                        <option>En desarrollo</option>
                                        <option>Completo</option>
                                        <option>Abandonado</option>
                                    </select>
                                </div>
                            </form>
                        </Tab>
                        <Tab title='Miembros' eventKey='miembros'>
                            <div className='border mt-1 p-3 d-flex justify-content-between align-items-center'>
                                <span>Marcos</span>
                                <button className='btn'>x</button>
                            </div>
                            <div className='border mt-1 p-3 d-flex justify-content-between align-items-center'>
                                <span>Jose</span>
                                <button className='btn'>x</button>
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}