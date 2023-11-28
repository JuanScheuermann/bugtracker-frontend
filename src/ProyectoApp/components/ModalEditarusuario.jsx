import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Modal, Form } from 'react-bootstrap'
import Swal from 'sweetalert2';

export const ModalEditarusuario = ({ rol, uid, agregarPermisos, mensajeError, estado }) => {

    const { register, handleSubmit } = useForm()
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(rol == 'Admin' ? true : false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const formSubmit = (data) => {
        if (data.adminCheck == true) {
            agregarPermisos(uid, "Admin")
        } else {
            agregarPermisos(uid, "Usuario")
        }
        setChecked(false)
        handleClose();
    }

    useEffect(() => {

        if (mensajeError !== undefined) {
            Swal.fire('Error', mensajeError, 'error')
        }
    }, [mensajeError])


    return (
        <>
            <button className='btn-custom mx-1'
                onClick={handleShow}
                disabled={estado}
            >
                <i className="bi bi-pencil-square me-1"></i>
                ...
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Otorgar permisos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete='off' onSubmit={handleSubmit(formSubmit)}>
                        <Form.Group>

                            <input
                                type="checkbox"
                                name='adminCheck'
                                className='me-2'
                                defaultChecked={checked}
                                {...register("adminCheck")}
                                onChange={e => setChecked(e.target.value)}
                            />
                            Otorgar permisos de administrador
                        </Form.Group>

                        <button variant="primary" className='btn btn-primary mt-3' type='submit'>
                            Aceptar
                        </button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
