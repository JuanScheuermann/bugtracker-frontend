import React from 'react'
import { Image } from 'react-bootstrap'

export const ComentarioBox = ({comentarios = []}) => {
    return (
        <div className='seccion-comentarios'>

            {
                     comentarios.map((c) => (
                        <div key={c.id} className='comentario-container d-flex justify-content-start align-items-center border shadow'>
                            <div className='me-3'>
                                <Image roundedCircle
                                    style={{
                                        marginLeft: '6px',
                                        border: '1px solid black'
                                    }}
                                    width={'50px'}
                                    height={'50px'}
                                    src='https://imgs.search.brave.com/Z8HOujr_Mk4LJgp1ft8Ou-VXGo57bU9NiyUTicIvm24/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc3LzUxLzgx/LzM2MF9GXzc3NTE4/MTM2X0Y4OEkwdjNS/Mm1ac0tFZ3h4WE1j/NGlxWGxPaks4T0xF/LmpwZw'
                                />
                            </div>
                            <div>
                                <span>{c.miembro}</span>
                                <p>{c.descripcion}</p>
                            </div>
                        </div>
                    ))
            }

        </div>
    )
}
