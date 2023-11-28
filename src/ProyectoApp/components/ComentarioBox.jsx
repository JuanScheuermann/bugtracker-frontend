import React from 'react'
import { Image } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ModalEditarComentario } from './ModalEditarComentario';

export const ComentarioBox = ({
    comentarios,
    agregarC,
    eliminarC,
    Estado,
    Miembro,
    eid
}) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const AgregarComentario = (data) => {

        agregarC({ cuerpo: data.cuerpo, miembroId: Miembro.id, etiquetaId: eid });
        reset({
            cuerpo: ''
        })
    }

    const eliminarComentario = (cid) => {
        eliminarC({ eid: eid, cid: cid })
    }
    return (
        <div className='seccion-comentarios'>

            {
                comentarios.map((c) => (
                    <div key={c.id} className='comentario-container d-flex justify-content-start align-items-center border shadow mb-2'>

                        <div>

                            <span>{c.miembroStr}</span>
                            <span style={{ fontWeight: 'lighter', marginLeft: '12px' }}>{c.fecha}</span>

                            <p className='mt-1'>{c.cuerpo}</p>

                            {
                                c.miembroId == Miembro.id &&
                                <div className='d-flex align-items-center'>
                                    <ModalEditarComentario
                                        cuerpo={c.cuerpo}
                                        eid={eid}
                                        cid={c.id}
                                    />
                                    <button className='btn btn-danger' onClick={
                                        () => eliminarComentario(c.id)
                                    }>
                                        Eliminar
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
            {
                Estado == 1 &&

                <form action="" onSubmit={handleSubmit(AgregarComentario)}>
                    <div
                        className='border shadow mt-3 p-3'
                        style={{ width: '95%', margin: '0 auto' }}
                    >
                        <textarea className='w-100 p-2 rounded' name='cuerpo'
                            {...register("cuerpo", { required: true })}
                        >

                        </textarea>
                        <button className='btn-comentar fs-5 mt-3'

                        >
                            <i className="bi bi-plus me-2"></i>
                            Agregar Comentario
                        </button>
                    </div>
                </form>

            }

        </div>
    )
}
