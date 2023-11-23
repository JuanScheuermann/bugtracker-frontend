import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './style.css'
import {
    Badge, Container,
    Tab,
    Tabs
} from 'react-bootstrap'
import { useMiembrosService, useProyectoStore } from '../../hooks'
import { ModalProyecto } from '../components/ModalProyecto'
import { estadoD } from '../types/types'
import { ModalEliminarProyecto } from '../components/ModalEliminarProyecto'
import { ModalEliminarMiembro } from '../components/ModalEliminarMiembro';
import { useEtiquetaStore } from '../../hooks/useEtiquetaStore';
import { prioridad, prioridadC } from '../types/types'
import { useForm } from 'react-hook-form'


export const ProyectoPage = () => {

    const [url, setUrl] = useState(false)
    const {
        Id,
        ProyectoActual,
        Titulo,
        Descripcion,
        Autor,
        EstadoDesarrollo,
        editarProyecto,
        eliminarProyecto,
        MensajeError,
        AutorId
    } = useProyectoStore();



    const { Miembros, obtenerMiembros, eliminarMiembro } = useMiembrosService();
    const { obtenerEtiquetas, Etiquetas } = useEtiquetaStore();
    const { register, handleSubmit } = useForm()


    const { uid } = JSON.parse(localStorage.getItem('user'));

    const { id } = useParams()

    const fetchEtiquetas = async () => {
        await obtenerEtiquetas(id);
    }

    const search = (data, e) => {
        e.preventDefault();
        obtenerEtiquetas(id, data.search)
    }

    useEffect(() => {
        ProyectoActual(id);
    }, [])

    useEffect(() => {
        obtenerMiembros(id);
    }, [])

    useEffect(() => {
        fetchEtiquetas();
    }, [])




    return (
        <div className='p-2'>

            <div className='border p-2 shadow rounded'>
                <h2 className='mb-3'>{Titulo}</h2>
                <p></p>
                <h5>Estado: <Badge bg="warning">{estadoD[EstadoDesarrollo]}</Badge></h5>
                <h6 className='mb-3'>Creador: {Autor}</h6>

                <hr />

                <div className='' style={{ width: '45%' }}>

                    {
                        AutorId == uid &&
                        <>
                            <ModalProyecto
                                /*  titulo={Titulo}
                                descripcion={Descripcion}
                                estadoDesarrollo={EstadoDesarrollo} */
                                editarP={editarProyecto}
                            />

                            <ModalEliminarProyecto
                                mensajeError={MensajeError}
                                eliminarP={eliminarProyecto}
                                pId={Id}

                            />
                        </>
                    }

                </div>
            </div>
            <Container fluid className='mt-3'>
                <Tabs defaultActiveKey='Etiquetas' className='mb-3'>

                    <Tab eventKey='Etiquetas' title='Etiquetas'>
                        <div className='my-3'>

                            <div className='d-flex justify-content-between my-3'>
                                <h2>Etiquetas</h2>

                                <button className='btn-custom mx-2'>
                                    <Link to={`/proyecto/${id}/etiqueta_nueva`} className='nav-link text-white'>
                                        Etiqueta
                                        <i className="bi bi-plus-circle ms-2"></i>
                                    </Link>

                                </button>
                            </div>
                            <form action="" onSubmit={handleSubmit(search)}>
                                <div className="input-group mb-3">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Titulo de la etiqueta"
                                        name='search'
                                        {...register("search")}
                                    />
                                    <button className="input-group-text shadow-none px-4 btn-warning" type='submit'>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descripcion</th>
                                        <th>Prioridad</th>
                                        <th>Autor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Etiquetas.map(e => (
                                            <tr key={e.id}>
                                                <td>{e.titulo}</td>
                                                {/*  <td>{
                                                    miembros.find(m => m.id == e.miembroId)["apiNom"]
                                                }</td> */}
                                                <td><Badge bg={prioridadC[e.prioridad]}>{prioridad[e.prioridad]}</Badge></td>

                                                <th>{Miembros.map(m => {
                                                    if (m.id == e.miembroId) return m.email
                                                })}</th>

                                                <td><Link to={`/proyecto/${id}/etiquetas/${e.id}`}>ver mas</Link></td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </Tab>
                    <Tab eventKey='Miembros' title='Miembros'>
                        <div>
                            {
                                AutorId == uid &&
                                <div>
                                    <button onClick={() => setUrl(true)} className='btn btn-success my-4'>

                                        <Link to={`/proyecto/${id}/agregar_miembro`} className='nav-link text-whitw'>
                                            Agregar Miembro
                                        </Link>
                                    </button>
                                </div>
                            }

                            <div style={{ margin: '0 auto' }}>
                                <table className='text-center'>
                                    <thead>
                                        <tr>
                                            <th>nombre</th>
                                            <th>Usuario</th>
                                            {
                                                AutorId == uid && <th>Acciones</th>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Miembros.filter(u => u.usuarioId != uid).map(u => (
                                                <tr key={u.id}>
                                                    <td>{u.apiNom}</td>
                                                    <td>{u.email}</td>
                                                    {

                                                        AutorId == uid &&
                                                        <td>
                                                            <ModalEliminarMiembro
                                                                proyectoId={id}
                                                                miembroId={u.id}
                                                                eliminarMiembro={eliminarMiembro}
                                                            />
                                                        </td>
                                                    }
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Tab>
                </Tabs>

            </Container>
        </div>
    )
}
