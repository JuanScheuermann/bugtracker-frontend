import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css'
import {
    Badge, Container,
    Dropdown,
    DropdownMenu
} from 'react-bootstrap'
import { useProyectoStore } from '../../hooks/useProyectoStore'
import { ModalProyecto } from '../components/ModalProyecto'

export const ProyectoPage = () => {

    const [mostrar, setMostrar] = useState(false)
    const { ProyectoActual, Titulo, Descripcion, Autor } = useProyectoStore();
    const { id } = useParams()


    const cerrarModal = () => setMostrar(false);
    const mostrarModal = () => setMostrar(true);

    useEffect(() => {
        ProyectoActual(id);
    }, [])


    return (
        <div className='p-2'>

            <div className='border p-2 shadow rounded'>
                <h2 className='mb-3'>{Titulo}</h2>
                <p></p>
                <h5>Estado: <Badge bg="warning">En Desarrollo</Badge></h5>
                <h6 className='mb-3'>Creador: {Autor}</h6>
                <h6>Fecha: 10/09/2022</h6>

                <hr />

                <div className='d-flex column justify-content-between align-items-center' style={{ width: '45%' }}>
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle variant='dark'>
                            Acciones
                        </Dropdown.Toggle>

                        <DropdownMenu>
                            <Dropdown.Item onClick={() => setMostrar(true)}>
                                <i className="bi bi-caret-down-fill me-1"></i>
                                Miembros
                            </Dropdown.Item>

                            <Dropdown.Item>
                                <i className="bi bi-person-fill-add me-2"></i>
                                Nuevo Miembro
                            </Dropdown.Item>

                            <Dropdown.Item >
                                <i className="bi bi-pencil-square me-2"></i>
                                Editar Proyecto
                            </Dropdown.Item>

                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <i className="bi bi-trash3-fill me-2"></i>
                                Eliminar Proyecto
                            </Dropdown.Item>
                        </DropdownMenu>
                    </Dropdown>

                </div>
            </div>
            <Container fluid className='mt-3'>

                <div className=''>
                    <div className="input-group mb-3">
                        <div className="input-group-text p-0">
                            <select className="form-select form-select-lg shadow-none bg-light border-0">
                                <option>Prioridad</option>
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                        </div>
                        <input type="text" className="form-control" placeholder="Titulo de la etiqueta" />
                        <button className="input-group-text shadow-none px-4 btn-warning">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Descripcion</th>
                                <th>Autor</th>
                                <th>Prioridad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Problemas con la bd</td>
                                <td>Jose</td>
                                <td><Badge bg='danger'>Alta</Badge></td>
                                <td><Link to='/proyecto/1/notas'>ver mas</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}
