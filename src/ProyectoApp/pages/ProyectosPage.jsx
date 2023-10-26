import React from 'react'
import './proyecto.css'
import { Badge, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ProyectosPage = () => {
    return (
        <div className='p-4'>

            <section className='mb-3'>
                <div className='d-flex justify-content-between'>
                    <h2>Proyectos</h2>
                    <button className='btn btn-success'>
                        <Link to={'/proyecto/nuevo'}
                            style={{
                                textDecoration: 'none',
                                color: 'whitesmoke',
                                borderRadius: 'none'
                            }}>
                            Nuevo Proyecto
                        </Link>
                    </button>
                </div>
            </section>
            <div className=''>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Titulo de la etiqueta" />
                    <button className="input-group-text shadow-none px-4 btn-warning">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Link to='/proyecto/1'>Proyecto n°2</Link></td>
                            <td>Este es mi segundo proyecto</td>
                            <td><Badge bg='warning'>En desarrollo</Badge></td>
                            <td>11/09/22</td>
                        </tr>
                        <tr>
                            <td>Proyecto n°3</td>
                            <td>Este es mi tercer proyecto</td>
                            <td><Badge bg='warning'>En desarrollo</Badge></td>
                            <td>08/10/22</td>
                        </tr>
                        <tr>
                            <td>Proyecto n°4</td>
                            <td>Este es mi cuarto proyecto</td>
                            <td><Badge bg='warning'>En desarrollo</Badge></td>
                            <td>08/10/22</td>
                        </tr>
                        <tr>
                            <td>Proyecto n°5</td>
                            <td>Este es mi quinto proyecto</td>
                            <td><Badge bg='warning'>En desarrollo</Badge></td>
                            <td>08/10/22</td>
                        </tr>
                        <tr>
                            <td>Proyecto n°6</td>
                            <td>Este es mi sexto proyecto</td>
                            <td><Badge bg='warning'>En desarrollo</Badge></td>
                            <td>08/10/22</td>
                        </tr>

                    </tbody>
                </table>
            </section>
        </div>
    )
}
