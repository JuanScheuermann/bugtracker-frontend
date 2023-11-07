import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { useProyectoStore } from '../../hooks/useProyectoStore';

export const ModalProyecto = (editarP) => {

    const { Titulo, Descripcion, EstadoDesarrollo } = useProyectoStore()
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const { Titulo: TituloForm, Descripcion: DescripcionForm, EstadoDesarrollo: EstadoDesForm, onInputChange } = useForm({
        Titulo,
        Descripcion,
        EstadoDesarrollo
    });

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const formSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true)
        editarP();
    }

    return (
        <>
            <button className='btn-custom shadow' onClick={handleShow}>
                <i className="bi bi-pencil-square me-1"></i>
                Editar
            </button>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Editar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs>
                        <Tab title='Detalles' eventKey='detalles'>
                            <Form validated={validated} noValidate autoComplete='off' onSubmit={formSubmit}>

                                <Form.Group>
                                    <label className="mb-2 text-muted">Titulo</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='TituloForm'
                                        value={TituloForm}
                                        onChange={onInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className="mb-2 text-muted">Descripcion</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='DescripcionForm'
                                        value={DescripcionForm}
                                        onChange={onInputChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <label className="mb-2 text-muted">Estado</label>

                                    <select className='form-control' name="EstadoDesForm" value={EstadoDesForm} onChange={onInputChange} required>
                                        <option value={0}>En desarrollo</option>
                                        <option value={1}>Completado</option>
                                        <option value={2}>Abandonado</option>
                                    </select>

                                </Form.Group>
                            </Form>
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