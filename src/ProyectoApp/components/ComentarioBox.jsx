import React from 'react'
import { Image } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export const ComentarioBox = ({
    comentarios = [],
    agregarC,
    Estado,
    Miembro,
    eid
}) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const AgregarComentario = (data) => {

        agregarC({ cuerpo: data.cuerpo, miembroId: Miembro.id, etiquetaId: eid });
    }
    return (
        <div className='seccion-comentarios'>

            {
                comentarios.map((c) => (
                    <div key={c.id} className='comentario-container d-flex justify-content-start align-items-center border shadow mb-2'>
                        {/* <div className='me-3'>
                            <Image roundedCircle
                                style={{
                                    marginLeft: '6px',
                                    border: '1px solid black'
                                }}
                                width={'50px'}
                                height={'50px'}
                                src='https://imgs.search.brave.com/Z8HOujr_Mk4LJgp1ft8Ou-VXGo57bU9NiyUTicIvm24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw'
                            />
                        </div> */}
                        <div>
                            <span>{c.miembroStr}</span>
                            <p className='mt-1'>{c.cuerpo}</p>
                            {
                                c.miembroId == Miembro.id &&
                                <div>
                                    <button className='btn btn-primary me-3'>Editar</button>
                                    <button className='btn btn-danger'>Eliminar</button>
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
                        <textarea className='w-100 p-2 rounded'
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
