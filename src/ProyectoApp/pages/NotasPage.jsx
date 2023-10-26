import { useState } from 'react'
import { Badge, Dropdown, Image } from 'react-bootstrap'
import { ComentarioBox } from '../components/ComentarioBox'
import { ComentarioModal } from '../components/ComentarioModal';

export const NotasPage = () => {

    const [modal, setModal] = useState(false);

    return (
        <div className='p-2'>
            <div className='border p-2 shadow rounded'>
                <h2>Problemas con la BD</h2>
                <hr />
                <p style={{ fontSize: '20px', fontWeight: '500', fontStyle: 'oblique' }}>
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

                <ComentarioBox />

                <div
                    className='border shadow mt-3 p-3'
                    style={{ width: '95%', margin: '0 auto' }}
                >
                    <textarea className='w-100 p-2 rounded'></textarea>
                    <button className='btn-comentar fs-5 mt-3'
                        onClick={() => setModal(true)}
                    >
                        <i className="bi bi-plus me-2"></i>
                        Agregar Comentario
                    </button>
                </div>

            </div>
        </div>
    )
}
