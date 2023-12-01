import { useEffect, useState } from 'react'
import './proyecto.css'

import { Link } from 'react-router-dom'
import { ProyectosTable } from '../components/ProyectosTable'
import { useProyectoStore, useAuthStore } from '../../hooks'
import { useForm } from 'react-hook-form'
import { Paginacion } from '../components/Paginacion'



export const ProyectosPage = () => {

    const { obtenerMisProyectos, Proyectos } = useProyectoStore();
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        obtenerMisProyectos();
    }, [])

    const searchSubmit = (data, e) => {
        e.preventDefault();
        console.log(data)
        obtenerMisProyectos(data.search, data.estadoD);
    }



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
                            <th>Descripcion</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ProyectosTable proyectos={Proyectos} />
                    </tbody>
                </table>
            </section>

            {/*<Paginacion paginas={1} />*/}

        </div>
    )
}
