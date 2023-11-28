import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { ComentarioBox } from '../components/ComentarioBox'
import { useEtiquetaStore } from '../../hooks/useEtiquetaStore';
import { estadoA, prioridad } from '../types/types'
import { ModalEditarEtiqueta } from '../components/ModalEditarEtiqueta';
import { ModalCerrarEtiqueta } from '../components/ModalCerrarEtiqueta'
import { ModalEliminarEtiqueta } from '../components/ModalEliminarEtiqueta'
import { useComentariosService } from '../../hooks';
import Swal from 'sweetalert2'
export const NotasPage = () => {

    const { id, eid } = useParams()
    const {
        Titulo,
        Detalles,
        Estado,
        Prioridad,
        Fecha,
        MensajeError,
        MiembroId,
        obtenerEtiqueta,
        cerrarEtiqueta,
        eliminarEtiqueta
    } = useEtiquetaStore();

    const { comentarios, mensajeError, obtenerComentarios, agregarComentario, eliminarComentario } = useComentariosService()

    const { uid } = JSON.parse(localStorage.getItem('user'));
    const autorPId = JSON.parse(localStorage.getItem('proyecto'))
    const miembros = JSON.parse(sessionStorage.getItem('miembros'));

    const miembroActual = (uid) => {
        const au = miembros.find(x => x.usuarioId == uid)
        return au
    }

    const mActual = miembroActual(uid)

    useEffect(() => {
        obtenerEtiqueta(eid)
    }, [])

    useEffect(() => {
        obtenerComentarios(eid);
    }, [])


    useEffect(() => {
        if (mensajeError !== undefined) {
            Swal.fire('Error', mensajeError, 'error')
        }
    }, [mensajeError])



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
                    <p className='fs-5'>
                        {Detalles}
                    </p>
                </div>



                <div className='mt-2'>
                    {
                        (Estado == 1 && ((autorPId == uid) || (mActual.id == MiembroId))) &&

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
                                pid={id}
                            />

                            <ModalEliminarEtiqueta
                                eId={eid}
                                eliminarE={eliminarEtiqueta}
                                mensajeError={MensajeError}
                                pId={id}
                            />
                        </>

                    }
                    {
                        (Estado == 2 && ((autorPId == uid) || (mActual.id == MiembroId)))
                        &&
                        <ModalEliminarEtiqueta
                            eId={eid}
                            eliminarE={eliminarEtiqueta}
                            mensajeError={MensajeError}
                            pId={id}
                        />
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
                    Miembro={miembroActual(uid)}
                    eid={eid}
                    eliminarC={eliminarComentario}
                />
                {/* <div className='text-center mt-4'>
                    <h4 style={{ color: 'gray' }}>No hay comentarios</h4>
                </div> */}


            </div>
        </div>
    )
}
