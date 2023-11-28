import React, { useEffect } from 'react'
import { ProyectosTable } from '../components/ProyectosTable'
import { useProyectoStore, useAuthStore } from '../../hooks'


export const ProyectosParticipacion = () => {

    const { Proyectos, obtenerProyectosParticipacion } = useProyectoStore();

    useEffect(() => {
        obtenerProyectosParticipacion()
    }, [])

    return (
        <div className='p-4'>

            <section className='mb-3'>
                <div className='d-flex justify-content-between'>
                    <h2>Proyectos</h2>
                </div>
            </section>
            <div className=''>
                <div className="input-group mb-3">
                    <input type="text" name='search' className="form-control" placeholder="Titulo de la etiqueta" />
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
                            <th>Autor</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ProyectosTable proyectos={Proyectos} mostrarutor={true} />
                    </tbody>
                </table>
            </section>
        </div>
    )
}
