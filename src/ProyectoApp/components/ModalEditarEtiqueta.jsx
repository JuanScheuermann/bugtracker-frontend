import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Modal, Form, Button } from 'react-bootstrap'
import { useEtiquetaStore } from '../../hooks/useEtiquetaStore';
import Swal from 'sweetalert2';

export const ModalEditarEtiqueta = ({ eid, Titulo, Detalles, Prioridad }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { modificarEtiqueta, MensajeError } = useEtiquetaStore();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const formSubmit = (data) => {

        modificarEtiqueta({
            id: eid,
            titulo: data.TituloForm,
            prioridad: data.prioridadForm,
            detalles: data.DetallesForm
        });

        if (MensajeError !== undefined) {
            Swal.fire('Error', MensajeError, 'error')
        };

        handleClose();
    }
    return (

        <>
            <button className='btn-custom mx-1' onClick={handleShow}>
                <i className="bi bi-pencil-square me-1"></i>
                Editar
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Etiqueta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete='off' onSubmit={handleSubmit(formSubmit)}>

                        <Form.Group>
                            <label className="mb-2 text-muted">Titulo</label>
                            <input
                                type="text"
                                className='form-control'
                                name='TituloForm'
                                defaultValue={Titulo}
                                {...register("TituloForm", { required: true })}
                            />
                            {errors.TituloForm && <span className='text-danger'>Titulo es obligatorio</span>}
                        </Form.Group>

                        <Form.Group>
                            <label className="mb-2 text-muted">Detalles</label>
                            <input
                                type="text"
                                className='form-control'
                                name='DetallesForm'
                                defaultValue={Detalles}
                                {...register("DetallesForm")}
                            />
                        </Form.Group>

                        <Form.Group>
                            <label className="mb-2 text-muted">Prioridad</label>

                            <select {...register("prioridadForm")} defaultValue={Prioridad} className='form-control' name="prioridadForm">
                                <option value={1}>Baja</option>
                                <option value={2}>Media</option>
                                <option value={3}>Alta</option>
                            </select>

                        </Form.Group>


                        <button variant="primary" className='btn btn-primary' type='submit'>
                            Guardar
                        </button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
