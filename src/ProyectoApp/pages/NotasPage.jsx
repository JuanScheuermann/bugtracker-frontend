import React from 'react'
import { Badge, Dropdown, Image } from 'react-bootstrap'

export const NotasPage = () => {
    return (
        <div className='p-2'>
            <div className='border p-2 shadow rounded'>
                <h2>Problemas con la BD</h2>
                <hr />
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    No podemos establecer conexion con la base de datos,
                    ya verificamos que el motor de bd este corriendo
                    en segundo plano pero nada.
                </p>
                <h5>Prioridad: <Badge bg="danger">Alta</Badge></h5>
                <h5>Estado: <Badge bg="primary">Abierta</Badge></h5>
                <h5>Fecha: 10/09/2022</h5>
                <hr />
                <div className='mt-2'>
                    <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor: '#805AD5', border: 'none' }}>
                            Acciones
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <i className="bi bi-check me-2"></i>
                                Cerrar Etiqueta
                            </Dropdown.Item>

                            <Dropdown.Item>
                                <i className="bi bi-pencil-square me-2"></i>
                                Editar Etiqueta
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <i className="bi bi-trash3-fill me-2"></i>
                                Eliminar Etiqueta
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className=' mt-4 p-3'>
                <h2>
                    <i className="bi bi-chat-left-text-fill me-2"></i>
                    Comentarios
                </h2>

                <div className='seccion-comentarios'>

                    <div className='comentario-container d-flex justify-content-start'>
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
                            <span>Jose</span>
                            <p>Fijate en la cadena de conexion</p>
                        </div>
                    </div>

                    <div className='comentario-container d-flex justify-content-start'>
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
                            <span>Jose</span>
                            <p>Fijate en la cadena de conexion</p>
                        </div>
                    </div>

                    <button className='btn-comentar fs-5 mt-3'>
                        <i className="bi bi-plus me-2"></i>
                        Agregar Comentario
                    </button>
                </div>
            </div>
        </div>
    )
}
