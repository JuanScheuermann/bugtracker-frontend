import React from 'react'
import './proyecto.css'

import { Link } from 'react-router-dom'
import { proyectos } from '../../Data/proyectos'
import { ProyectosTable } from '../components/ProyectosTable'


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
                        <ProyectosTable proyectos={proyectos} />
                    </tbody>
                </table>
            </section>
        </div>
    )
}
