import React, { useEffect } from 'react'
import { ProyectosTable } from '../components/ProyectosTable'
import { useProyectoStore, useAuthStore } from '../../hooks'
import { useForm } from 'react-hook-form'



export const ProyectosParticipacion = () => {

    const { Proyectos, obtenerProyectosParticipacion } = useProyectoStore();
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        obtenerProyectosParticipacion()
    }, [])

    const searchSubmit = (data, e) => {
        e.preventDefault();
        obtenerProyectosParticipacion(data.search, data.estadoD)
    }

    return (
        <div className='p-4'>

            <section className='mb-3'>
                <div className='d-flex justify-content-between'>
                    <h2>Proyectos</h2>
                </div>
            </section>
            <div className=''>
                <form action="" onSubmit={handleSubmit(searchSubmit)}>
                    <div className="input-group mb-3">
                        <div className="input-group-text p-0">
                            <select
                                className='form-select form-select-lg shadow-none bg-light border-0'
                                name="estadoD" id=""
                                {...register("estadoD")}
                            >
                                <option value="-1">Estado</option>
                                <option value="0">Desarrollo</option>
                                <option value="1">Finalizado</option>
                                <option value="2">Abandonado</option>

                            </select>
                        </div>
                        <input type="text" name='search'
                            className="form-control"
                            placeholder="Titulo de la etiqueta"
                            {...register("search")}

                        />
                        <button className="input-group-text shadow-none px-4 btn-warning" type='submit'>
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </form>
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
