import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useProyectoStore } from '../../hooks/useProyectoStore';
import Swal from 'sweetalert2';

export const ModalProyecto = ({ editarP }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { Titulo, Descripcion, EstadoDesarrollo, AutorId, MensajeError } = useProyectoStore()
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);



    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const formSubmit = (data) => {

        console.log(data)

        /*handleClose();*/
        editarP({
            titulo: data.TituloForm,
            descripcion: data.DescripcionForm,
            estadoDesarrollo: data.EstadoDesForm,
            autorId: AutorId
        });

        if (MensajeError !== undefined) {
            Swal.fire('Error', MensajeError, 'error');
            return;
        }

        handleClose();

    }

    return (
        <>
            <button className='btn-custom shadow' onClick={handleShow}>
                <i className="bi bi-pencil-square me-1"></i>
                Editar
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete='off' onSubmit={handleSubmit(formSubmit)}>

                        <Form.Group>
                            <label className="mb-2 text-muted">Titulo</label>
                            <input
                                id='TituloForm'
                                type="text"
                                className='form-control'
                                name='TituloForm'
                                defaultValue={Titulo}
                                {...register("TituloForm", { required: true })}
                            />
                            {errors.TituloForm && <span className='text-danger'>Titulo es obligatorio</span>}
                        </Form.Group>

                        <Form.Group>
                            <label className="mb-2 text-muted">Descripcion</label>
                            <input
                                type="text"
                                className='form-control'
                                name='DescripcionForm'
                                defaultValue={Descripcion}
                                {...register("DescripcionForm")}
                            />
                        </Form.Group>

                        <Form.Group>
                            <label className="mb-2 text-muted">Estado</label>

                            <select {...register("EstadoDesForm")} className='form-control' name="EstadoDesForm">
                                <option value={0}>En desarrollo</option>
                                <option value={1}>Completado</option>
                                <option value={2}>Abandonado</option>
                            </select>

                        </Form.Group>

                        <Form.Group className='mt-3'>
                            <Button variant="primary" type='submit'>
                                Guardar
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}