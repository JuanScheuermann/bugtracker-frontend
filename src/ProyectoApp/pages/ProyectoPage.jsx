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

                <div className='' style={{ width: '45%' }}>
                    <ModalProyecto titulo={Titulo} descripcion={Descripcion} />
                    <button className='btn-custom mx-2'>
                        Etiqueta
                        <i className="bi bi-plus-circle ms-2"></i>
                    </button>
                </div>
            </div>
            <Container fluid className='mt-3'>
                {/* <div>
                    <button className='btn btn-success'>
                        <Link to='/proyecto/1/etiqueta_nueva'
                            style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                            Nueva etiqueta
                        </Link>
                    </button>
                </div> */}
                <div className='my-3'>
                    <div className="input-group mb-3">

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
