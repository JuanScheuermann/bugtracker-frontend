import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Modal, Form } from 'react-bootstrap'
import { useComentariosService } from '../../hooks/useComentariosService';
import Swal from 'sweetalert2';

export const ModalEditarComentario = ({ cid, cuerpo, eid }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { editarComentario } = useComentariosService();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const formSubmit = (data, e) => {

        e.preventDefault()
        editarComentario({
            cid,
            cuerpo: data.cuerpoForm,
            eid
        });

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
                    <Modal.Title>Editar Comentario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete='off' onSubmit={handleSubmit(formSubmit)}>

                        <Form.Group>
                            <label className="mb-2 text-muted">Cuerpo</label>
                            <input
                                type="text"
                                className='form-control'
                                name='cuerpoForm'
                                defaultValue={cuerpo}
                                {...register("cuerpoForm", { required: true })}
                            />
                            {errors.cuerpoForm && <span className='text-danger'>El cuerpo es obligatorio</span>}
                        </Form.Group>

                        <button variant="primary" className='btn btn-primary mt-3' type='submit'>
                            Guardar
                        </button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
