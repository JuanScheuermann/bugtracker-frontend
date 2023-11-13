import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { ComentarioBox } from '../components/ComentarioBox'
import { useEtiquetaStore } from '../../hooks/useEtiquetaStore';
import { estadoA, prioridad } from '../types/types'
import { ModalEditarEtiqueta } from '../components/ModalEditarEtiqueta';
import { ModalCerrarEtiqueta } from '../components/ModalCerrarEtiqueta'
import { ModalEliminarEtiqueta } from '../components/ModalEliminarEtiqueta'
import { useComentariosService, useProyectoStore } from '../../hooks';
export const NotasPage = () => {

    const { id, eid } = useParams()
    const {
        Titulo,
        Detalles,
        Estado,
        Prioridad,
        Fecha,
        MensajeError,
        AutorId,
        //Comentarios,
        obtenerEtiqueta,
        cerrarEtiqueta,
        eliminarEtiqueta
    } = useEtiquetaStore();

    const { comentarios, obtenerComentarios, agregarComentario } = useComentariosService()

    const { uid } = JSON.parse(localStorage.getItem('user'));
    const autorPId = JSON.parse(localStorage.getItem('proyecto'))
    const miembros = JSON.parse(sessionStorage.getItem('miembros'));

    const miembroId = (uid) => {
        const au = miembros.find(x => x.usuarioId == uid)
        return au
    }

    useEffect(() => {
        obtenerEtiqueta(eid)
    }, [])

    useEffect(() => {
        obtenerComentarios(eid);
    }, [comentarios.length])




    return (
        <div className='p-2'>
            <div className='border p-2 shadow rounded'>
                <h2>{Titulo}</h2>
                <hr />
                <div className='row'>

                    <div className='col-lg-4 mb-3'>
                        <div className="card rounded-0 card-margin bg-primary text-white">
                            <div className="p-2">
                                <h3>Estado</h3>
                            </div>
                            <div className="card-body text-center">
                                <h3 style={{ fontWeight: 'normal' }}>
                                    {estadoA[Estado]}

                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 mb-3'>
                        <div className="card rounded-0  card-margin bg-success text-white">
                            <div className="p-2">
                                <h3>Prioridad</h3>
                            </div>
                            <div className="card-body text-center">
                                <h3 style={{ fontWeight: 'normal' }}>
                                    {prioridad[Prioridad]}

                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 mb-3'>
                        <div className="card rounded-0  card-margin bg-danger text-white">
                            <div className="p-2">
                                <h3>Fecha</h3>
                            </div>
                            <div className="card-body text-center">
                                <h3 style={{ fontWeight: 'normal' }}>
                                    {Fecha}

                                </h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border mt-2 p-2'>
                    <h5>Detalles</h5>
                    <p style={{ fontSize: '20px', fontWeight: '500', fontStyle: 'oblique' }}>
                        {Detalles}
                    </p>
                </div>



                <div className='mt-2'>
                    {
                        Estado == 1 && (autorPId == uid) &&

                        <>
                            <hr />
                            <ModalEditarEtiqueta
                                Titulo={Titulo}
                                eid={eid}
                                Detalles={Detalles}
                                Prioridad={Prioridad}
                            />

                            <ModalCerrarEtiqueta
                                eId={eid}
                                mensajeError={MensajeError}
                                cerrarE={cerrarEtiqueta}
                            />

                            <ModalEliminarEtiqueta
                                eId={eid}
                                eliminarE={eliminarEtiqueta}
                                mensajeError={MensajeError}
                                pId={id}
                            />
                        </>

                        /* : <ModalEliminarEtiqueta
                            eId={eid}
                            eliminarE={eliminarEtiqueta}
                            mensajeError={MensajeError}
                            pId={id}
                        /> */

                    }

                </div>
            </div>

            <div className=' mt-4 p-3'>
                <h2>
                    <i className="bi bi-chat-left-text-fill me-2"></i>
                    Comentarios
                </h2>

                <ComentarioBox
                    comentarios={comentarios}
                    Estado={Estado}
                    agregarC={agregarComentario}
                    Miembro={miembroId(uid)}
                    eid={eid}
                />
                {/* <div className='text-center mt-4'>
                    <h4 style={{ color: 'gray' }}>No hay comentarios</h4>
                </div> */}


            </div>
        </div>
    )
}
